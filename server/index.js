require('dotenv').config();
const connectDB = require('./db');
connectDB();
const express = require('express');
const cors = require('cors');
const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true}));
app.use(cors());
const port = process.env.PORT || 8080;

const todos = require('./routes/todo');

app.use('/todo', todos);

app.listen(port, () => console.log(
    `Listening on port ${port}`
));