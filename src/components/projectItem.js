import React, { Component } from 'react';

class ProjectItem extends Component {

    render() {
        
        return (
        <li>
            <strong>{this.props.pro.title}</strong>: { this.props.pro.category}
        </li>
        );
    }
}

export default ProjectItem;
