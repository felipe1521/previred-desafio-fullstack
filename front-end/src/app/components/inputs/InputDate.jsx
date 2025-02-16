import React from 'react';
import styles from "./input.module.css";
import { formatDate } from '@/app/lib/utilities';

function InputDate({ value, setValue, error, valid, setValid, name }) {

  const handleInput = (newValue) => {
    console.log(newValue);
    const regex = /^\d{4}-\d{2}-\d{2}$/;
    setValid(regex.test(newValue));
    const newDate = new Date(newValue);
    newDate.setDate(newDate.getDate() + 1);
    setValue({ ...value, [name]: formatDate(newDate) });
  }

  return (
  <div className={`${styles.container} ${(error && !value[name]) ? styles.input_error: ''}`}>
    <p className={`${styles.placeholder} ${styles.placeholder_up}`}>fecha de nacimiento</p>
    <input type='date' name='date' className={styles.date_input} 
      onChange={(e) => handleInput(e.target.value)} value={value[name]}  />
    {(error && !value[name]) ? <p className={styles.text_error}>Debes ingresar una fecha</p> : <></>}
    {(!valid && value[name]) ? <p className={styles.text_error}>El formato de la fecha es incorrecto</p> : <></>}
  </div>
  )
}

export default InputDate;