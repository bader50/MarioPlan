import React, { Component } from "react";
import Notification from "./Notifications";
import ProjectList from "../projects/ProjectList";
import { connect } from "react-redux";

class Dashboard extends Component {
  render() {
    return (
      <div className="container dashboard">
        <div className="row">
          <div className="col s12 m6">
            <ProjectList projects={this.props.projects} />
          </div>
          <div className="col s12 m5 offset-m1">
            <Notification />
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    projects: state.project.projects,
  };
};

export default connect(mapStateToProps)(Dashboard);
