import React from 'react';
import '../assets/styles/containers/Sap.scss'

const Sap = () => (

    <div className="container mt-5 border border-primary p-4 Sap">
        <form>
            <div className="form-group row">
                <label for="inputEmail3" className="col-sm-3 col-form-label">N° personal</label>
                <div className="col-sm-3">
                    <input type="email" className="form-control" id="inputEmail3" placeholder="1234"/>
                </div>
            </div>
            <div className="form-group row">
                <label className="col-sm-3 col-form-label">Trabajo real</label>
                <div className="col-sm-3">
                    <input type="email" className="form-control" id="inputEmail3" placeholder="60"/>
                </div>
            </div>
            <div className="form-group row">
                <div className="col-sm-10">
                    <div className="form-check">
                        <input className="form-check-input" type="checkbox" id="gridCheck1"/>
                        <label className="form-check-label" for="gridCheck1">
                        Notificación final
                        </label>
                    </div>
                </div>
                <div className="col-sm-10">
                    <div className="form-check">
                        <input className="form-check-input" type="checkbox" id="gridCheck1"/>
                        <label className="form-check-label" for="gridCheck1">
                        Sin trabajo restante
                        </label>
                    </div>
                </div>
                <div className="col-sm-10">
                    <div className="form-check">
                        <input className="form-check-input" type="checkbox" id="gridCheck1"/>
                        <label className="form-check-label" for="gridCheck1">
                        Comp. reservas
                        </label>
                        
                    </div>
                </div>
            </div>
            <div className="form-group row">
                <label for="inputEmail3" className="col-sm-3 col-form-label">Inicio trabajo</label>
                <div className="col-sm-3">
                    <input type="email" className="form-control" id="inputEmail3" placeholder="31.10.2019"/>
                </div>
                <div className="col-sm-3">
                    <input type="email" className="form-control" id="inputEmail3" placeholder="00:00:00"/>
                </div>
            </div>
            <div className="form-group row">
                <label for="inputEmail3" className="col-sm-3 col-form-label">Fin trabajo</label>
                <div className="col-sm-3">
                    <input type="email" className="form-control" id="inputEmail3" placeholder="31.10.2019"/>
                </div>
                <div className="col-sm-3">
                    <input type="email" className="form-control" id="inputEmail3" placeholder="00:00:00"/>
                </div>
            </div>
            <div className="form-group">
                <label for="exampleFormControlTextarea1">Texto Notificación</label>
                <textarea class="form-control" id="exampleFormControlTextarea1" rows="6"></textarea>
            </div>
            <div className="form-group row">
                <div className="col-sm-10">
                <button type="submit" className="btn btn-primary">Guardar</button>
                </div>
            </div>
        </form>
    </div>

);
 
export default Sap;