import express from "express";
import { Boostrap } from "./bootstrap";
import { ExpressConfig } from "@Configs/ExpressConfig";

const app = express();

const bootstrap = new Boostrap(app);

bootstrap.addMiddlewares();
bootstrap.addRouters();
bootstrap.addExceptionHandler();

app.listen(ExpressConfig.EXPRESS_PORT, () => {
  console.log(`Server is listening at http://localhost:${ExpressConfig.EXPRESS_PORT}`);
});