import dotenv from 'dotenv';
import jwt from 'jsonwebtoken';
import supertest from 'supertest';
import { Product } from '../../../Models/products';
import ProductRouter from '../../../Routers/api/products';

dotenv.config();

const jwtSecret = process.env.JWT_SECRET || '';
const request = supertest(new ProductRouter().getRouter());
const token = jwt.sign('1', jwtSecret);

describe('Testing Products Router', () => {
    it('/products get all product, status code 200', () => {
        request.get('/api/products').expect(200);
    });

    it('/products/:id return product by id, status code 200', () => {
        request.get('/api/products/1').expect(200);
    });

    it('/products/:category return products by category, status code 200', () => {
        request.get('/api/products/Men Clothes').expect(200);
    });

    it('/products/ add products, status code 200', () => {
        const product: Product = {
            name: 'shirt',
            price: 233.33,
            category: 'Women clothes',
        };
        request
            .post('/api/products/Men Clothes')
            .set('Authorization', `Bearer ${token}`)
            .send(product)
            .expect(200);
    });
});
