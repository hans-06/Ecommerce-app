import express from "express";
import colors from "colors"
import dotenv from "dotenv";
import morgan from "morgan";
import connectDB from "./config/db.js";
import authRoute from "./routes/authRoute.js"

//configure env
dotenv.config()

//database config
connectDB();

//rest object
const app = express();

//middlewares
app.use(express.json());
app.use(morgan('dev'));

//routes
app.use('/api/v1/auth', authRoute);

//rest api
app.get('/', (req, res) => {
    res.send({
        message: 'welcome to ecommerce app'
    })
})

//Port
const PORT = process.env.PORT || 8080;

// run listen
app.listen(PORT, () => {
    console.log(`server is running on ${PORT}`.bgCyan.white);
})