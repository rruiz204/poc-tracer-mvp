import express from "express";
import { Boostrap } from "./bootstrap";

const app = express();

const bootstrap = new Boostrap(app);

bootstrap.addRouters();
bootstrap.addMiddlewares();

app.listen(3000, () => {
  console.log(`Server is listening at http://localhost:3000`);
});