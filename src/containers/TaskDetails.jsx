import React from 'react';

const TaskDetails = () => (
    <>
        <div className="card text-center">
            <div className="card-header">
                Se revisa bandas de rodamiento
            </div>
            <div className="card-body">
                <h5 className="card-title">Procedimiento</h5>
                <p className="card-text">Revisar el estado de las bandas de rodamiento. 
                En los procedimientos se encuentran los criterios de aceptación o rechazo de las bandas.
                Procedimiento D50003180A 
                Procedimiento D50002436B 
                Procedimiento D50002422A
                RCM 
                1 Medir el desgaste del elastómero. Si la herramienta de control de desgaste esta en contacto con el disco 
                y no hace contacto con el elastómero, programar cambio de rodillo con revestimiento.
                2 Inspeccionar el elastómero de la banda de rodamiento. Si se encuentran objetos incrustados, retirarlos.</p>
                <a href="#" className="btn btn-primary">Ver procedimientos</a>
            </div>
            <div className="card-footer text-muted">
                5 de noviembre de 2019, 06:30 a.m
            </div>
        </div>
        <div className="card-header mt-2 text-center">
            Responsables
        </div>
        <div className="container-fluid mt-2">
            <div className="row d-flex justify-content-center">
                <div className="card col-sm-3 mr-2" style={{width: "18rem"}}>
                    <img className="card-img-top" src="https://www.gravatar.com/avatar?d=identicon" alt="Card image cap"/>
                    <div className="card-body text-center">
                        <p className="card-text">Juan Fernando Angulo Vasco <br/> 
                            P2 Mantenimiento - Supervisor <br/>
                            Código SAP: 1234 <br/>
                            Turno L - V 6:00 a 16:00 
                        </p>
                    </div>
                </div>
                <div className="card col-sm-3 mr-2" style={{width: "18rem"}}>
                    <img className="card-img-top" src="https://www.gravatar.com/avatar?d=identicon" alt="Card image cap"/>
                    <div className="card-body text-center">
                        <p className="card-text">Juan Guillermo Chaverra <br/> 
                            Auxiliar operativo - Eléctrico <br/>
                            Código SAP: 1234 <br/>
                            Turno L - V 6:00 a 16:00 
                        </p>
                    </div>
                </div>
                <div className="card col-sm-3" style={{width: "18rem"}}>
                    <img className="card-img-top" src="https://www.gravatar.com/avatar?d=identicon" alt="Card image cap"/>
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
        <div className="card-header mt-2 text-center">
            Observaciones
        </div>
        <div className="container mt-5 mb-5 text-center">
            <div class="form-check form-check-inline">
                <input class="form-check-input" type="checkbox" id="inlineCheckbox1" value="option1"/>
                <label class="form-check-label" for="inlineCheckbox1">Tarea realizada</label>
            </div>
            <div class="form-check form-check-inline">
                <input class="form-check-input" type="checkbox" id="inlineCheckbox2" value="option2"/>
                <label class="form-check-label" for="inlineCheckbox2">Pendiente</label>
            </div>
            <div class="form-check form-check-inline">
                <input class="form-check-input" type="checkbox" id="inlineCheckbox2" value="option2"/>
                <label class="form-check-label" for="inlineCheckbox2">Novedades</label>
            </div>
            <form>
                <div class="form-group mt-5">
                    <label for="exampleFormControlTextarea1">Observaciones</label>
                    <textarea class="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>    
                </div>
            </form>
            <button type="button" class="btn btn-primary btn-lg btn-block">Notificar</button>
        </div>
    </>
)

export default TaskDetails;