import e, { Request, Response } from 'express';
import { OrdersStore } from '../Models/orders';

const store = new OrdersStore();

export const all = async (_req: Request, res: Response) => {
    try {
        const result = await store.index();
        res.status(200).send(result);
    } catch (err) {
        res.status(500).send({ err: `Internal Server Error ${err}` });
    }
};

export const createOrder = async (req: Request, res: Response) => {
    const { status, user_id } = req.body;
    if (!status || !user_id) {
        return res.status(400).send({ err: 'Invalid or missing data' });
    }
    try {
        const result = await store.create({
            status,
            userId: user_id,
        });
        if (result) {
            return res.status(200).send(result);
        }
    } catch (err) {
        res.status(500).send({ err: `Internal Server Error ${err}` });
    }
};

export const getByUserId = async (req: Request, res: Response) => {
    const id = parseInt(req.params.user_id);
    try {
        const result = await store.show(id);
        if (result) {
            return res.status(200).send(result);
        }
        return res.send({ msg: 'No data found' });
    } catch (err) {
        res.status(500).send({ err: `Internal Server Error ${err}` });
    }
};

export const updateOrder = async (req: Request, res: Response) => {
    const id = parseInt(req.params.id);
    const { status, user_id } = req.body;
    if (!status || !user_id) {
        return res.status(400).send({ err: 'Invalid or missing data' });
    }
    try {
        const result = await store.update({
            id,
            status,
            userId: user_id,
        });
        if (result) {
            return res.status(200).send(result);
        }
    } catch (err) {
        res.status(500).send({ err: `Internal Server Error ${err}` });
    }
};

export const deleteOrder = async (req: Request, res: Response) => {
    const id = parseInt(req.params.id);
    try {
        const result = await store.delete(id);
        if (result) {
            return res.status(200).send(result);
        }
        return res.send({ msg: 'cannt delete this order' });
    } catch (err) {
        res.status(500).send({ err: `Internal Server Error ${err}` });
    }
};
