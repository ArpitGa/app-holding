import React from 'react';
import ReactDOM from 'react-dom';
import Page from '../browser';

if (document) {

  const Error = () => {
    alert(`Error in javascript. Please check !`)
  };

  const render = () => {
    console.log("rendered on client")
    try {
      ReactDOM.render(<Page />, document.getElementById('main'))
    } catch (err) {
      console.log(err);
    }
  };

  render();

}
