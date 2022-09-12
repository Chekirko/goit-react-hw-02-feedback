// import PropTypes from 'prop-types';
import { Component } from 'react';

export class FeedbackCount extends Component {
  render() {
    return (
      <div>
        <h1>Please leave feedback</h1>
        <ul>
          <li>
            <button>Good</button>
          </li>
          <li>
            <button>Neutral</button>
          </li>
          <li>
            <button>Bad</button>
          </li>
        </ul>
        <h2>Statistics</h2>
        <ul>
          <li>
            <p>Good:</p>
          </li>
          <li>
            <p>Neutral:</p>
          </li>
          <li>
            <p>Bad:</p>
          </li>
        </ul>
      </div>
    );
  }
}
