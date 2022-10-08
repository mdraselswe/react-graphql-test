import { useMutation } from '@apollo/client';
import React, { useState } from 'react';
import Icon from '../../components/icons';
import { UPDATE_USER_MUTATION } from '../../lib/queries/updateUserMutation';
import PrimaryButton from '../buttons/PrimaryButton';
import Content from '../content/Content';
import PrimaryInput from '../inputs/PrimaryInput';
import SearchTags from '../search-tags/SearchTags';

const EditUser = ({ data }) => {
  console.log('🚀 ~ file: EditUser.js ~ line 12 ~ EditUser ~ data', data);
  const [firstName, setFirstName] = useState(
    data?.data?.first_name || 'Muhammad Rasel'
  );
  const [email, setEmail] = useState(data?.data?.email || 'rasel@gmail.com');

  const [updateUser, { error }] = useMutation(UPDATE_USER_MUTATION);

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
        <SearchTags data={data} />
      </div>
    </Content>
  );
};

export default EditUser;
