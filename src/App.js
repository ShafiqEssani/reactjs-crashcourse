import React, { Component } from 'react';
import Projects from './components/projects';
import AddProject from './components/addProject';
// import './App.css';

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
          title: 'Business Website',
          category: 'Web Design'
        },
        {
          title: 'Social App',
          category: 'Mobile Dev'
        },
        {
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
  
  render() {
    return (
      <div className="App">
        <AddProject add={this.handleAdd.bind(this)}/>
        <Projects projects={this.state.projects} />
      </div>
    );
  }
}

export default App;
