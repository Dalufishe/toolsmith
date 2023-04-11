const get_tools_data_reducer = (
  prevState = {
    data: {},
  },
  action
) => {
  const newState = { ...prevState };
  //
  if (action.type === "get_tools_data") {
    newState.data = action.payload;
    return newState;
  }
  //
  return prevState;
};

const get_tools_s_data_reducer = (
  prevState = {
    data: {},
  },
  action
) => {
  const newState = { ...prevState };
  //
  if (action.type === "get_tools_s_data") {
    newState.data = action.payload;
    return newState;
  }
  //
  return prevState;
};

export { get_tools_data_reducer, get_tools_s_data_reducer };
