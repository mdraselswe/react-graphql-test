import { useMutation } from '@apollo/client';
import React, { useState } from 'react';
import Icon from '../../components/icons';
import { UPDATE_COMMENT_MUTATION } from '../../lib/queries/updateCommentMutation';
import PrimaryButton from '../buttons/PrimaryButton';
import Content from '../content/Content';
import PrimaryInput from '../inputs/PrimaryInput';
import SearchTags from '../search-tags/SearchTags';

const EditComment = ({ data }) => {
  console.log('🚀 ~ file: EditComment.js ~ line 11 ~ EditComment ~ data', data);
  const [body, setBody] = useState(data?.data?.body || 'Test Body');

  const [updateComment, { error }] = useMutation(UPDATE_COMMENT_MUTATION);

  //  ---UPDATE COMMENT---
  const modifyComment = () => {
    updateComment({
      variables: {
        id: data.id,
        payload: {
          body: body,
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
      console.log('update user error', error);
    }
  };

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
        <SearchTags />
      </div>
    </Content>
  );
};

export default EditComment;
