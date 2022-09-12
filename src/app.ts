import express from "express";
import Server from "./core/server";
import dotenv from "dotenv";
import APIRouter from "./Routers/api";
import LoggerMiddleware from "./Middlewares/logger.middleware";

dotenv.config();

//server intialization
const app = new Server();

//add Routers
app.addRouter(new APIRouter());

//add Middlwares
app.addMiddleware(new LoggerMiddleware());

//server listening
app.listen(parseInt(process.env.API_PORT || "", 10));