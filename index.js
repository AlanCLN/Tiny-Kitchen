import express from "express";
import mongoose from "mongoose";
import { orders } from "./routes/orders.js";
import { MONGO_URI } from "./config/keys.js";

const app = express();

mongoose.connect(MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
}).then( () => console.log("MongoDB connected!"))
.catch(err => console.log(err));

app.use(express.json())
app.get('/', (req, res) => res.send('Hello World'))
app.use('/api/orders', orders);

const port = process.env.PORT || 5001;
app.listen(port, () => console.log(`Server is running on port ${port}`));

