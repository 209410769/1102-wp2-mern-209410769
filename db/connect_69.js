import mongoose from "mongoose";

const connectDB_69 = (url) => {
    return mongoose.connect(url);
}

export default connectDB_69;