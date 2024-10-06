import mongoose from "mongoose";

const connectDB = async () => {
    try {
        console.log("Connecting to the database...")
        await mongoose.connect(process.env.MONGO_URI);
        console.log('mongodb connected successfully');
    } catch (error) {
        console.log(error);
    }
}
export default connectDB;