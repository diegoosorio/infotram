import React from 'react';

const Task = ({title, children}) => (
    <ul className="list-group">
        <li className="list-group-item list-group-item-dark">{title}</li>
        {children}
    </ul>
);

export default Task;