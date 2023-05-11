const mongoose = require("mongoose");

const connectDB = async () => {
  const uri = `mongodb+srv://vercel-admin-user:fq1GXFlR15kSyUA0@capstone.00k8dii.mongodb.net/myFirstDatabase?retryWrites=true&w=majority`;
  await mongoose.connect(uri, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    poolSize: 10,
    minSize: 5,
  });
};

const disconnectDB = () => {
  mongoose.connection.close(() => {
    process.exit(0);
  });
};

module.exports = { connectDB, disconnectDB };
