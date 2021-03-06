import React, { Component } from 'react';
import './Issues.css';

import Issue from '../issue/Issue';
import { fetchAll } from '../../services/fetchIssue';

class Issues extends Component {

  constructor() {
    super()
    this.state = {
      issues: []
    }
  }

  componentDidMount() {
    fetchAll().then(issues => {
      console.log(issues)
      this.setState({issues})
    } )
  }

  render() {
    return (
      <div className='issues-container'>
        {this.state.issues.map(issue =>
          <Issue key={issue.id}
            title={issue.title}
            state={issue.state}
            description={issue.body}/>
        )}
      </div>
    );
  }
}

export default Issues;
