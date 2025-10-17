import mongoose from "mongoose";

const connectMongoDb = async () => {
    try {
         const conn = await mongoose.connect(process.env.MONGODB_URI)
            console.log(`MongoDB connected: ${conn.connection.host}`);
    } catch (error) {
        console.error(`Error connecting to mongoDB: ${error.message}`);
        process.exit(1);
    }
};

export default connectMongoDb;
