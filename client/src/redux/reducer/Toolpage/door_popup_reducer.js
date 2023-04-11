const door_popup_reducer = (
  prevState = {
    id: null,
  },
  action
) => {
  const newState = { ...prevState };
  if (action.type === "door_popup") {
    //
    if (action.id === prevState.id) {
      newState.id = null;
      return newState;
    }
    newState.id = action.id;
    return newState;
  }
  return prevState;
  //
};

export default door_popup_reducer;
