import express from "express";
import Server from "./core/server";
import dotenv from "dotenv";
import APIRouter from "./Routers/api";

dotenv.config();

const app = new Server();

//add Router
app.addRouter(new APIRouter());

app.listen(parseInt(process.env.API_PORT || "", 10));