import mongoose from 'mongoose';

const connectDB = async (url) => {
    try {
        const db = await mongoose.connect(url);
        console.log(`persistence/connected - db:${db.connection.name}`);
    } catch (error) {
        console.log(error);
    }
};

export default connectDB;
