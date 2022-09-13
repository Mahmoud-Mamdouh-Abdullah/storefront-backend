import supertest from 'supertest';
import APIRouter from '../../Routers/api';

const request = supertest(new APIRouter().getRouter());

describe('testing /api router endpoint', (): void => {
    it('/api endpoint', (done): void => {
        request.get('/api').expect(200, done());
    });
});
