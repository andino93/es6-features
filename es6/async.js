import axios from 'axios';

const baseUrl = 'https://jsonplaceholder.typicode.com';
const endpoints = {
  posts: '/posts',
  comments: '/comments',
  albumns: '/albumns',
  photos: '/photos',
  users: '/users',
};

const getComments = async () => {
  try {
    const response = await axios.get(`${baseUrl}${endpoints.users}`);
    console.log(response)
  } catch (error) {
    console.error(error)
  }
};

getComments()
