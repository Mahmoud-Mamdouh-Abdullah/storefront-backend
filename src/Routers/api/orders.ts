import express, { IRouter } from "express";
import { all, createOrder, deleteOrder, getByUserId, updateOrder } from "../../Controllers/ordersController";
import RouterInterface from "../../core/interfaces/routerInterface";


export default class OrdersRouter implements RouterInterface {
    getPath(): string {
        return('/orders');
    }
    getRouter(): IRouter {
        const router = express.Router();
        router.get('/', all);
        router.post('/', createOrder);
        router.get('/:user_id', getByUserId);
        router.put('/:id', updateOrder);
        router.delete('/:id', deleteOrder);
        return router;
    }

}