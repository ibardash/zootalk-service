import Koa from "koa";
import cors from "@koa/cors";
import { router } from "local/api";

const app = new Koa();

app.use(cors());
app.use(router.routes());

export { app };
