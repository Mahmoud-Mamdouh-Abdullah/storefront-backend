import { Request, Response } from 'express';
import { DashboardStore } from '../Models/dashboard';

const dashboard = new DashboardStore();

export const getUserCurrentOrder = async (req: Request, res: Response) => {
    const id = parseInt(req.params.id);
    try {
        const result = await dashboard.getCurrentOrder(id);
        if (result) {
            return res.status(200).send(result);
        }
        return res.status(400).send({ err: 'No Data Found'});
    } catch (err) {
        return res.status(500).send({ err: `Internal Server Error ${err}` });
    }
};

export const getUserCompleteOrders = async (req: Request, res: Response) => {
    const id = parseInt(req.params.id);
    try {
        const result = await dashboard.getCompletedOrders(id);
        if (result) {
            return res.status(200).send(result);
        }
        return res.status(400).send({ err: 'No Data Found'});
    } catch (err) {
        return res.status(500).send({ err: `Internal Server Error ${err}` });
    }
};
