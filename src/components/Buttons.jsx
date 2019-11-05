import React from 'react';
import { Link } from 'react-router-dom';
// import 'bootstrap/dist/css/bootstrap.css';

const Buttons = (props) => (
    <>
        <div className="d-flex flex-column align-items-center">
            <Link to="/tasks" className="btn btn-primary btn-lg col-md-9 mb-2 p-5 ">Mantenimiento programado</Link>
            <Link to="/personal" className="btn btn-primary btn-lg col-md-9 mb-2 p-5">Personal programado</Link>
            <Link to="/explotacion" className="btn btn-primary btn-lg col-md-9 mb-2 p-5">Explotación Tranvia</Link>
            <Link to="/taller" className="btn btn-primary btn-lg col-md-9 mb-2 p-5">Estado Taller</Link>
            <Link to="/stats" className="btn btn-primary btn-lg col-md-9 mb-2 p-5">Estadisticas</Link>
            <Link to="/programaSemanal" className="btn btn-primary btn-lg col-md-9 mb-2 p-5">Programación Semanal</Link>
         </div>
    </>
);

export default Buttons;
