import React, { Component } from 'react';
import './Issue.css';

import { If } from '../if/If'


class Issue extends Component {
  constructor() {
    super()
    this.state = {
      isDescription: false
    }
  }

  getClassState() {
    return 'issue-state--' +
      (this.props.state === 'open' ? 'open' : 'closed')
  }

  toggleDescription() {
    this.setState({
      isDescription: !this.state.isDescription
    })
  }

  render() {
    return (
      <div className='issue'>
        <div className='issue-main'>
          <div className={'issue-state ' + this.getClassState()}>{this.props.state}</div>
          <div onClick={() => this.toggleDescription()}>{this.props.title}</div>
        </div>
        <If cond={this.state.isDescription}>
          <div>
            {this.props.description}
          </div>
        </If>
      </div>
    );
  }
}

export default Issue;
