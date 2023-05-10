const mongoose = require("mongoose");

const connectDB = async () => {
  const uri = `mongodb+srv://vercel-admin-user:fq1GXFlR15kSyUA0@capstone.00k8dii.mongodb.net/myFirstDatabase?retryWrites=true&w=majority`;
  await mongoose
    .connect(uri, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    })
    .catch((err) => {
      throw new Error(err);
    });
};

const disconnectDB = () => {
  mongoose.connection.close();
};

module.exports = { connectDB, disconnectDB };
