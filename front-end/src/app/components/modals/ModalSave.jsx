'use client'

import React from 'react';
import styles from "./modal.module.css";
import stylesBtn from "@/app/components/buttons/button.module.css";
import { useRouter } from 'next/navigation';
import InputText from '@/app/components/inputs/InputText';
import InputEmail from '@/app/components/inputs/InputEmail';
import InputRut from '@/app/components/inputs/InputRut';
import InputPassword from '@/app/components/inputs/InputPassword';
import InputDate from '@/app/components/inputs/InputDate';
import { XMarkIcon } from '@heroicons/react/24/outline';
import Loading from '@/app/loading';

function ModalSave({ data = { 
  nombres: '', apellidos: '', rut: '', dv: '', fechaNacimiento: '', correoElectronico: '', contrasena: ''}, setOpenModal }) {
  const [formData, setFormData] = React.useState(data);
  const [formError, setFormError] = React.useState(false);
  const [loading, setLoading] = React.useState(false);
  const [validEmail, setValidEmail] = React.useState(true);
  const [validClave, setValidClave] = React.useState(true);
  const [validRut, setValidRut] = React.useState(true);
  const [validFecha, setValidFecha] = React.useState(true);

  const router = useRouter();

  const validateData = () => {
    const dataEmpty = Object.values(formData).filter((value) => {
      if(String(value).length > 0) return false;
      return true;
    });
    return (dataEmpty.length === 0);
  };

  const handleClose = () => setOpenModal({open: false, callback: ''});

  const handleSubmit = async () => {
    try {
      const validation = validateData();
      if(!validation) setFormError(true);     
      if(!validation || !validEmail || !validClave || !validRut || !validFecha) return;

      setLoading(true);
      const api = (!data.nombres) ? { type: 'save', method: 'POST' } : { type: 'edit', method: 'PUT' };
      const resp = await fetch(`http://localhost:8080/api/usuarios/${api.type}`, { 
        method: api.method,
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData)
      });
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
  return (
    <>
      {(loading) ? <Loading /> : <></>}
      <div className={styles.overlay}>
        <div className={styles.modal}>
          <InputText value={formData} setValue={setFormData} error={formError} name={'nombres'} />
          <InputText value={formData} setValue={setFormData} error={formError} name={'apellidos'} />
          <InputRut value={formData} setValue={setFormData} error={formError} valid={validRut} setValid={setValidRut} name={'rut'} />
          <InputDate value={formData} setValue={setFormData} error={formError} valid={validFecha} setValid={setValidFecha} name={'fechaNacimiento'} />
          <InputEmail value={formData} setValue={setFormData} error={formError} valid={validEmail} setValid={setValidEmail} name={'correoElectronico'} />
          <InputPassword value={formData} setValue={setFormData} error={formError} valid={validClave} setValid={setValidClave} name={'contrasena'} />
          <button className={stylesBtn.button} style={{ width: '50%'}} onClick={handleSubmit}>Guardar</button>
          <XMarkIcon className={styles.icon_close} onClick={handleClose} />
        </div>
      </div>
    </>
  )
}

export default ModalSave;