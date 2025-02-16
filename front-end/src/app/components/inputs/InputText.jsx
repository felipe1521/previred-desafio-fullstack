import React from 'react';
import styles from './input.module.css';

function InputText({ value, setValue, error, name }) {
  const [stylePlaceholder, setStylePlaceholder] = React.useState('');

  React.useEffect(() => {
    const style = (value[name]) ? styles.placeholder_up : '';
    setStylePlaceholder(style);
  }, [value]);

  const handleInput = (newValue) => {
    if(newValue.length <= 20) setValue({ ...value, [name]: newValue });
  };

  return (
    <div className={`${styles.container} ${(error && !value[name]) ? styles.input_error: ''}`}>
      <input type='text' name={name} className={styles.text_input} onChange={(e) => handleInput(e.target.value)}
      value={value[name]} />
      <p className={`${styles.placeholder} ${stylePlaceholder}`}>
        {name} {(value[name].length >= 19) ? '(Maximo 20 caracteres)' : ''}
      </p>
      {(error && !value[name]) ? <p className={styles.text_error}>Debes ingresar un dato</p> : <></>}
    </div>
  )
}

export default InputText;