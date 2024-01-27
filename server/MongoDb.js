import mongoose from "mongoose"
const connectToMongoDB = async () => {
    try {
      await mongoose.connect(process.env.MONGOOSE_URL, {
        useNewUrlParser: true,
        useUnifiedTopology: true
      });
      console.log('MongoDB connected successfully');
    } catch (error) {
      console.error(`MongoDB connection error: ${error}`);
      throw error; 
    }
  };
  export default connectToMongoDB
