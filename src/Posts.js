import React from 'react';
import { useParams } from 'react-router-dom';

const Posts = (props) => {
  console.log(props.match);
  console.log(props.match.params.name);
  console.log(props.match.params.msg);
  return (
    <div>
      <h1>Posts!</h1>
    </div>
  );
};

export default Posts;
