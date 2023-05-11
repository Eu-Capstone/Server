const mongoose = require("mongoose");

const connectDB = async () => {
  const uri = `mongodb+srv://vercel-admin-user:fq1GXFlR15kSyUA0@capstone.00k8dii.mongodb.net/myFirstDatabase?retryWrites=true&w=majority`;
  const options = {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    serverSelectionTimeoutMS: 5000,
  };

  try {
    const connection = await mongoose.createConnection(uri, options);
    return connection;
  } catch (error) {
    throw error;
  }
};

const disconnectDB = () => {
  mongoose.connection.close(() => {
    process.exit(0);
  });
};

module.exports = { connectDB, disconnectDB };
