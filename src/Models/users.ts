import bcrypt from "bcrypt";
import dotenv from "dotenv";
import client from "../core/database";

dotenv.config();
const pepper = process.env.BCRYPT_PASSWORD;
const saltRounds = process.env.SALT_ROUNDS;

export type User = {
  id?: Number;
  firstname: string;
  lastname: string;
  email: string;
  password: string;
};

export class UserStore {
  async index(): Promise<User[]> {
    try {
      const conn = await client.connect();
      const sql = `SELECT * FROM users`;
      const result = await conn.query(sql);
      conn.release();
      return result.rows;
    } catch (err) {
      throw new Error(`${err}`);
    }
  }

  async show(id: number) {
    try {
      const conn = await client.connect();
      const sql = `SELECT * FROM users WHERE id=$1`;
      const result = await conn.query(sql, [id]);
      conn.release();
      if(result.rows.length) {
        return result.rows[0];
      }
      return null;
    } catch (err) {
      throw new Error(`${err}`);
    }
  }

  async create(user: User) {
    try {
      const conn = await client.connect();
      const sql = `INSERT INTO users (firstname, lastname, email, password) VALUES ($1, $2, $3, $4) RETURNING *`;
      const cipherPassword = bcrypt.hashSync(
        user.password + pepper,
        parseInt(saltRounds || "")
      );
      const result = await conn.query(sql, [
        user.firstname,
        user.lastname,
        user.email,
        cipherPassword,
      ]);
      conn.release();
      return result.rows[0];
    } catch (err) {
      throw new Error(`${err}`);
    }
  }

  async authenticate (email: string, password: string) {
    try {
      const conn = await client.connect();
      const sql = `SELECT * FROM users WHERE email=$1`;
      const result = await conn.query(sql, [email]);
      conn.release();
      if(result.rows.length) {
        const user = result.rows[0];
        if (bcrypt.compareSync(password + pepper, user.password)) {
          return user;
        }
      }
      return null;
    } catch(err) {
      throw new Error(`cannt authenticate ${err}`);
    }
  }
}
