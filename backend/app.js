import express from "express";
import cors from "cors";
import dotenv from 'dotenv';
import {dbConnection} from "./database/dbConnection.js";
import {errorMiddleware} from './error/error.js';
import reservationRouter from './routes/reservationRoute.js';

const app= express();
dotenv.config({path:'./config/config.env'});

app.use(cors({
    origin :[process.env.FRONTEND_URL],
    methods: ["POST"],
    credentials: true,
})
);


app.use((req, res, next) => {
    res.setHeader("Access-Control-Allow-Origin", process.env.FRONTEND_URL); // Allow requests from frontend
    res.setHeader("Access-Control-Allow-Methods", "POST"); // Specify allowed methods
    res.setHeader("Access-Control-Allow-Headers", "Content-Type, Authorization"); // Specify allowed headers
    res.setHeader("Access-Control-Allow-Credentials", "true"); // Allow credentials (if applicable)
    if (req.method === "OPTIONS") {
        // Handle preflight requests
        res.status(204).end();
    } else {
        next();
    }
});


app.options("*", cors({
    origin: process.env.FRONTEND_URL,
    methods: ["GET", "POST", "PUT", "DELETE", "OPTIONS"],
    credentials: true,
    allowedHeaders: ["Content-Type", "Authorization"],
}));

app.use((req, res, next) => {
    console.log("Request Method:", req.method);
    console.log("Request URL:", req.url);
    console.log("Request Headers:", req.headers);
    next();
});


app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use('/api/v1/reservation', reservationRouter);

dbConnection();


app.use(errorMiddleware);

export default app;