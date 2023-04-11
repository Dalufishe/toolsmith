import tools_api from "../../../api/tools/tools";

const get_tools_data_action = (id) => {
  return (dispatch) => {
    tools_api.getTools(id, "default").then((res) => {
      dispatch({
        type: "get_tools_data",
        payload: res.data,
      });
    });
  };
};

const get_tools_s_data_action = (id) => {
  return (dispatch) => {
    tools_api.getTools(id, "strict").then((res) => {
      dispatch({
        type: "get_tools_s_data",
        payload: res.data,
      });
    });
  };
};

export { get_tools_data_action, get_tools_s_data_action };
