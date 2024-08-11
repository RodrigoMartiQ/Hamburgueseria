import style from "./style.module.css";

function Info() {
  return (
    <div className={style.container}>
      <div className={style.all}>
        <img
          className={style.imagencostado}
          src="./public/imagenes/hamburguesa.jpg"
          alt=""
        />
        <div className={style.letras}>
          <h1 className={style.titulo}>
            La mejor comida siempre sera una buena carne entre dos panes con un
            poco de verdura.
          </h1>
          <p className={style.parrafo}>
            No necesitas un tenedor de plata para comer buena comida. Después de
            una buena hamburguesa uno puede perdonar a cualquiera,incluso a los
            propios familiares.
          </p>
        </div>
      </div>
    </div>
  );
}
export default Info;
