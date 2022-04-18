const mongoose = require('mongoose');

const connectDB = async () =>  {
    const uri = process.env.MONGO_URI;
    mongoose.connect(uri)
    .then(() => {
        console.log('Successfully connected to MongoDB Atlas!');
    })
    .catch((error) => {
        console.log('Unable to connect to MongoDB Atlas!');
        console.error(error);
    });
}

module.exports = connectDB;