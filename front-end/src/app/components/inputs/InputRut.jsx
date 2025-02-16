import React from 'react';
import styles from './input.module.css';

function InputRut({ value, setValue, error, name }) {
  const [stylePlaceholder, setStylePlaceholder] = React.useState('');
  

  React.useEffect(() => {
    const style = (value[name]) ? styles.placeholder_up : '';
    setStylePlaceholder(style);
  }, [value]);

  const handleInput = (newValue) => {
    const [rut, dv] = newValue.split('-');
    setValue({ ...value, rut: rut, dv: dv });
  }

  const formatRut = (value) => {
    let newRut = value.replace(/[^0-9Kk]/g, "").toLowerCase();
    if (newRut.length > 1) {
        let numero = newRut.slice(0, -1);
        let dv = newRut.slice(-1);
        return `${numero}-${dv}`;
    }
    return newRut;
  }
  const concatedRut = String(value.rut).concat(value.dv);

  return (
    <div className={`${styles.container} ${(error && !value[name]) ? styles.input_error: ''}`}>
      <input type='text' name={'rut'} className={styles.text_input} onChange={(e) => handleInput(formatRut(e.target.value))}
      value={formatRut(concatedRut)} />
      <p className={`${styles.placeholder} ${stylePlaceholder}`}>rut</p>
      {(error && !value[name]) ? <p className={styles.text_error}>Debes ingresar un rut</p> : <></>}
    </div>
  )
}

export default InputRut;