import express from "express";
import Server from "./core/server";
import dotenv from "dotenv";

dotenv.config();

const app = new Server();

app.listen(parseInt(process.env.API_PORT || "", 10));