import mongoose, { Mongoose } from "mongoose";
const Schema = Mongoose.Schema()

const customerSchema = new Schema({
    customerFirstname: {
        type: String,
        required: true
    },
    customerLastname: {
        type: String,
        required: false
    }
})