import express, { IRouter } from "express";
import { apiEndpoint } from "../Controllers/apiController";
import RouterInterface from "../core/interfaces/routerInterface";
import DashboardRouter from "./api/dashboard";
import OrdersRouter from "./api/orders";
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
        const ordersRouter = new OrdersRouter();
        const dashboardRouter = new DashboardRouter();

        router.use(usersRouter.getPath(), usersRouter.getRouter());
        router.use(productRouter.getPath(), productRouter.getRouter());
        router.use(ordersRouter.getPath(), ordersRouter.getRouter());
        router.use(dashboardRouter.getPath(), dashboardRouter.getRouter());

        return router;
    }

}