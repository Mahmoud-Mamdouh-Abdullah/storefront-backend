import { Request, Response } from "express";


export const apiEndpoint = (_req: Request, res: Response) => {
    res.status(200).send({
        message: 'Welcome To The API Endpoint!!'
    })
}