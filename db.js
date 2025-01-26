import mongoose from "mongoose";

const connectDB = async () => {
  try {
    // Use environment variable for MongoDB URI
    const MONGO_URI = process.env.MONGO_URI || "your-default-mongo-uri";

    await mongoose.connect(MONGO_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log("Connected to MongoDB");
  } catch (error) {
    console.error("MongoDB connection error:", error);
    process.exit(1); // Exit the process with a failure
  }
};

export default connectDB;
