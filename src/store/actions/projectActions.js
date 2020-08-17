export const createProject = (project) => {
  return (dispatch, getState, { getFirebase }) => {
    //make an asynchronous call
    const firestore = getFirebase().firestore();
    const profile = getState().firebase.profile;
    const autorId = getState().firebase.auth.uid;
    firestore
      .collection("projects")
      .add({
        ...project,
        authorFirstName: profile.firstName,
        authorLastName: profile.lastName,
        autorId: autorId,
        createdAt: new Date(),
      })
      .then(() => {
        dispatch({ type: "CREATE_PROJECT", project });
      })
      .catch((err) => {
        dispatch({ type: "CREATE_PROJECT_ERROR", err });
      });
  };
};
