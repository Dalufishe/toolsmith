const { tools, tools_s } = require("../data/fake_tools_data");

const toolsModel = {
  getTools: async (id, type) => {
    switch (type) {
      case "default":
        // fake data //
        if (id) {
          for (let tool of tools) {
            if (tool.id === id) {
              return tool;
            }
          }
        }
        return tools;

      case "strict":
        // fake data //
        if (id) {
          for (let tool of tools_s) {
            if (tool.id === id) {
              return tool;
            }
          }
        }
        return tools_s;
      default:
        return {};
    }
  },
};

module.exports = toolsModel;
