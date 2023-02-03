import React from "react";
import { FaPencilAlt, FaTrash, FaUserPlus } from "react-icons/fa";
const Users = () => {
    return(
        <>
        <div className="pb-4">
            <h1>Usuarios en el sistema</h1>
        </div>
        <div className="text-center p-0">
            {/* TABLA DE USUARIOS  */}
        <table class="table table-striped table-hover table-bordered">
            <thead className="align-text-top">
                <tr>
                    <th>Nombre</th>
                    <th>Documento</th>
                    <th>Usuario</th>
                    <th>Rol</th>
                    <th>Acción</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>Jhony Martinez</td>
                    <td>10998461356</td>
                    <td>jhony123</td>
                    <td>Administrador</td>
                    <td>
                        <button className="button-users"> <FaPencilAlt /> </button>
                        <button className="button-users"> <FaTrash /> </button>
                    </td>
                </tr>
                <tr>
                    <td>Jhony Martinez</td>
                    <td>10998461356</td>
                    <td>jhony123</td>
                    <td>Administrador</td>
                    <td>
                        <button className="button-users"> <FaPencilAlt /> </button>
                        <button className="button-users"> <FaTrash /> </button>
                    </td>
                </tr>
                <tr>
                    <td>Jhony Martinez</td>
                    <td>10998461356</td>
                    <td>jhony123</td>
                    <td>Administrador</td>
                    <td>
                        <button className="button-users"> <FaPencilAlt /> </button>
                        <button className="button-users"> <FaTrash /> </button>
                    </td>
                </tr>
                <tr>
                    <td>Jhony Martinez</td>
                    <td>10998461356</td>
                    <td>jhony123</td>
                    <td>Administrador</td>
                    <td>
                        <button className="button-users"> <FaPencilAlt /> </button>
                        <button className="button-users"> <FaTrash /> </button>
                    </td>
                </tr>
                <tr>
                    <td>Jhony Martinez</td>
                    <td>10998461356</td>
                    <td>jhony123</td>
                    <td>Administrador</td>
                    <td>
                        <button className="button-users"> <FaPencilAlt /> </button>
                        <button className="button-users"> <FaTrash /> </button>
                    </td>
                </tr>
            </tbody>
            <tr></tr>
        </table>
        {/* BOTON AÑADIR UN NUEVO USUARIO */}
        <button type="button" class="btn btn-primary button-new-user"><FaUserPlus className="mr-4"/> Añadir un nuevo usuario</button>
    </div></>
    );
};

export default Users;