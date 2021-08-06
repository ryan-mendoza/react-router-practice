import React from 'react';
import { useParams } from 'react-router-dom';

const Catalog = (props) => {
  console.log(props.match);
  const name = props.match.params.name;
  const msg = props.match.params.msg;

  let greeting;
  if (props.match.params) {
    greeting = (
      <p>
        {msg} - {name}
      </p>
    );
  } else {
    greeting = <p>Not welcome!!</p>;
  }

  return (
    <div>
      <h1>Catalog</h1>
      {greeting}
    </div>
  );
};

export default Catalog;
