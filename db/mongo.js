import mongoose from "mongoose"

export const MONGODB_CONNECT = async () => {
    try {
        await mongoose.connect(process.env.MONGODB_URI)
    } catch (error) {
        console.log('error mongodb connected', error);
    }
}

