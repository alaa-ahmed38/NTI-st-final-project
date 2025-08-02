const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const cors = require('cors');  

dotenv.config({ path: './config.env' });

const contactRoute = require('./contact-route'); 

const app = express();

mongoose.connect(process.env.MONGO_URI).then(() => {
    console.log("Database connected successfully!");
}).catch((err) => {
    console.error("Database connection error:", err);
});

app.use(cors()); 
app.use(express.json()); 

app.use("/messages", contactRoute);

const port = process.env.PORT || 3000;
app.listen(port, () => {
    console.log(`Server is listening on port ${port}`);
});