import express, { IRouter } from 'express';
import {
    all,
    createOrder,
    deleteOrder,
    getByUserId,
    updateOrder,
} from '../../Controllers/ordersController';
import RouterInterface from '../../core/interfaces/routerInterface';
import { jwtMiddleware } from '../../Middlewares/JWT';

export default class OrdersRouter implements RouterInterface {
    getPath(): string {
        return '/orders';
    }
    getRouter(): IRouter {
        const router = express.Router();
        router.get('/', all);
        router.post('/', jwtMiddleware, createOrder);
        router.get('/user/:user_id', jwtMiddleware, getByUserId);
        router.put('/:id', jwtMiddleware, updateOrder);
        router.delete('/:id', jwtMiddleware, deleteOrder);
        return router;
    }
}
