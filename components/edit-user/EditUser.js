import { useMutation } from '@apollo/client';
import { notification } from 'antd';
import React, { useState } from 'react';
import Icon from '../../components/icons';
import USERS from '../../lib/queries/getUsers';
import { UPDATE_USER_MUTATION } from '../../lib/queries/updateUserMutation';
import PrimaryButton from '../buttons/PrimaryButton';
import Content from '../content/Content';
import PrimaryInput from '../inputs/PrimaryInput';

const openNotificationWithIcon = (type) => {
  notification[type]({
    message: 'User Updated Successfully',
  });
};

const EditUser = ({ data }) => {
  console.log('🚀 ~ file: EditUser.js ~ line 12 ~ EditUser ~ data', data);
  const [firstName, setFirstName] = useState(
    data?.data?.first_name || 'Test User'
  );
  const [email, setEmail] = useState(data?.data?.email || 'test@gmail.com');

  const [updateUser, { error }] = useMutation(UPDATE_USER_MUTATION, {
    onCompleted: () => openNotificationWithIcon('success'),
  });

  //  ---UPDATE USER---
  const modifyUser = () => {
    updateUser({
      variables: {
        id: data.id,
        payload: {
          first_name: firstName,
          email: email,
        },
      },
      refetchQueries: [
        {
          query: USERS,
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
        <h2>Edit a User</h2>
        <PrimaryButton
          name='Update'
          icon={<Icon name='update' width={18} height={18} />}
          onClick={modifyUser}
        />
      </div>
      <div>
        <PrimaryInput
          label='Name'
          placeholder='Name'
          value={firstName}
          onChange={(e) => setFirstName(e.target.value)}
        />
        <PrimaryInput
          label='Email'
          placeholder='Email'
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
      </div>
    </Content>
  );
};

export default EditUser;
