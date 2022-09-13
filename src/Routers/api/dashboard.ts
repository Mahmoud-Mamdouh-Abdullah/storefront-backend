import express, { IRouter } from 'express';
import RouterInterface from '../../core/interfaces/routerInterface';
import {
    getUserCompleteOrders,
    getUserCurrentOrder,
} from '../../Controllers/dashboardController';
import { jwtMiddleware } from '../../Middlewares/JWT';

export default class DashboardRouter implements RouterInterface {
    getPath(): string {
        return '/';
    }
    getRouter(): IRouter {
        const router = express.Router();
        router.get(
            '/users/:id/active_order',
            jwtMiddleware,
            getUserCurrentOrder
        );
        router.get(
            '/users/:id/complete_orders',
            jwtMiddleware,
            getUserCompleteOrders
        );
        return router;
    }
}
