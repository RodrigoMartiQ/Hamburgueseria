import style from "./style.module.css";

function Info2() {
  return (
    <div className={style.container}>
      <div className={style.all}>
        <div className={style.imagencomidamesa}>
          <div className={style.letras}>
            <h1 className={style.titulo}>
              Cuando el estómago de un hombre está lleno, no importa si es rico
              o pobre.
            </h1>
            <p className={style.parrafo}>
              Que el alimento sea tu medicina y la medicina sea tu alimento.
              "Todos comemos, y sería una triste pérdida de oportunidad comer
              mal".
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Info2;
