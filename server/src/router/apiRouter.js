const toolsRouter = require("./tools/toolsRouter");

const apiRouter = require("express").Router();

apiRouter.use("/tools", toolsRouter);

module.exports = apiRouter;
