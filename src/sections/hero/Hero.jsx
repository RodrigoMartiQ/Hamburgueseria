import style from "./style.module.css"

function Hero() {
  return (
    <div id="inicio" className={style.container}>
      <div className={style.all}>
        <img className={style.imagenhero} src="/imagenes/fondohero.jpg" alt="hero" />
        <div className={style.letras}>
          <h1 className={style.titulo}>
            Nuestras hamburguesas son la mejor inversión en sabor.
          </h1>
          <p className={style.parrafo}>
            Tenemos una poderosa conexión con nuestros clientes,eso significa
            que nuestras hamburguesas deben tener algo que atraiga al corazón y
            al paladar humano.
          </p>
          <a className={style.boton} href="#menu">
            Ordena ahora
          </a>
        </div>
      </div>
    </div>
  );
}
export default Hero;
