import express, { IRouter } from "express";
import { all, getUserById, login, signUp } from "../../Controllers/userController";
import RouterInterface from "../../core/interfaces/routerInterface";
import { jwtMiddleware } from "../../Middlewares/JWT";

export default class UsersRouter implements RouterInterface {
  getPath(): string {
    return "/users";
  }
  getRouter(): IRouter {
    const router = express.Router();
    router.get("/", jwtMiddleware, all);
    router.post("/", signUp);
    router.post('/login', login);
    router.get("/:id", jwtMiddleware, getUserById);
    return router;
  }
}
