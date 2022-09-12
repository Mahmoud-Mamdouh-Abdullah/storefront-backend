import { NextFunction, Request, RequestHandler, Response } from 'express';
import AppMiddleware from '../core/interfaces/middlewareInterface';

class LoggerMiddleware implements AppMiddleware {
    getMiddleware(): RequestHandler {
        return (req: Request, res: Response, next: NextFunction) => {
            console.log(req.query);
            next();
        };
    }
}

export default LoggerMiddleware;
