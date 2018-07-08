import React, { Component } from 'react';
import './Issue.css';


class Issue extends Component {

  getClassState() {
    return 'issue-state--' +
      (this.props.state === 'open' ? 'open' : 'closed')
  }

  render() {
    return (
      <div className='issue'>
        <div className={'issue-state ' + this.getClassState()}>
          {this.props.state}
        </div>
        <div onClick={() => this.toggleDescription()}>
          {this.props.title}
        </div>
      </div>
    );
  }
}

export default Issue;
