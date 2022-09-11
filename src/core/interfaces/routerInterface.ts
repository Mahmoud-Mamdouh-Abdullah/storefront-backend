import { IRouter } from "express";

export default interface RouterInterface {
  getPath(): string;

  getRouter(): IRouter;
}
