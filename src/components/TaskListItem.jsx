import React from 'react';
import { Link } from 'react-router-dom';
import '../assets/styles/components/TaskListItem.scss'

const TaskListItem = (props) => {
    return (
    <>
        <Link to="/task_details" className="task">
            <li className="list-group-item pl-5 task__li">{props.op}</li>          
        </Link>
    </>
    );
}

export default TaskListItem;