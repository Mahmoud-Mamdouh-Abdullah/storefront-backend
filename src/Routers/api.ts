import express, { IRouter } from "express";
import { apiEndpoint } from "../Controllers/apiController";
import RouterInterface from "../core/interfaces/routerInterface";
import ProductsRouter from "./api/products";
import UsersRouter from "./api/user";


export default class APIRouter implements RouterInterface {
    getPath(): string {
        return '/api';
    }
    getRouter(): IRouter {
        const router = express.Router();
        router.get('/', apiEndpoint);

        const usersRouter = new UsersRouter();
        const productRouter = new ProductsRouter();

        router.use(usersRouter.getPath(), usersRouter.getRouter());
        router.use(productRouter.getPath(), productRouter.getRouter());
        return router;
    }

}