import { Product, ProductStore } from '../../Models/products';

const store = new ProductStore();
const product: Product = {
    name: 'White Hoddie',
    price: 255,
    category: 'Women Clothes',
};
describe('Testing Products Model', () => {
    it('should have index() methode', () => {
        expect(store.index).toBeDefined();
    });

    it('should have show() methode', () => {
        expect(store.show).toBeDefined();
    });

    it('should have create() methode', () => {
        expect(store.create).toBeDefined();
    });

    it('index() should return list of products', async () => {
        const result = await store.index();
        expect(result.length).toBeGreaterThan(0);
    });

    it('create() should add product to the db and return it', async () => {
        const result: Product = await store.create(product);
        expect(result.id).toBeDefined();
    });

    it('show(4) should return product of id=4', async () => {
        const result = await store.show(4);
        expect(result.name).toBeDefined();
    });

    it('showByCategory(\'Men Clothes\') should return list of product of of this category', async () => {
        const result = await store.showByCategory('Men Clothes');
        expect(result?.length).toBeGreaterThan(0);
    });
});
