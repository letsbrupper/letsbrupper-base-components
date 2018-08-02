import React from 'react';
import { render} from 'react-dom';
import {Button} from '../../src';
const App = () => (
    <Button tabIndex={0}>Primary Button</Button>
);
render(<App />, document.getElementById("root"));
