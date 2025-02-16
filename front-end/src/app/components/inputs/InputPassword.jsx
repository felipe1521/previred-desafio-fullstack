import React from 'react';
import styles from './input.module.css';

function InputPassword({ value, setValue, error, name }) {
  const [stylePlaceholder, setStylePlaceholder] = React.useState('');

  React.useEffect(() => {
    const style = (value[name]) ? styles.placeholder_up : '';
    setStylePlaceholder(style);
  }, [value]);

  const handleInput = (newValue) => setValue({ ...value, [name]: newValue });

  return (
    <div className={`${styles.container} ${(error && !value[name]) ? styles.input_error: ''}`}>
      <input type='text' name={name} className={styles.text_input} onChange={(e) => handleInput(e.target.value)}
      value={value[name]} max={50}/>
      <p className={`${styles.placeholder} ${stylePlaceholder}`}>contraseña</p>
      {(error && !value[name]) ? <p className={styles.text_error}>Debes ingresar un rut</p> : <></>}
    </div>
  )
}

export default InputPassword;