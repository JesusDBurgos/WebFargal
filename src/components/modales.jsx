import React from "react";
import {useState} from "react";
import { FaPencilAlt, FaTrash } from "react-icons/fa";
import Modal from "./modal";
import ModalOrden from "./modalOrden";
import ModalUsuario from "./modalUsuario";
const Modales = () => {
    const [mostrar, setMostrar] = useState(false)
    const [verUsuarios, setVerUsuarios] = useState(false)
    return (
        <div className="w-100">
            <button className="button-orders my-1 mx-2" onClick={() => setMostrar(true) }><FaPencilAlt /></button>
            <Modal isOpen={mostrar} onClose={() => setMostrar(false)}>
                <ModalOrden/>
            </Modal>

            <button className="button-orders my-1 mx-2" onClick={() => setVerUsuarios(true) }><FaTrash /></button>
            <Modal isOpen={verUsuarios} onClose={() => setVerUsuarios(false)}>
                <ModalUsuario/>
            </Modal>
        </div>
    )
}

export default Modales;