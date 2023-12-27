import mongoose, { Schema, models } from "mongoose";


const UserMessage = new Schema({
    firstname: {
        type: String,
    },
    lastname: {
        type: String,
    }, 
    phone: {
        type: String,
    },
    email: {
        type: String,
    }, 
    investmain: {
        type: String,
    },
    mainspan: {
        type: String,
    }, 
    message: {
        type: String,
    }, 
    
}, { timestamps: true })

const Message = models.Message || mongoose.model('Message', UserMessage)
export default Message