import express, { IRouter } from "express";
import { apiEndpoint } from "../Controllers/apiController";
import RouterInterface from "../core/interfaces/routerInterface";
import UsersRouter from "./api/user";


export default class APIRouter implements RouterInterface {
    getPath(): string {
        return '/api';
    }
    getRouter(): IRouter {
        const router = express.Router();
        router.get('/', apiEndpoint);

        const usersRouter = new UsersRouter();

        router.use(usersRouter.getPath(), usersRouter.getRouter());
        return router;
    }

}