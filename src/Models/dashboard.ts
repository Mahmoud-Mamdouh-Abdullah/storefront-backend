import client from '../core/database';

export class DashboardStore {
    async getCurrentOrder(userId: Number) {
        try {
            const conn = await client.connect();
            const sql = `SELECT o.id, p.name, p.price,po.qty from orders o 
                         INNER JOIN products_orders po ON o.id=po.order_id
                         INNER JOIN products p ON p.id = po.product_id
                         WHERE (o.user_id=$1 AND o.status='active');`;
            const result = await conn.query(sql, [userId]);
            if(result.rows.length) {
                return result.rows;
            } 
            return null;
        } catch (err) {
            throw new Error(`cannot get user's current order ${err}`);
        }
    }

    async getCompletedOrders(userId: Number) {
        try {
            const conn = await client.connect();
            const sql = `SELECT o.id, p.name, p.price,po.qty from orders o 
                         INNER JOIN products_orders po ON o.id=po.order_id
                         INNER JOIN products p ON p.id = po.product_id
                         WHERE (o.user_id=$1 AND o.status='complete');`;
            const result = await conn.query(sql, [userId]);
            if(result.rows.length) {
                return result.rows;
            } 
            return null;
        } catch (err) {
            throw new Error(`cannot get user's current order ${err}`);
        }
    }
}
