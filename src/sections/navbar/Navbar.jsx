import style from "./style.module.css";

function Navbar() {
  return (
    
    <header id="navb" className={style.Navbar} >
      <div className={style.container}>
        <div className={style.navLimiter}>
          <div className={style.Leftside}>
            <h1>Samurai</h1>
          </div>
          <div className={style.Rightside}>

            <button id="abrir" className={style.abrirmenu}>abrir</button>

            <nav className={style.nav} id="nav">

              <button id="cerrar" className={style.cerrarmenu}>cerrar</button>

              <ul className={style.navlist}>
              <li><a className={style.links} href="#inicio">Inicio</a></li>
              <li><a className={style.links} href="#menu">Menu</a></li>
              <li><a className={style.links} href="#contactanos">Contactanos</a></li>
              </ul>
              
            </nav>



          </div>
        </div>
      </div>
    </header>
  );
}
export default Navbar;
