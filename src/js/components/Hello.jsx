import React from 'react';

export default class World extends React.Component {
  constructor(...args) {
    super(...args);
  }

  render() {
    return (
      <div className="hello">
        Hello there.
      </div>
    );
  }
};