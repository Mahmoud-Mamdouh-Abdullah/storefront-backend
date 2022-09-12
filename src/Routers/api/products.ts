import express, { IRouter } from "express";
import { jwtMiddleware } from "../../Middlewares/JWT";
import RouterInterface from "../../core/interfaces/routerInterface";
import { all, createProduct, getByCategory, getById } from "../../Controllers/productsController";


export default class ProductsRouter implements RouterInterface {
    getPath(): string {
        return '/products';
    }
    getRouter(): IRouter {
        const router = express.Router();
        router.get('/', all);
        router.get('/:id', getById)
        router.get('/category/:category', getByCategory);
        router.post('/', jwtMiddleware, createProduct);
        return router;
    }
    
}