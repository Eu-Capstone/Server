const mongoose = require("mongoose");

const connectDB = async () => {
  const uri = `mongodb+srv://vercel-admin-user:fq1GXFlR15kSyUA0@capstone.00k8dii.mongodb.net/myFirstDatabase?retryWrites=true&w=majority`;
  const options = {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  };

  try {
    await mongoose.connect(uri, options);
  } catch (error) {
    throw new Error(error.message);
  }
};

const disconnectDB = () => {
  mongoose.connection.close();
};

module.exports = { connectDB, disconnectDB };
