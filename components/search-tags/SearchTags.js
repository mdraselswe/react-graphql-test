import { Select, Spin } from 'antd';
import debounce from 'lodash/debounce';
import React, { useEffect, useMemo, useRef, useState } from 'react';
import { initializeApollo } from '../../lib/apollo';
import USERS from '../../lib/queries/getUsers';
import styles from './SearchTags.module.scss';
import { useApolloClient, useQuery } from '@apollo/client'

function DebounceSelect({ fetchOptions, debounceTimeout = 800, ...props }) {
  const [fetching, setFetching] = useState(false);
  const [options, setOptions] = useState([]);
  const fetchRef = useRef(0);
  const debounceFetcher = useMemo(() => {
    const loadOptions = (value) => {
      fetchRef.current += 1;
      const fetchId = fetchRef.current;
      setOptions([]);
      setFetching(true);
      fetchOptions(value).then((newOptions) => {
        if (fetchId !== fetchRef.current) {
          // for fetch callback order
          return;
        }

        setOptions(newOptions);
        setFetching(false);
      });
    };

    return debounce(loadOptions, debounceTimeout);
  }, [fetchOptions, debounceTimeout]);
  return (
    <Select
      labelInValue
      filterOption={false}
      onSearch={debounceFetcher}
      notFoundContent={fetching ? <Spin size='small' /> : null}
      {...props}
      options={options}
    />
  );
} // Usage of DebounceSelect

// async function fetchUserList(username) {
//   console.log('fetching user', username);
//   return fetch('https://randomuser.me/api/?results=5')
//     .then((response) => response.json())
//     .then((body) =>
//       body.results.map((user) => ({
//         label: `${user.name.first} ${user.name.last}`,
//         value: user.login.username,
//       }))
//     );
// }

const SearchTags = ({data}) => {
  const [value, setValue] = useState([]);
  console.log('---data', data)

  const {
    loading: usersLoading,
    error: usersError,
    data: usersData,
  } = useQuery(USERS);


  console.log('----users TAG', usersData, usersLoading);


  useEffect(() => {
    const fetchData = async () => {
      const apolloClient = initializeApollo();
      await apolloClient.query({
        query: USERS,
      });
    }
    fetchData()
    console.log('fetching data', fetchData());
  }, [])

  async function fetchUserList(username) {
    console.log('fetching user', username);
    return fetch('https://randomuser.me/api/?results=5')
      .then((response) => response.json())
      .then((body) =>
        body.results.map((user) => ({
          label: `${user.name.first} ${user.name.last}`,
          value: user.login.username,
        }))
      );
   
  }

  const Loading = () => {

    const [loading, setLoading] = React.useState('loading')

    setTimeout(() => {
      console.log('set time out')
      setLoading('...loading')
    }, 9999)

    return (
      <div>
        Loading...{loading}
      </div>
    )
  }

  if (usersLoading) return <Loading/>;


  return (
    <DebounceSelect
      mode='multiple'
      value={value}
      placeholder='Select users'
      fetchOptions={fetchUserList}
      onChange={(newValue) => {
        setValue(newValue);
      }}
      style={{
        width: '100%',
      }}
      className={styles.input_root}
    />
  );
};

export default SearchTags;
