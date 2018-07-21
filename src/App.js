import React from 'react';
import ReactDOM from 'react-dom';
import Button from './components/Button'

const App = () => {
  return (
    <div>
      <p>React here!</p>
      <Button tabIndex={0}>Primary Button</Button>
    </div>
  );
};

export default App;

ReactDOM.render(<App />, document.getElementById("app"));
