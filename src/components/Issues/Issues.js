import React, { Component } from 'react';
import './Issues.css';

import { fetchAll } from '../../services/fetchIssue';

class Issues extends Component {

  constructor() {
    super()
    this.state = {
      issues: []
    }
  }

  componentDidMount() {
    fetchAll().then(issues => this.setState({issues: issues}) )
  }

  render() {
    console.log(this.state.issues[0])
    return (
      <div>
        {this.state.issues.map(issue => issue.title)}
      </div>
    );
  }
}

export default Issues;
