'use client'

import React from 'react';
import styles from "./modal.module.css";
import stylesBtn from "@/app/components/buttons/button.module.css";
import { useRouter } from "next/navigation";
import Loading from '@/app/loading';

function ModalDelete({ data, setOpenModal }) {
  const [loading, setLoading] = React.useState(false);
  const router = useRouter();
  
  const handleConfirm = async () => {
    try {
      setLoading(true);
      const resp = await fetch(`http://localhost:8080/api/usuarios/delete/${data.id}`, { method: 'DELETE' });
      setLoading(false);
      if(resp.ok) {
        setOpenModal({open: false, callback: 'success'});
      } else {
        setOpenModal({open: false, callback: 'error'});
      }
      router.refresh();
    } catch (error) {
      setLoading(false);
      setOpenModal({open: false, callback: 'error'});
      console.error('Error:', error);
    }
  };
  const handleCancel = () => setOpenModal({open: false, callback: ''});
  return (
    <>
      {(loading) ? <Loading /> : <></>}
      <div className={styles.overlay}>
        <div className={styles.modal}>
          <div className={styles.data_desc}>
            <h1>¿Estás seguro que deséas eliminar el usuario: <i>{data.nombres} {data.apellidos}</i>?</h1>
          </div>
          <div className={stylesBtn.btn_container}>
              <button className={`${stylesBtn.btn} ${stylesBtn.btn_confirm}`} onClick={handleConfirm}>Confirmar</button>
              <button className={`${stylesBtn.btn} ${stylesBtn.btn_cancel}`} onClick={handleCancel}>Cancelar</button>
          </div>
        </div>
      </div>
    </>
  )
}

export default ModalDelete;