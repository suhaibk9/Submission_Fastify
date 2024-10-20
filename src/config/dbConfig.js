const { ATLAS_DB_URL, NODE_ENV } = require('./serverConfig');
const mongoose = require('mongoose');
const connectToDB = async () => {
  try {
    if (NODE_ENV === 'development') {
      await mongoose.connect(ATLAS_DB_URL);
    }
  } catch (err) {
    console.log('Error connecting to DB', err);
  }
};
module.exports = connectToDB;
