import React from 'react';

function Home(props) {
  console.log(props.match);
  console.log(props.match.params.name);
  return (
    <div>
      <h1>Homepage</h1>
    </div>
  );
}

export default Home;
