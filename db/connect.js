const mongoose = require("mongoose");

const connectDB = () => {
  const uri = `mongodb+srv://ongdalwater:pwj2EEPPDfYsn96b@capstone.00k8dii.mongodb.net/?retryWrites=true&w=majority`;
  mongoose.connect(uri, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });
};

const disconnectDB = () => {
  mongoose.connection.close();
};

module.exports = { connectDB, disconnectDB };
