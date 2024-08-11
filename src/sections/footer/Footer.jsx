import style from "./style.module.css";
function Footer() {
  return (
    <footer className={style.footer}>
      <div className={style.container}>
        <div className={style.info}>
          <nav>
            <a className={style.letrasamurai} href="navb">
            Samurai
            </a>
          </nav>
        </div>

        <div className={style.info}>
          <h1>Metodos de pago:</h1>
          <p>Transferencia</p>
          <p>Efectivo</p>
        </div>

        <div className={style.info}>
          <h1>¿Donde estamos?</h1>
          <p>Envios a todo el mundo</p>
          <p>Cordoba, Argentina</p>
        </div>

        <div className={style.info}>
          <h1>Contactanos</h1>
          <p>Samuraitinelli@gmail.com</p>
          <p>351 3803800</p>
        </div>
      </div>
    </footer>
  );
}
export default Footer;
