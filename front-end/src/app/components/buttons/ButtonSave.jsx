'use client'

import React from 'react';
import styles from "./button.module.css";
import ModalSave from "../modals/ModalSave";
import AlertText from '../alerts/AlertText';

function ButtonSave() {
    const [openModal, setOpenModal] = React.useState({open: false, callback: ''});
    const handleClick = () => setOpenModal({...openModal, open: true});
    const message = (openModal.callback === 'success') ? 'El usuario se ha registrado correctamente' : 'Ha ocurrido un problema al guardar el usuario';
    return (
      <>
        <button className={styles.button} style={{marginBlock: '1rem'}} onClick={handleClick}>Nuevo Usuario</button>
        {(openModal.open) ? <ModalSave setOpenModal={setOpenModal} /> : <></>}
        {(openModal.callback !== '') ? <AlertText type={openModal.callback} message={message} setOpen={setOpenModal} /> : <></>}
      </>
    )
}

export default ButtonSave;