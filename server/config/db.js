const mongoose = require('mongoose');
const config = require('config');
const db = config.get('MONGO_URI');

const connectDB = async () => {
  try {
    await mongoose.connect(db);
    console.log('MongoDB Connected...');
  } catch (error) {
    console.error(error.message);
    //! Exit process with failure
    process.exit(1);
  }
};

module.exports = connectDB;
