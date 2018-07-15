import React, { Component } from 'react';
import ProjectItem from './projectItem';

class Projects extends Component {
  render() {
    console.log(this.props)
    let pItems;
    if ( this.props.projects ) {
        pItems = this.props.projects.map( p => {
            // console.log(p);
            return(
                <ProjectItem key={p.title} pro={p}/>
            )
        })
    }
    return (
      <div>
        <h3>Latest Projects</h3>
        <p>{pItems}</p>
      </div>
    );
  }
}

export default Projects;
