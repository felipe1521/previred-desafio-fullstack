'use client'

import React from 'react';
import { PencilIcon } from '@heroicons/react/24/outline';
import ModalSave from '@/app/components/modals/ModalSave';
import AlertText from '@/app/components/alerts/AlertText';
import styles from "./button.module.css";

function ButtonUpdate({ data }) {
    const [openModal, setOpenModal] = React.useState({open: false, callback: ''});
    const handleClick = () => setOpenModal({...openModal, open: true});
    const message = (openModal.callback === 'success') ? 'El usuario se ha actualizado correctamente' : 'Ha ocurrido un problema al actualizado el usuario';
    return (
      <>
        <PencilIcon className={styles.icon} style={{color: 'blue', height: '2rem'}} onClick={handleClick}/>
        {(openModal.open) ? <ModalSave data={data} setOpenModal={setOpenModal} /> : <></>}
        {(openModal.callback !== '') ? <AlertText type={openModal.callback} message={message} setOpen={setOpenModal} /> : <></>}
      </>
    )
}

export default ButtonUpdate;