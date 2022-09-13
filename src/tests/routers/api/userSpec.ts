import dotenv from 'dotenv';
import jwt from 'jsonwebtoken';
import supertest from 'supertest';
import { User } from '../../../Models/users';
import UsersRouter from '../../../Routers/api/user';

dotenv.config();

const jwtSecret = process.env.JWT_SECRET || '';
const request = supertest(new UsersRouter().getRouter());
const token = jwt.sign('1', jwtSecret);
describe('Testing Users Router: ', () => {
    it('/users should return all users and status code 200', () => {
        request
            .get('/api/users')
            .set('Authorization', `Bearer ${token}`)
            .expect(200);
    });

    it('/users/ should create and return a user', () => {
        const data: User = {
            email: 'mm@gmail.com',
            firstname: 'Moustafa',
            lastname: 'Mamdouh',
            password: '1234',
        };
        request.post('/api/users/').send(data).expect(200).expect({
            username: 'mm@gmail.com',
            first_name: 'Moustafa',
            last_name: 'Mamdouh',
        });
    });

    it('/users/login should return user and status code 200', () => {
        const email = 'mm@gmail.com';
        const passord = '1234';
        request
            .post('/api/users/login')
            .send({ email, passord })
            .expect(200)
            .expect({
                id: 9,
                username: 'mm@gmail.com',
                first_name: 'Moustafa',
                last_name: 'Mamdouh',
            });
    });

    it('/users/:id return user by id, status code 200', () => {
        request
            .get('/api/users/2')
            .set('Authorization', `Bearer ${token}`)
            .expect(200);
    });
});
