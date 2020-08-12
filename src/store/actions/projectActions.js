// import db from "../../config/fbConfig";
// import { useFirestore } from "react-redux-firebase";

export const createProject = (project) => {
  return (dispatch, getState, { getFirebase }) => {
    //make an asynchronous call
    const firestore = getFirebase().firestore();
    firestore
      .collection("projects")
      .add({
        ...project,
        authorFirstName: "kali",
        autorLastName: "linux",
        autorId: "1245",
        createdAt: new Date(),
      })
      .then(() => {
        dispatch({ type: "CREATE_PROJECT", project });
      })
      .catch((err) => {
        dispatch({ type: "CREATE_PROJECT_ERROR", err });
      });
    // db.collection("projects")
    //   .add({
    //     ...project,
    //     authorFirstName: "kali",
    //     autorLastName: "linux",
    //     autorId: "1245",
    //     createdAt: new Date(),
    //   })
    //   .then(() => {
    //     dispatch({ type: "CREATE_PROJECT", project });
    //   })
    //   .catch((err) => {
    //     dispatch({ type: "CREATE_PROJECT_ERROR", err });
    //   });
  };
};
