const mongoose = require("mongoose");

const connectDB = () => {
  const uri = `mongodb+srv://vercel-admin-user:fq1GXFlR15kSyUA0@capstone.00k8dii.mongodb.net/myFirstDatabase?retryWrites=true&w=majority`;
  try {
    mongoose.connect(uri, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useCreateIndex: true,
      useFindAndModify: false,
    });
  } catch (err) {
    throw new Error(err.message);
  }
};

const disconnectDB = () => {
  mongoose.connection.close();
};

module.exports = { connectDB, disconnectDB };
