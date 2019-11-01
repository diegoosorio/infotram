import React from 'react';
import {Link} from 'react-router-dom'

const Personal = () => (
    <>
        <div className="card-header mt-2 text-center">
            Responsables
        </div>
        <div className="container-fluid mt-2">
            <div className="row d-flex justify-content-center">
                <div className="card col-sm-3 mr-2" style={{width: "18rem"}}>
                <Link to="/tasks">
                    <img className="card-img-top" src="https://www.gravatar.com/avatar?d=identicon" alt="Card image cap"/>
                </Link>
                <div className="card-body text-center">
                    <p className="card-text">Juan Fernando Angulo Vasco <br/> 
                        P2 Mantenimiento - Supervisor <br/>
                        Código SAP: 1234 <br/>
                        Turno L - V 6:00 a 16:00 
                    </p>
                </div>
            </div>
            <div className="card col-sm-3 mr-2" style={{width: "18rem"}}>
                <Link to="/tasks">
                    <img className="card-img-top" src="https://www.gravatar.com/avatar?d=identicon" alt="Card image cap"/>
                </Link>
                <div className="card-body text-center">
                    <p className="card-text">Juan Guillermo Chaverra <br/> 
                        Auxiliar operativo - Eléctrico <br/>
                        Código SAP: 1234 <br/>
                        Turno L - V 6:00 a 16:00 
                    </p>
                </div>
            </div>
            <div className="card col-sm-3" style={{width: "18rem"}}>
                <Link to="/tasks">
                    <img className="card-img-top" src="https://www.gravatar.com/avatar?d=identicon" alt="Card image cap"/>
                </Link>
                <div className="card-body text-center">
                    <p className="card-text">Johan Henano Zapata <br/> 
                        Auxiliar Operativo - Mecánico <br/>
                        Código SAP: 1234 <br/>
                        Turno L - V 6:00 a 16:00 
                    </p>
                </div>
            </div>
            </div>
        </div>
    </>
);

export default Personal;