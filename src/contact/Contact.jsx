import style from "./style.module.css";
function Contact() {
  return (
    <div id="contactanos" className={style.container}>
      <div className={style.all}>
        <div className={style.letras}>
          <h1 className={style.titulo}>Enterate de las nuevas hamburguesas</h1>
          <form className={style.subcripcion}>
            <input
              className={style.emailsub}
              type="email"
              name="email"
              placeholder="marcelotinelli@gmail.com"
              required
            />
            <button className={style.botonsub} type="submit">
              Suscribete
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
export default Contact;
