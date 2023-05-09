import mongoose from "mongoose";

const connectDB = async () => {
  const uri = `mongodb+srv://ongdalwater:pwj2EEPPDfYsn96b@capstone.00k8dii.mongodb.net/?retryWrites=true&w=majority`;
  await mongoose.connect(uri, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });
};

const disconnectDB = () => {
  mongoose.connection.close();
};

export { connectDB, disconnectDB };
