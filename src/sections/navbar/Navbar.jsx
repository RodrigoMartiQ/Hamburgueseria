import style from "./style.module.css";

function Navbar() {
  return (
    <header className={style.Navbar}>
      <div id="navb" className={style.container}>
        <div className={style.navLimiter}>
          <div className={style.Leftside}>
            <h1>Samurai</h1>
          </div>
          <div className={style.Rightside}>
            <button className={style.abrirmenu}>abrir</button>

            <nav className={style.nav}>
              <button className={style.cerrarmenu}>cerrar</button>

              <ul className={style.navlist}>
                <li>
                  <a className={style.links} href="#inicio">
                    Inicio
                  </a>
                </li>
                <li>
                  <a className={style.links} href="#menu">
                    Menu
                  </a>
                </li>
                <li>
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
