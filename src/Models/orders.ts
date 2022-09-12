import client from '../core/database';

export type Order = {
    id?: Number;
    status: string;
    userId: Number;
};

export class OrdersStore {
    async index() {
        try {
            const conn = await client.connect();
            const sql = `SELECT * FROM orders`;
            const result = await conn.query(sql);
            conn.release();
            if (result.rows.length) {
                return result.rows;
            }
            return null;
        } catch (err) {
            throw new Error(`${err}`);
        }
    }
    async show(id: Number) {
        try {
            const conn = await client.connect();
            const sql = `SELECT * FROM orders WHERE user_id=$1`;
            const result = await conn.query(sql, [id]);
            conn.release();
            if (result.rows.length) {
                return result.rows;
            }
            return null;
        } catch (err) {
            throw new Error(`${err}`);
        }
    }

    async create(order: Order) {
      try {
          const conn = await client.connect();
          const sql = `INSERT INTO orders (status, user_id) VALUES ($1, $2) RETURNING *`;
          const result = await conn.query(sql, [order.status, order.userId]);
          conn.release();
          if (result.rows.length) {
              return result.rows[0];
          }
          return null;
      } catch (err) {
          throw new Error(`${err}`);
      }
  }
    

    async update(orderData: Order) {
        try {
            const conn = await client.connect();
            const sql = `UPDATE orders SET status=$1, user_id=$2 WHERE id=$3 RETURNING *`;
            const result = await conn.query(sql, [orderData.status, orderData.userId, orderData.id]);
            conn.release();
            if (result.rows.length) {
                return result.rows[0];
            }
            return null;
        } catch (err) {
            throw new Error(`${err}`);
        }
    }

    async delete(id: Number) {
      try {
          const conn = await client.connect();
          const sql = `DELETE FROM orders WHERE id=$1 RETURNING *`;
          const result = await conn.query(sql, [id]);
          conn.release();
          if (result.rows.length) {
              return result.rows[0];
          }
          return null;
      } catch (err) {
          throw new Error(`${err}`);
      }
  }
}
