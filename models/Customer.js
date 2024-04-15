import mongoose, { Mongoose } from "mongoose";
const Schema = mongoose.Schema;

const customerSchema = new Schema({
    customerFirstname: {
        type: String,
        required: true
    },
    customerLastname: {
        type: String,
        required: false
    }
});

const Customer = mongoose.model("Customer", customerSchema);

export default Customer;