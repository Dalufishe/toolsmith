const toolsController = require("../../controllers/toolsController");

const toolsRouter = require("express").Router();

toolsRouter.get("/", toolsController.getTools);

module.exports = toolsRouter;
