import React from 'react';
import styles from './input.module.css';

function InputPassword({ value, setValue, error, valid, setValid, name }) {
  const [stylePlaceholder, setStylePlaceholder] = React.useState('');

  React.useEffect(() => {
    const style = (value[name]) ? styles.placeholder_up : '';
    setStylePlaceholder(style);
  }, [value]);

  const handleInput = (newValue) => {
    if(newValue.length <= 20) {
      const regex = /^(?=.*[0-9])(?=.*[\W_]).{8,}$/;
      setValid(regex.test(newValue));
      setValue({ ...value, [name]: newValue });
    }
  }

  return (
    <div className={`${styles.container} ${(error && !value[name]) ? styles.input_error: ''}`}>
      <input type='text' name={name} className={styles.text_input} onChange={(e) => handleInput(e.target.value)}
      value={value[name]}/>
      <p className={`${styles.placeholder} ${stylePlaceholder}`}>
        contraseña {(value[name].length >= 19) ? '(Máximo 20 caracteres)' : ''}</p>
      {(error && !value[name]) ? <p className={styles.text_error}>Debes ingresar una contraseña</p> : <></>}
      {(!valid && value[name]) ? <p className={styles.text_error}>
        La contraseña debe tener minimo 8 caracteres, al menos 1 caracter especial y al menos 1 numero
      </p> : <></>}
    </div>
  )
}

export default InputPassword;