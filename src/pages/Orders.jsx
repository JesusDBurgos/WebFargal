import React from "react";
import { FaPencilAlt, FaTrash } from "react-icons/fa";
import Modales from "../components/modales";
const Orders = (isOpen) => {
        return (
            <>
            <header className="pb-4"><h1>Ordenes de compra</h1></header>
            {/* TABLA DE ORDENES DE USUARIO  */}
            <div className="text-center p-0">
                    <table class="table table-striped table-hover table-bordered">
                        <thead className="align-text-top">
                            <tr>
                                <th>Nº Pedido <br/> <input type="number" min="1000" max="9999"></input></th>
                                <th>Vendedor <br/> <input type="search" size="18"></input></th>
                                <th>Cliente <br/> <input type="search" size="18"></input></th>
                                <th>Valor <br/> <input type="search" size="10"></input></th>
                                <th>Fecha <br/> <input type="search" size="10"></input></th>
                                <th>Estado <br/> <input type="search" size="8"></input></th>
                                <th>Acción</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>1313</td>
                                <td>Ernesto Perez</td>
                                <td>El pepe</td>
                                <td>$ 1.000.000</td>
                                <td>15/01/2023</td>
                                <td>Aprobado</td>
                                <td>
                                    <Modales/>
                                </td>
                            </tr>
                            <tr>
                                <td>1313</td>
                                <td>Ernesto Perez</td>
                                <td>El pepe</td>
                                <td>$ 1.000.000</td>
                                <td>15/01/2023</td>
                                <td>Aprobado</td>
                                <td>
                                    <button className="button-orders"> <FaPencilAlt /> </button>
                                    <button className="button-orders"> <FaTrash /> </button>
                                </td>
                            </tr>
                            <tr>
                                <td>1313</td>
                                <td>Ernesto Perez</td>
                                <td>El pepe</td>
                                <td>$ 1.000.000</td>
                                <td>15/01/2023</td>
                                <td>Aprobado</td>
                                <td>
                                    <button className="button-orders"> <FaPencilAlt /> </button>
                                    <button className="button-orders"> <FaTrash /> </button>
                                </td>
                            </tr>
                            <tr>
                                <td>1313</td>
                                <td>Ernesto Perez</td>
                                <td>El pepe</td>
                                <td>$ 1.000.000</td>
                                <td>15/01/2023</td>
                                <td>Aprobado</td>
                                <td>
                                    <button className="button-orders"> <FaPencilAlt /> </button>
                                    <button className="button-orders"> <FaTrash /> </button>
                                </td>
                            </tr>
                            <tr>
                                <td>1313</td>
                                <td>Ernesto Perez</td>
                                <td>El pepe</td>
                                <td>$ 1.000.000</td>
                                <td>15/01/2023</td>
                                <td>Aprobado</td>
                                <td>
                                    <button className="button-orders"> <FaPencilAlt /> </button>
                                    <button className="button-orders"> <FaTrash /> </button>
                                </td>
                            </tr>
                            <tr>
                                <td>1313</td>
                                <td>Ernesto Perez</td>
                                <td>El pepe</td>
                                <td>$ 1.000.000</td>
                                <td>15/01/2023</td>
                                <td>Aprobado</td>
                                <td>
                                    <button className="button-orders"> <FaPencilAlt /> </button>
                                    <button className="button-orders"> <FaTrash /> </button>
                                </td>
                            </tr>
                            <tr>
                                <td>1313</td>
                                <td>Ernesto Perez</td>
                                <td>El pepe</td>
                                <td>$ 1.000.000</td>
                                <td>15/01/2023</td>
                                <td>Aprobado</td>
                                <td>
                                    <button className="button-orders"> <FaPencilAlt /> </button>
                                    <button className="button-orders"> <FaTrash /> </button>
                                </td>
                            </tr>
                            <tr>
                                <td>1313</td>
                                <td>Ernesto Perez</td>
                                <td>El pepe</td>
                                <td>$ 1.000.000</td>
                                <td>15/01/2023</td>
                                <td>Aprobado</td>
                                <td>
                                    <button className="button-orders"> <FaPencilAlt /> </button>
                                    <button className="button-orders"> <FaTrash /> </button>
                                </td>
                            </tr>
                            <tr>
                                <td>1313</td>
                                <td>Ernesto Perez</td>
                                <td>El pepe</td>
                                <td>$ 1.000.000</td>
                                <td>15/01/2023</td>
                                <td>Aprobado</td>
                                <td>
                                    <button className="button-orders"> <FaPencilAlt /> </button>
                                    <button className="button-orders"> <FaTrash /> </button>
                                </td>
                            </tr>
                        </tbody>
                        <tr></tr>
                    </table>
                </div>
                {/* BARRA DE PAGINACIÓN */}
                <nav aria-label="Barra de paginación" className="nav-bar">
                    <ul class="pagination">
                        <li class="page-item disabled">
                        <a class="page-link" href="page" tabindex="-1">Atras</a>
                        </li>
                        <li class="page-item"><a class="page-link" href="page">1</a></li>
                        <li class="page-item active">
                        <a class="page-link" href="page">2 <span className="sr-only"></span></a>
                        </li>
                        <li class="page-item"><a class="page-link" href="page">3</a></li>
                        <li class="page-item">
                        <a class="page-link" href="page">Siguiente</a>
                        </li>
                    </ul>
                </nav>
                </>
        );
    }

export default Orders;