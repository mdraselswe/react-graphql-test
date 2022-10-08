import { Layout } from 'antd';
import React from 'react';
import { useQuery } from '@apollo/client';
import EditComment from '../components/edit-comment/EditComment';
import EditPost from '../components/edit-post/EditPost';
import EditUser from '../components/edit-user/EditUser';
import CustomIcon from '../components/icons';
import PrimaryTab from '../components/tabs/PrimaryTab';
import TabLabelWithIcon from '../components/tabs/TabLabelWithIcon';
import { initializeApollo } from '../lib/apollo';
import COMMENTS from '../lib/queries/getComments';
import POSTS from '../lib/queries/getPosts';
import USERS from '../lib/queries/getUsers';

const { Content } = Layout;

const Crud = () => {
  const {
    loading: usersLoading,
    error: usersError,
    data: usersData,
  } = useQuery(USERS);

  const {
    loading: postsLoading,
    error: postsError,
    data: postsData,
  } = useQuery(POSTS);

  const {
    loading: commentsLoading,
    error: commentsError,
    data: commentsData,
  } = useQuery(COMMENTS);

  console.log('----users', usersData, usersLoading);
  console.log('----posts', postsData);
  console.log('----comments', commentsData);

  if (usersLoading) return <p>Loading...</p>;

  if (usersError || !usersData) return <p>ERROR</p>;

  // if (usersData.users.length === 0) return <p>Not found</p>;

  // console.log('data', data, loading, error);

  const options = postsData.posts.map((post) => ({
    label: post.data.first_name || 'Test Name',
    value: post.id,
  }));

  console.log('options', options);

  const users = usersData.users.map((user) => {
    return {
      // label: user.data.first_name || 'Test',
      label: (
        <TabLabelWithIcon
          label={user.data.first_name || 'Test User'}
          icon={<CustomIcon name='user' width={16} height={16} />}
        />
      ),
      key: user.id,
      children: <EditUser data={user} />,
      // children: <PrimaryAutoComplete options={options} />,
    };
  });

  const posts = postsData.posts.map((post) => {
    return {
      // label: user.data.first_name || 'Test',
      label: (
        <TabLabelWithIcon
          label={post.data.title || 'Test Post'}
          icon={<CustomIcon name='user' width={16} height={16} />}
        />
      ),
      key: post.id,
      children: <EditPost data={post} />,
    };
  });

  const comments = commentsData.comments.map((comment) => {
    return {
      // label: user.data.first_name || 'Test',
      label: (
        <TabLabelWithIcon
          label={comment.data.body || 'Test Comment'}
          icon={<CustomIcon name='user' width={16} height={16} />}
        />
      ),
      key: comment.id,
      children: <EditComment data={comment} />,
    };
  });

  const sidebarData = [
    {
      label: 'Users',
      key: '1',
      children: <PrimaryTab items={users} minWidth={265} />,
    },
    {
      label: 'Posts',
      key: '2',
      children: <PrimaryTab items={posts} minWidth={265} />,
      // disabled: true,
    },
    {
      label: 'Comments',
      key: '3',
      children: <PrimaryTab items={comments} minWidth={265} />,
    },
  ];

  return (
    <>
      <PrimaryTab items={sidebarData} />
    </>
  );
};

export default Crud;

export const getStaticProps = async () => {
  const apolloClient = initializeApollo();
  await apolloClient.query({
    query: USERS,
    // variables: { code: 'VARIABLE' },
    // notifyOnNetworkStatusChange: true,
    // fetchPolicy: 'no-cache',
  });
  await apolloClient.query({
    query: POSTS,
  });
  await apolloClient.query({
    query: COMMENTS,
  });

  return {
    props: {
      initialApolloState: apolloClient.cache.extract(),
    },
  };
};
