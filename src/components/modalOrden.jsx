import React from "react";
import Status from "./status";

const ModalOrden= (onClose) => {
    return(
    <div>
        <div className="row">
            <h3 className="col-4">Detalle de orden</h3>
            <Status className="col-2"></Status>
            <div className="col-6 mt-1">
                <label htmlFor="status" className="txt-ngr pl-2"><h5>Editar estado:</h5></label>
                <select name="status" id="status">
                    <option value="">Cambiar estado</option>
                    <option value="cancelado">Cancelado</option>
                    <option value="facturado">Facturado</option>
                </select>
            </div>
        </div>
        <div className="row pt-3">
            <div className="row">
                <p className="d-inline pr-1 col"><span className="txt-ngr">Numero de orden:</span> N° 2321</p>
                <p className="d-inline pr-1 col"><span className="txt-ngr">Fecha realización:</span> 27/01/2023</p>
                <p className="d-inline pr-1 col"><span className="txt-ngr">Vendedor:</span> Jesús Burgos</p>
            </div>
            <div className="row pt-3 pb-4">
                <p className="d-inline pr-1 col"><span className="txt-ngr">Cliente:</span> CZ Motors</p>
                <p className="d-inline pr-1 col"><span className="txt-ngr">Dirección:</span> Cl. 64 #64-05 </p>
                <p className="d-inline pr-1 col"><span className="txt-ngr">NIT:</span> 800.197.268-1</p>
            </div>
        </div>
        <div className="row">
            <table className="table table-grid col-12 table-striped table-hover table-bordered">
                <thead>
                    <tr>
                        <th>Marca</th>
                        <th>Referencia</th>
                        <th>Cantidad</th>
                        <th>Precio unitario</th>
                        <th>Valor total</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>POWER TAXI</td>
                        <td>NS40</td>
                        <td>1</td>
                        <td>$ 1.000.000</td>
                        <td>$ 1.000.000</td>
                    </tr>
                    <tr>
                        <td>NARBATT</td>
                        <td>42D 850</td>
                        <td>2</td>
                        <td>$ 1.000.000</td>
                        <td>$ 2.000.000</td>
                    </tr>
                    <tr>
                        <td>NARBATT</td>
                        <td>42I 850</td>
                        <td>1</td>
                        <td>$ 1.000.000</td>
                        <td>$ 1.000.000</td>
                    </tr>
                    <tr className="order-total">
                        <th>Total</th>
                        <td>$ 4.000.000</td>
                    </tr>
                </tbody>
            </table>
        </div>
        <div className="row">
            <div className="col-8"></div>
            <div className="col-4">
                <input class="btn btn-primary col-5 m-1" type="button" value="Guardar" />
                <button class="btn btn-secondary col-6 my-1" onClick={onClose}>Cancelar</button>
            </div>
        </div>
    </div>
    )
}

export default ModalOrden; 