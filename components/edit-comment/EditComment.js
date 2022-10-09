import { useMutation, useQuery } from '@apollo/client';
import { notification } from 'antd';
import React, { useEffect, useState } from 'react';
import Icon from '../../components/icons';
import COMMENTS from '../../lib/queries/getComments';
import POSTS from '../../lib/queries/getPosts';
import { UPDATE_COMMENT_MUTATION } from '../../lib/queries/updateCommentMutation';
import PrimaryButton from '../buttons/PrimaryButton';
import Content from '../content/Content';
import PrimaryInput from '../inputs/PrimaryInput';
import SelectSingle from '../select/SelectSingle';

const openNotificationWithIcon = (type) => {
  notification[type]({
    message: 'Comment Updated Successfully',
  });
};

const EditComment = ({ data }) => {
  const [body, setBody] = useState(data?.data?.body || 'Test Body');
  const [selectedPost, setSelectedPost] = useState(data?.post?.id || null);
  const [postOptions, setPostOptions] = useState([]);
  
  const {
    loading: postsLoading,
    error: postsError,
    data: postsData,
  } = useQuery(POSTS);

  useEffect(() => {
    setPostOptions(
      postsData?.posts?.map((post) => ({
        label: post.data.title,
        value: post.id,
      }))
    );
  }, []);

  const [updateComment, { error }] = useMutation(UPDATE_COMMENT_MUTATION, {
    onCompleted: () => openNotificationWithIcon('success'),
  });

  //  ---UPDATE COMMENT---
  const modifyComment = () => {
    updateComment({
      variables: {
        id: data.id,
        payload: {
          body: body,
        },
        connect: {
          post_id: selectedPost,
        },
      },
      refetchQueries: [
        {
          query: COMMENTS,
        },
      ],
    });

    if (error) {
      console.log('update user error', error);
    }
  };

  if (postsError || error) return <p>ERROR</p>;

  return (
    <Content>
      <div className='header'>
        <h2>Edit a Comment</h2>
        <PrimaryButton
          name='Update'
          icon={<Icon name='update' width={18} height={18} />}
          onClick={modifyComment}
        />
      </div>
      <div>
        <PrimaryInput
          label='Body'
          placeholder='Body'
          value={body}
          onChange={(e) => setBody(e.target.value)}
        />
        <SelectSingle
          handleSelectedItem={(value) => setSelectedPost(value)}
          options={postOptions}
          label='Post'
          childLabel='Search A Post and Tag this Comment '
          defaultValue={selectedPost}
        />
      </div>
    </Content>
  );
};

export default EditComment;
