import React from 'react';
import styles from './input.module.css';

function InputEmail({ value, setValue, error, valid, setValid, name }) {
  const [stylePlaceholder, setStylePlaceholder] = React.useState('');

  React.useEffect(() => {
    const style = (value[name]) ? styles.placeholder_up : '';
    setStylePlaceholder(style);
  }, [value]);

  const handleInput = (newValue) => {
    if(newValue.length <= 50) {
      const regex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
      setValid(regex.test(newValue));
      setValue({ ...value, [name]: newValue });
    }
  }
  
  return (
    <div className={`${styles.container} ${(error && !value[name]) ? styles.input_error: ''}`}>
      <input type='email' name={name} className={styles.text_input} onChange={(e) => handleInput(e.target.value)}
      value={value[name]} />
      <p className={`${styles.placeholder} ${stylePlaceholder}`}>
        correo {(value[name].length >= 50) ? '(Máximo 50 caracteres)' : ''}</p>
      {(error && !value[name]) ? <p className={styles.text_error}>Debes ingresar una correo</p> : <></>}
      {(!valid && value[name]) ? <p className={styles.text_error}>El formato del correo es invalido</p> : <></>}
    </div>
  )
}

export default InputEmail;