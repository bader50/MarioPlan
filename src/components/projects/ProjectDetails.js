import React from "react";

function ProjectDetails(props) {
  const id = props.match.params.id;
  return (
    <div className="container project-details">
      <div className="card z-depth-0">
        <div className="card-content">
          <span className="card-title">Project Title - {id} </span>
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quisquam
            natus laboriosam reprehenderit temporibus fugit eaque. Sed ducimus
            architecto nemo, fuga ipsum perspiciatis deserunt, numquam aut
            eligendi ratione tempora qui consequatur.
          </p>
        </div>
        <div className="card-action grey lighten-4 grey-text">
          <div>Posted by h4ckxor</div>
          <div>3rd September, 2am</div>
        </div>
      </div>
    </div>
  );
}

export default ProjectDetails;
