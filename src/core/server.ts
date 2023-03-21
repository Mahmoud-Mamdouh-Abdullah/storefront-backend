import express, { Request, Response } from "express";
import AppMiddleware from "./interfaces/middlewareInterface";
import RouterInterface from "./interfaces/routerInterface";

export default class Server {
  private readonly _server = express();
  constructor() {
    this._server.use(express.json());

    this._server.get("/", (_req: Request, res: Response) => {
      res.send({
        msg: "Welcome !! This Is the storefront API Endpoint",
      });
    });
  }

  addRouter(router: RouterInterface) {
    this._server.use(router.getPath(), router.getRouter());
  }

  addMiddleware(middleware: AppMiddleware) {
    this._server.use(middleware.getMiddleware());
  }

  listen(port:number) {
    this._server.listen(port, () => {
        console.log(`server running...`);
        console.log(`server listen on port ${port}`);        
    })
  }
}
