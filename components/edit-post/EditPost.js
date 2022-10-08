import { useMutation } from '@apollo/client';
import React, { useState } from 'react';
import Icon from '../../components/icons';
import PrimaryButton from '../buttons/PrimaryButton';
import Content from '../content/Content';
import PrimaryInput from '../inputs/PrimaryInput';
import SearchTags from '../search-tags/SearchTags';
// import { CREATE_POST_MUTATION } from '../../lib/queries/createPostMutation';
import { UPDATE_POST_MUTATION } from '../../lib/queries/updatePostMutation';
// import POSTS from '../../lib/queries/getPosts';

const EditPost = ({ data }) => {
  console.log('🚀 ~ file: EditPost.js ~ line 13 ~ EditPost ~ data', data);
  const [title, setTitle] = useState(data?.data?.title || 'Test Title');
  const [body, setBody] = useState(data?.data?.body?.html || 'Test Body');

  //  ---CREATE POST---
  //   const [createPost, { error }] = useMutation(CREATE_POST_MUTATION);

  //  ---UPDATE POST---
  const [updatePost, { error }] = useMutation(UPDATE_POST_MUTATION);

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
      },
      //   refetchQueries: [
      //     {
      //       query: POSTS,
      //       variables: { launchId: data.id },
      //     },
      //   ],
      //   update(cache, { data }) {
      //     const { posts } = cache.readQuery({ query: POSTS });
      //     cache.writeQuery({
      //       query: POSTS,
      //       data: { posts: posts.concat([data.updatePost]) },
      //     });
      //   },
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
        <SearchTags />
      </div>
    </Content>
  );
};

export default EditPost;
