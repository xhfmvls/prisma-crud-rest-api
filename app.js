// Dependencies Import
import express, { urlencoded } from "express";
import createError from "http-errors"; 
import morgan from "morgan";
import dotenv from "dotenv"; 
import "express-async-errors"; 

// Declare other variables
dotenv.config()
const app = express(); 
const PORT = process.env.PORT; 

// Import Router
import apiRouter from "./routes/api.js";
import productRouter from "./routes/productRouter.js"; 

// Import Middleware
import ignoreFavicon from "./middleware/ignoreFavicon.js"; 

// Middleware Configuration
app.use(express.json()); 
app.use(express.urlencoded({extended: false})); 
app.use(morgan("dev")); 

// Ignore Favicon Error Middleware
app.use(ignoreFavicon); 

// Basic Get Router
app.get('/', async(req, res, next) => {
    return res.status(200).send({msg: 'This part is OK'}); 
}); 

// Routers
app.use('/api/v1', apiRouter); 
app.use('/api/v1/product', productRouter); 

// Not Found
app.use((req, res, next) => {
    return next(createError.NotFound()); 
}); 

// Error Handler
app.use((err, req, res, next) => {
    res.status(err.status || 500); 
    return res.json({
        success: false, 
        message: err.message
    }); 
}); 

app.listen(PORT, () => {
    console.log(`[+] APP listen on port: ${PORT}`); 
}); 