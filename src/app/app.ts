import Koa from "koa";
import cors from "@koa/cors";
import { router } from "./router";

const app = new Koa();
app.use(cors());
app.use(router.routes());

export { app };
