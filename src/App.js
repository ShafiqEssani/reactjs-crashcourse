import React, { Component } from 'react';
import Projects from './components/projects';
import AddProject from './components/addProject';
// import './App.css';
import uuid from 'uuid';

class App extends Component {

  constructor() {
    super();
    this.state = {
      projects: []
    }
  }

  componentWillMount() {
    this.setState({
      projects: [
        {
          id: uuid.v4(),
          title: 'Business Website',
          category: 'Web Design'
        },
        {
          id: uuid.v4(),
          title: 'Social App',
          category: 'Mobile Dev'
        },
        {
          id: uuid.v4(),
          title: 'Ecommerce Website',
          category: 'Web Dev'
        }
      ]
    });
  }

  handleAdd(project) {
    console.log(project);
    let projects = this.state.projects;
    projects.push(project);
    this.setState({projects:projects});
  }

  handleDelete(id) {
    let projects = this.state.projects;
    let i = projects.findIndex( x => x.id === id);
    projects.splice(i,1);
    this.setState({projects:projects});
  }
  
  render() {
    return (
      <div className="App">
        <AddProject add={this.handleAdd.bind(this)}/>
        <Projects onDelete={this.handleDelete.bind(this)} projects={this.state.projects} />
      </div>
    );
  }
}

export default App;
