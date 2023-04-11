import axios from "axios";
import { NODE_API_SERVER } from "../../config/server.config";

const server = NODE_API_SERVER.url;
const server_api_tools = server + "/api/tools";

const tools_api = {
  /**
   * * 取得 tools 資訊
   * * ===============
   * * req
   * *  id: 工具編號
   * *  type: default | strict
   * * res
   * *  tools-object
   */
  getTools: async (id, type = "default") => {
    const res = axios({
      method: "GET",
      url: server_api_tools,
      params: {
        id,
        type,
      },
    });
    return res;
  },
};

export default tools_api;

