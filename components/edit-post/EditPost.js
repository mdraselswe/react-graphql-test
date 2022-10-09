import { useMutation, useQuery } from '@apollo/client';
import React, { useEffect, useState } from 'react';
import Icon from '../../components/icons';
import PrimaryButton from '../buttons/PrimaryButton';
import Content from '../content/Content';
import PrimaryInput from '../inputs/PrimaryInput';
// import { CREATE_POST_MUTATION } from '../../lib/queries/createPostMutation';
import { notification } from 'antd';
import COMMENTS from '../../lib/queries/getComments';
import POSTS from '../../lib/queries/getPosts';
import { UPDATE_POST_MUTATION } from '../../lib/queries/updatePostMutation';
import SelectItems from '../select/SelectItems';

const openNotificationWithIcon = (type) => {
  notification[type]({
    message: 'Post Updated Successfully',
  });
};

const EditPost = ({ data }) => {
  const [title, setTitle] = useState(data?.data?.title || 'Test Title');
  const [body, setBody] = useState(data?.data?.body?.html || 'Test Body');
  const [selectedComments, setSelectedComments] = useState([]);
  const [commentOptions, setCommentOptions] = useState([]);

  const {
    loading: commentsLoading,
    error: commentsError,
    data: commentsData,
  } = useQuery(COMMENTS);

  useEffect(() => {
    setCommentOptions(
      commentsData?.comments?.map((comment) => ({
        label: comment.data.body,
        value: comment.id,
      }))
    );
  }, []);

  //  ---CREATE POST---
  //   const [createPost, { error }] = useMutation(CREATE_POST_MUTATION);

  //  ---UPDATE POST---
  const [updatePost, { error }] = useMutation(UPDATE_POST_MUTATION, {
    onCompleted: () => openNotificationWithIcon('success'),
  });

  //  ---CREATE POST---
  //   const addPost = () => {
  //     updatePost({
  //       variables: {
  //         payload: {
  //           title: title,
  //           body: {
  //             html: body,
  //           },
  //         },
  //       },
  //       refetchQueries: [
  //         {
  //           query: POSTS,
  //         },
  //       ],
  //     });

  //     if (error) {
  //       console.log('add post error', error);
  //     }
  //   };

  //  ---UPDATE POST---
  const modifyPost = () => {
    updatePost({
      variables: {
        id: data.id,
        payload: {
          title: title,
          body: {
            html: body,
          },
        },
        connect: {
          comment_ids: selectedComments,
        },
      },
      refetchQueries: [
        {
          query: POSTS,
          // variables: { id: data.id },
        },
      ],
    });

    if (error) {
      console.log('add post error', error);
    }
  };

  return (
    <Content>
      <div className='header'>
        <h2>Edit a Post</h2>
        <PrimaryButton
          name='Update'
          icon={<Icon name='update' width={18} height={18} />}
          onClick={modifyPost}
        />
      </div>
      <div>
        <PrimaryInput
          label='Title'
          placeholder='Title'
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <PrimaryInput
          label='Body'
          placeholder='Body'
          value={body}
          onChange={(e) => setBody(e.target.value)}
        />
        <SelectItems
          selectedItems={selectedComments}
          setSelectedItems={setSelectedComments}
          options={commentOptions}
        />
      </div>
    </Content>
  );
};

export default EditPost;
