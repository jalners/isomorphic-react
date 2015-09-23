import React from 'react';
import Hello from './components/Hello';
import Button from './components/Button';

class Main extends React.Component {
  constructor(...args) {
    super(...args);
  }

  render() {
    return (
      <div className="container">
        <Hello />
        <Button />
      </div>  
    );
  }
};

if (typeof window !== 'undefined') {
  React.render(<Main />, document.getElementById('application'));
} else {
  module.exports = Main;
}