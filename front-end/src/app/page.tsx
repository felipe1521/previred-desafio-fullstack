
import { Usuario } from "./models/usuario";
import styles from "./page.module.css";
import ButtonSave from "@/app/components/buttons/ButtonSave";
import ButtonDelete from "@/app/components/buttons/ButtonDelete";
import ButtonUpdate from "@/app/components/buttons/ButtonUpdate";

export default async function Home() {
  const response = await fetch('http://localhost:8080/api/usuarios');
  const data = await response.json();
  const tableData = data.map((item: Usuario) => {
    return (
      <div key={item.id} className={styles.table_data}>
        <h4>{item.nombres}</h4>
        <h4>{item.apellidos}</h4>
        <h4>{item.rut}-{item.dv}</h4>
        <h4>{item.fechaNacimiento}</h4>
        <h4>{item.correoElectronico}</h4>
        <h4>{item.contrasena}</h4>
        <div className={styles.options}>
          <ButtonDelete data={item} />
          <ButtonUpdate data={item} />
        </div>
      </div>
    );
  });
  return (
    <main className='page'>
      <div className={styles.section_info}>
        <h1 className={styles.title}>Registro de usuarios</h1>
      </div>
      <ButtonSave />
      <div className={styles.table}>
        <div className={styles.table_title}>
          <h4>Nombres</h4>
          <h4>Apellidos</h4>
          <h4>Rut</h4>
          <h4>Fecha Nacimiento</h4>
          <h4>Correo</h4>
          <h4>Contraseña</h4>
          <h4></h4>
        </div>
        {tableData}
      </div>
    </main>
  );
}
