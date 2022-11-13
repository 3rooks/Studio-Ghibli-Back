import mongoose from 'mongoose';

const connectDB = async () => {
    try {
        const db = await mongoose.connect(process.env.MONGODB_URL);
        console.log(`persistence/connected - db:${db.connection.name}`);
    } catch (error) {
        console.log(error);
    }
};

export default connectDB;
