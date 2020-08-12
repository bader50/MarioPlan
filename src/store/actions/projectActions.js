export const createProject = (project) => {
  return (dispatch, getState) => {
      //make an asynchronous call
    dispatch({ type: "CREATE_PROJECT", project });
  };
};
