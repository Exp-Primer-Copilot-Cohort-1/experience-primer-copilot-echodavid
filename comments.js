// Create a web server that can respond to requests for comments
// from a specific post
// 1. Create an express web server
// 2. Create an endpoint for fetching a list of comments for a post
// 3. Setup a "start" script and "start" it

const express = require('express');
const axios = require('axios');

const app = express();

app.get('/comments', async (req, res) => {
  const { data } = await axios.get(
    'https://jsonplaceholder.typicode.com/comments'
  );
  res.send(data);
});

app.listen(4001, () => {
  console.log('Listening on 4001');
});