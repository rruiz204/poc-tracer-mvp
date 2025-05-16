import { Container } from "inversify";
import { Application } from "./Layers/Application";
import { Infrastructure } from "./Layers/Infrastructure";

export const Inversify = new Container();

Inversify.load(Infrastructure);
Inversify.load(Application);