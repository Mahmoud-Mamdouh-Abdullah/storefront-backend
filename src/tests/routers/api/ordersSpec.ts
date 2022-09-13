import dotenv from 'dotenv';
import jwt from 'jsonwebtoken';
import supertest from 'supertest';
import { Order } from '../../../Models/orders';
import OrdersRouter from '../../../Routers/api/orders';

dotenv.config();

const jwtSecret = process.env.JWT_SECRET || '';
const request = supertest(new OrdersRouter().getRouter());
const token = jwt.sign('1', jwtSecret);

describe('Testing Orders Router', () => {
    it('/orders get all order, status code 200', () => {
        request.get('/api/orders').expect(200);
    });

    it('/orders/:user_id return order by user_id, status code 200', () => {
        request.get('/api/orders/1').expect(200);
    });

    it('/orders/ add order, status code 200', () => {
        const order: Order = {
            status: 'complete',
            userId: 2,
        };
        request
            .post('/api/orders')
            .set('Authorization', `Bearer ${token}`)
            .send(order)
            .expect(200);
    });

    it('/orders/:id update order, status code 200', () => {
        const order: Order = {
            status: 'complete',
            userId: 2,
        };
        request
            .put('/api/orders/1')
            .set('Authorization', `Bearer ${token}`)
            .send(order)
            .expect(200);
    });

    it('/orders/:id delete order, status code 200', () => {
        request
            .put('/api/orders/1 Clothes')
            .set('Authorization', `Bearer ${token}`)
            .expect(200);
    });
});
