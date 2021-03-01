import React from 'react';
import ReactDOM from 'react-dom';

function Example() {
    return (
        <h1>Hellow Vijay Borge</h1>
    );
}

export default Example;

if (document.getElementById('example')) {
    ReactDOM.render(<Example />, document.getElementById('example'));
}
