const toolsModel = require("../models/toolsModel");

const toolsController = {
  getTools: (req, res) => {
    const id = Number(req.query.id);
    const type = req.query.type;
    toolsModel.getTools(id, type).then((tools) => {
      res.send(tools);
    });
  },
};

module.exports = toolsController;
