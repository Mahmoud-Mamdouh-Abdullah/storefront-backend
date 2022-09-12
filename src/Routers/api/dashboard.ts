import express,{ IRouter } from "express";
import RouterInterface from "../../core/interfaces/routerInterface";
import { getUserCompleteOrders, getUserCurrentOrder } from "../../Controllers/dashboardController";


export default class DashboardRouter implements RouterInterface {
    getPath(): string {
        return '/'
    }
    getRouter(): IRouter {
        const router = express.Router();
        router.get('/users/:id/active_order', getUserCurrentOrder);
        router.get('/users/:id/complete_orders', getUserCompleteOrders);
        return router;
    }
}