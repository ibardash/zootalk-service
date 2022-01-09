import Router from "@koa/router";

const router = new Router();

router.get("/ping", (ctx) => {
  ctx.body = "pong";
});

export { router };
