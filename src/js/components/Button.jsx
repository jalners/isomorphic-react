import React from 'react';

export default class Button extends React.Component {
  constructor(...args) {
    super(...args);
  }

  handleClickOnSpan() {
    console.log('Click on button');
  }

  render() {
    return (
      <button onClick={this.handleClickOnSpan}>Click me</button>
    );
  }
};