const initState = {
  projects: [
    { id: 1, title: "titre 1", content: "content 1" },
    { id: 2, title: "titre 2", content: "content 2" },
    { id: 3, title: "titre 3", content: "content 3" },
  ],
};

const projectReducer = (state = initState, action) => {
  switch (action.type) {
    case "CREATE_PROJECT":
      console.log("Project Created!!", action.project);
      return state;

    case "CREATE_PROJECT_ERROR":
      console.log("Project Creation Error!!", action.err);
      return state;

    default:
      return state;
  }
};

export default projectReducer;
