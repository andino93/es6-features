import axios from 'axios';

const baseUrl = 'https://jsonplaceholder.typicode.com';
const endpoints = {
  posts: '/posts',
  comments: '/comments',
  albumns: '/albums',
  photos: '/photos',
  users: '/users',
};

// get users from by promise
const getEndpoint = endpoint => (
  axios.get(`${baseUrl}${endpoint}`)
    .then(users => console.log(users.data))
    .catch(error => console.error('error in user get: ', error))
);
// getEndpoint(endpoints.users);

const hitAllEndpoints = () => {
  const promises = Object.values(endpoints).map(endpoint => axios.get(`${baseUrl}${endpoint}`));
  return Promise.all(promises)
    .then(success => success.map(response => response.data)) // format data from response
    .then(data => console.log(data))
    .catch(error => console.error('error in hitAllEndpoints', error));
};
// hitAllEndpoints();

const getUsers = async () => {
  try {
    const response = await axios.get(`${baseUrl}${endpoints.users}`);
    console.log(response.data);
  } catch (error) {
    console.error(error);
  }
};

// getUsers()

export { getEndpoint, getUsers, hitAllEndpoints };
