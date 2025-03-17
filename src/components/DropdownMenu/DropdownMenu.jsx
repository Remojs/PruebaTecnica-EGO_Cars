import React from "react";
import styles from "./DropdownMenu.module.css";

import close from "@assets/close.svg"

const DropdownMenu = ({ menuItems, onClose }) => { //recibo un objeto con todas las rutas del menu, tanto link como label
  return (
    <div className={styles.container}>

      <p className={styles.close} onClick={onClose}>
         Cerrar 
         <img src={close} alt="" className={styles.closeIcon}/>
      </p>

      {menuItems.map((section, index) => ( //mapeo cada seccion del objeto de menu items
        <div key={index} className={styles.section}>
          {section.items.map((item, idx) => ( //mapeo los items dentro de cada seccion
            <a key={idx} href={item.link} className={styles.menuItem}>
              {item.label}
            </a>
          ))} 
          {index !== menuItems.length - 1 && <hr className={styles.divider} />} 
        </div> //verifico si esta es la ultima seccion, para agregar un divisor entre secciones
      ))}
    </div>
  );
};

export default DropdownMenu;
