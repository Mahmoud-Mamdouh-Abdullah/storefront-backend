import dotenv from 'dotenv';
import jwt from 'jsonwebtoken';
import supertest from 'supertest';
import DashboardRouter from '../../../Routers/api/dashboard';

dotenv.config();

const jwtSecret = process.env.JWT_SECRET || '';
const request = supertest(new DashboardRouter().getRouter());
const token = jwt.sign('1', jwtSecret);

describe('Testing Dashboard Router', () => {

    it('/users/:id/active_order get acive order for user_id, status code 200', () => {
        request
            .get('/users/2/active_order')
            .set('Authorization', `Bearer ${token}`)
            .expect(200);
    });

    it('/users/:id/complete_orders get completed orders for user_id, status code 200', () => {
        request
            .get('/users/2/complete_orders')
            .set('Authorization', `Bearer ${token}`)
            .expect(200);
    });
});
