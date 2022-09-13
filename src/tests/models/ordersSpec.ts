import { Order, OrdersStore } from '../../Models/orders';

const store = new OrdersStore();
const order: Order = {
    status: 'complete',
    userId: 8,
};

xdescribe('Testing Order Model', () => {
    it('should have index() methode', () => {
        expect(store.index).toBeDefined();
    });

    it('should have create() methode', () => {
        expect(store.create).toBeDefined();
    });

    it('should have delete() methode', () => {
        expect(store.delete).toBeDefined();
    });

    it('should have update() methode', () => {
        expect(store.update).toBeDefined();
    });

    it('should have show() methode', () => {
        expect(store.show).toBeDefined();
    });

    it('index() should return list of orders', async () => {
        const result = await store.index();
        expect(result?.length).toBeGreaterThan(0);
    });

    it('create() should return list of orders', async () => {
        const result: Order = await store.create(order);
        expect(result.id).toBeDefined();
    });

    it('show(2) should return list of orders of user_id=2', async () => {
        const result = await store.show(2);
        expect(result?.length).toBeGreaterThan(0);
    });

    it('delete(10) should return the deleted order of id=1', async () => {
        const result: Order = await store.delete(10);
        expect(result.status).toBeDefined();
    });

    it('update(order) should return the data of updated order of id=1', async () => {
        const result: Order = await store.update({
            status: 'complete',
            userId: 8,
            id: 1,
        });
        expect(result.status).toBeDefined();
    });
});
