import React from 'react';
import styles from './alert.module.css';

function AlertText({ type, message, setOpen }) {
    let color = '';
    if(type === 'error') {
        color = '#d62701';
    } else if (type === 'success') {
        color = '#03b305';
    } else if (type === 'warning') {
        color = '#ecd303';
    }
    setTimeout(() => {
        setOpen({open: false, callback: ''});
    }, 3000);
  return (
    <h2 className={styles.text_alert} style={{backgroundColor: color}}>{message}</h2>
  )
}

export default AlertText;