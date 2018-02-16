import React from 'react';
import { render } from 'react-dom';

const MyTitle = props => {
  const style = {color:props.color}
  // return React.createElement(
  //   'div',
  //   { className: 'childDiv' },
  //   React.createElement(
  //     'h1',
  //     {
  //       className: props.class,
  //       style: { color: props.color }
  //     },
  //     props.title
  //   )
  // );
  return(
    <div>
      <h1 style={ style }>{ props.title.toUpperCase() }</h1>
    </div>
  )
};

const myFirstComponent = () => {
  return(
   <div id="my-first-component">
     <MyTitle title="Apple" color="red" />
     <MyTitle title="Banana" color="yellow" />
     <MyTitle title="Grape" color="purple" />
     <MyTitle title="Pear" color="green" />
   </div>
  )
};

render(<myFirstComponent />, document.getElementById('app'));
