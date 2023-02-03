import React from "react";
import {useState} from "react";
import Modal from "./modal";
import ModalOrden from "./modalOrden";
import ModalUsuario from "./modalUsuario";
const Modales = () => {
    const [mostrar, setMostrar] = useState(false)
    const [verUsuarios, setVerUsuarios] = useState(false)
    return (
        <div className="w-100">
            <h1>Modales</h1>
            <button className="btn btn-primary my-1 mx-2" onClick={() => setMostrar(true) }>Ver modal 1</button>
            <Modal isOpen={mostrar} onClose={() => setMostrar(false)}>
                <ModalOrden/>
            </Modal>

            <button className="btn btn-primary my-1 mx-2" onClick={() => setVerUsuarios(true) }>Ver modal 2</button>
            <Modal isOpen={verUsuarios} onClose={() => setVerUsuarios(false)}>
                <ModalUsuario/>
            </Modal>
        </div>
    )
}

export default Modales;