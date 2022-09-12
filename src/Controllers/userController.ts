import dotenv from "dotenv";
import jwt from "jsonwebtoken";
import { Request, Response } from "express";
import { UserStore } from "../Models/User";

dotenv.config();
const store = new UserStore();
const jwtSecret: string = process.env.JWT_SECRET || "";

export const all = async (req: Request, res: Response) => {
  try {
    const result = await store.index();
    res.status(200).send(result);
  } catch (err) {
    res.status(500).send({
      msg: "Internal Server Error",
    });
  }
};

export const signUp = async (req: Request, res: Response) => {
  const { firstname, lastname, email, password } = req.body;
  if (!firstname || !lastname || !email || !password) {
    return res.status(400).send({
      err: "Invalid or Missing Data !!",
    });
  }
  try {
    const result = await store.create({
      firstname,
      lastname,
      email,
      password,
    });
    console.log(result);
    const token = jwt.sign({ user: result }, jwtSecret);
    return res.status(200).send({
      token,
    });
  } catch (err) {
    return res.status(400).json(`${err}`);
  }
};

export const login = async (req: Request, res: Response) => {
  const { email, password } = req.body;
  try {
    const user = await store.authenticate(email, password);
    if (user) {
      const token = jwt.sign({ user }, jwtSecret);
      res.status(200).send({ token });
    } else {
      res.status(400).send({ err: "email or password is incorrect" });
    }
  } catch (err) {
    res.status(400).send({ err });
  }
};

export const getUserById = async (req: Request, res: Response) => {
  const id = req.params.id;
  try {
    const user = await store.show(parseInt(id));
    if (user) {
      return res.status(200).send(user);
    } 
    return res.status(400).send({msg: 'cannot find this user'});
  } catch (err) {
    res.status(400).send({ err });
  }
};
