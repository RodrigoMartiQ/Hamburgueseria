import style from "./style.module.css";
import React, { useState } from "react";
function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const Desplegarmenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <header className={style.Navbar}>
      <div id="navb" className={style.container}>
        <div className={style.navLimiter}>
          <div className={style.Leftside}>
            <h1>Samurai</h1>
          </div>
          <div className={style.Rightside}>

            <button
              className={style.abrirmenu}
              onClick={Desplegarmenu}>
              <i class="bi bi-list"></i>
            </button>

            {/* las comillas hace que no se mezclen las clases style.nav con style.navOpen, sin las comillas quedaria style.navstyle.navOpen */}

            <nav className={style.nav + " " + (menuOpen ? style.navOpen : "")}>
              
              <button
                className={style.cerrarmenu}
                onClick={Desplegarmenu}>
                <i class="bi bi-x-lg"></i>
              </button>

              <ul className={style.navlist}>
                <li onClick={Desplegarmenu}>
                  <a className={style.links} href="#inicio">
                    Inicio
                  </a>
                </li>
                <li onClick={Desplegarmenu}>
                  <a className={style.links} href="#menu">
                    Menu
                  </a>
                </li>
                <li onClick={Desplegarmenu}>
                  <a className={style.links} href="#contactanos">
                    Contactanos
                  </a>
                </li>
              </ul>
            </nav>
          </div>
        </div>
      </div>
    </header>
  );
}
export default Navbar;
