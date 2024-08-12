import style from "./style.module.css";
import React, { useState } from "react";
function Navbar(){

  const[show,setShow] = useState (false)

  const mostrarmenu = () => {
    setShow (!show);
  };

  return (
    <header className={style.Navbar}>
      <div id="navb" className={style.container}>
        <div className={style.navLimiter}>
          <div className={style.Leftside}>
            <h1>Samurai</h1>
          </div>
          <div className={style.Rightside}>
            
            
            {show ? <nav className={style.nav}>
              <button onClick={mostrarmenu} className={style.cerrarmenu}>
                <i class="bi bi-x-lg"></i>
              </button>
              <ul className={style.navlist}>
                <li onClick={mostrarmenu}>
                  <a className={style.links} href="#inicio">
                    Inicio
                  </a>
                </li>
                <li onClick={mostrarmenu}>
                  <a className={style.links} href="#menu">
                    Menu
                  </a>
                </li>
                <li onClick={mostrarmenu}>
                  <a className={style.links} href="#contactanos">
                    Contactanos
                  </a>
                </li>
              </ul>
            </nav> : 
            <div><button onClick={mostrarmenu} className={style.abrirmenu}>
              <i class="bi bi-list"></i>
            </button>
            </div>}
          </div>
        </div>
      </div>
    </header>
  );
}
export default Navbar;
