import { DashboardStore } from "../../Models/dashboard";

const store = new DashboardStore();

xdescribe('Testing Dashboard Model', () => {

    it('getCurrentOrder(2) should return list of products info in active order of user_id=2', async () => {
        const result = await store.getCurrentOrder(2);
        expect(result?.length).toBeGreaterThan(0);
    });

    it('getCompletedOrders(2) should return list of products info in completed order of user_id=2', async () => {
        const result = await store.getCompletedOrders(2);
        expect(result?.length).toBeGreaterThan(0);
    });
});
