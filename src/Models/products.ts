import client from "../core/database";

export type Product = {
  id?: Number;
  name: string;
  price: Number;
  category: string;
};

export class ProductStore {
  async index(): Promise<Product[]> {
    try {
        const conn = await client.connect();
        const sql = `SELECT * FROM products`;
        const result = await conn.query(sql);
        conn.release();
        return result.rows;
    } catch(err) {
        throw new Error(`${err}`);
    }
  }

  async show(id: Number) {
    try {
        const conn = await client.connect();
        const sql = `SELECT * FROM products where id=$1`;
        const result = await conn.query(sql, [id]);
        conn.release();
        if(result.rows.length) {
            return result.rows[0];
        }
        return null;
    } catch(err) {
        throw new Error(`${err}`);
    }
  }

  async create(product: Product) {
    try {
        const conn = await client.connect();
        const sql = `INSERT INTO products (name, price, category) VALUES ($1, $2, $3) RETURNING *`;
        const result = await conn.query(sql, [product.name, product.price, product.category]);
        conn.release();
        return result.rows;
    } catch(err) {
        throw new Error(`${err}`);
    }
  }

  async showByCategory(category:string) {
    try {
        const conn = await client.connect();
        const sql = `SELECT * FROM products where category=$1`;
        const result = await conn.query(sql, [category]);
        conn.release();
        if(result.rows.length) {
            return result.rows;
        }
        return null;
    } catch(err) {
        throw new Error(`${err}`);
    }
  }
}
