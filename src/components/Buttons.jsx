import React from 'react';
import { Link } from 'react-router-dom';
// import 'bootstrap/dist/css/bootstrap.css';

const Buttons = () => (
    <>
        <div className="d-flex flex-column align-items-center">
            <Link to="/tasks" className="btn btn-secondary btn-lg col-md-9 mb-2 p-5 ">Mantenimiento programado</Link>
            <Link to="/tasks" className="btn btn-secondary btn-lg col-md-9 mb-2 p-5">Personal programado</Link>
        </div>
    </>

);

export default Buttons;
