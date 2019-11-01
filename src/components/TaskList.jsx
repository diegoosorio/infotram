import React from 'react';
import TaskListItem from '../components/TaskListItem'

const TaskList = (props) => (
    <>
        {props.ruta.map(item => (
            <TaskListItem key={item.id} {...item}/>  
        ))}
    </>
);

export default TaskList;