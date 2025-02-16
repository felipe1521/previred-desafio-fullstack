'use client'

import React from 'react';
import { TrashIcon } from "@heroicons/react/24/outline";
import styles from "./button.module.css";
import ModalDelete from '../modals/ModalDelete';
import AlertText from '../alerts/AlertText';

function ButtonDelete({ data }) {
  const [openModal, setOpenModal] = React.useState({open: false, callback: ''});
  const handleClick = () => setOpenModal({...openModal, open: true});
  const message = (openModal.callback === 'success') ? 'El usuario se ha eliminado correctamente' : 'Ha ocurrido un problema al eliminar el usuario';
  return (
    <>
        <TrashIcon className={styles.icon} style={{color: '#ff0000', height: '2.5rem'}} onClick={handleClick} />
        {(openModal.open) ? <ModalDelete data={data} setOpenModal={setOpenModal} /> : <></>}
        {(openModal.callback !== '') ? <AlertText type={openModal.callback} message={message} setOpen={setOpenModal} /> : <></>}
    </>
  )
}

export default ButtonDelete;