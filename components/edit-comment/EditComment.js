import { useMutation } from '@apollo/client';
import { notification } from 'antd';
import React, { useState } from 'react';
import Icon from '../../components/icons';
import COMMENTS from '../../lib/queries/getComments';
import { UPDATE_COMMENT_MUTATION } from '../../lib/queries/updateCommentMutation';
import PrimaryButton from '../buttons/PrimaryButton';
import Content from '../content/Content';
import PrimaryInput from '../inputs/PrimaryInput';

const openNotificationWithIcon = (type) => {
  notification[type]({
    message: 'Comment Updated Successfully',
  });
};

const EditComment = ({ data }) => {
  console.log('🚀 ~ file: EditComment.js ~ line 11 ~ EditComment ~ data', data);
  const [body, setBody] = useState(data?.data?.body || 'Test Body');

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
      </div>
    </Content>
  );
};

export default EditComment;
