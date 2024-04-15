import express from "express";
import cors from "cors";
import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config();

const connectionString = process.env.MONGODB_CONNECTION_STRING;

const app = express()
const port = 3001;

app.use(express.json())
app.use(cors())

mongoose.connect(
    connectionString, {
     useNewUrlParser: true,
     useUnifiedTopology: true 
    }
)

const connection = mongoose.connection;

connection.once('open', () => {
    console.log("MongoDB database connection established successfully");
})

app.listen(port, () => {
    console.log(`\nApp is listening at http://localhost:${port}`)
})