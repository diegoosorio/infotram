import React from 'react';
import { Link } from 'react-router-dom';
import Task from '../components/Task';
import TaskList from '../components/TaskList';
import useInitialState from '../hooks/useInitialState';
// import '../assets/styles/TaskListItem.scss'

const API = 'http://localhost:3000/initialState'

const Tasks = () => {
    const initialState = useInitialState(API);
    return initialState.length === 0 ? (
    <h1>Loading ...</h1>
  ) : (
        <>
            <div className="jumbotron">
                <h1 className="display-4">U12 Mantenimiento 7500 km </h1>
                <p className="lead display-5"> 157500 km recorridos - Alta explotación </p>
            </div>

            <Task title="Inspección de 2500 km"> 
                <TaskList ruta={initialState.mantenimiento2500}/>
            </Task>
            <Task title="Inspección de 7500 km"> 
                <TaskList ruta={initialState.mantenimiento7500}/>
            </Task>

            <Link to="/" className="btn btn-primary btn-lg btn-block pt-5 pb-5 mt-2 mb-5">Notificar en SAP</Link>

        </>
    );
}



export default Tasks;