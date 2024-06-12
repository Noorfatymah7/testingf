import React from 'react';
import ChildComponent from './childcomponent.js';

const ParentComponent = () => {
  const data = "Hello from Parent Component!";
  return (
    <div>
      <h1>Parent Component</h1>
      <ChildComponent message={data}/>
    </div>
  );
};

export default ParentComponent;
