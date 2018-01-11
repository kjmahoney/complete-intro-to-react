import React from 'react';
import { render } from 'react-dom';

const myTitle = props => {
  return React.createElement(
    'div',
    { className: 'childDiv' },
    React.createElement(
      'h1',
      {
        className: props.class,
        style: { color: props.color }
      },
      props.title
    )
  );
};

const myFirstComponent = () => {
  return React.createElement(
    'div',
    { className: 'first div' },
    React.createElement(myTitle, {
      class: 'childA',
      title: 'Apple',
      color: 'BlanchedAlmond'
    }),
    React.createElement(myTitle, {
      class: 'childB',
      title: 'Banana',
      color: 'BurlyWood'
    }),
    React.createElement(myTitle, {
      class: 'childC',
      title: 'Grape',
      color: 'LimeGreen'
    }),
    React.createElement(myTitle, {
      class: 'childD',
      title: 'Orange',
      color: 'Lime'
    })
  );
};

render(React.createElement(myFirstComponent), document.getElementById('app'));
