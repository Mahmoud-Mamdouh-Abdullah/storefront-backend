import { RequestHandler } from "express";

export default interface AppMiddleware {
  getMiddleware(): RequestHandler;
}