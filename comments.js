// Create web server for comments

// Import modules
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const morgan = require('morgan');

// Create express app
const app = express();

// Use modules
app.use(morgan('combined'));
app.use(bodyParser.json());
app.use(cors());

// Create route
app.post('/comment', (req, res) => {
    const comment = req.body.comment;
    console.log(comment);
    res.send({
        message: `Your comment: ${comment} was successfully stored!`
    });
});

// Start server
app.listen(process.env.PORT || 8081);