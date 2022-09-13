import { User, UserStore } from '../../Models/users';

const store = new UserStore();
const user: User = {
    firstname: 'Moustafa',
    lastname: 'Mamdouh',
    email: 'mm@gmail.com',
    password: '123',
};
xdescribe('testing Users Model', () => {
    it('should have index methode', () => {
        expect(store.index).toBeDefined();
    });

    it('index should return list of users', async () => {
        const result = await store.index();
        expect(result.length).toBeGreaterThan(0);
    });

    it('should have show methode', () => {
        expect(store.show).toBeDefined();
    });

    it('show(2) should return user of id 2', async () => {
        const result: User = await store.show(2);
        expect(result.id).toBe(2);
    });

    it('should have create methode', () => {
        expect(store.create).toBeDefined();
    });

    it('create(user) should save to database and return the added user', async () => {
        const result: User = await store.create(user);
        expect(result.firstname).toBe('Moustafa');
    });

    it('authenticate(\'mm@gmail.com\', 123) should pass and return the user data', async () => {
        const result: User = await store.authenticate('mm@gmail.com', '123');
        expect(result.firstname).toBe('Moustafa');
    });
});
