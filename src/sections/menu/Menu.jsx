import BurguerCard from "../../components/burger-card/burger-card";
import style from "./style.module.css";

function Menu() {
  return (
    <div id="menu">
      <h1 className={style.letra}>Explora nuestro menu</h1>
      <div className={style.container}>
        <div className={style.all}>
          <BurguerCard
            title="Bacon Cheese"
            img="./public/imagenes/menu/baconcheese.png"
            price="100"
          />
          <BurguerCard
            title="Bacon cheese Double"
            img="./public/imagenes/menu/macdouble.png"
            price="150"
          />
          <BurguerCard
            title="Quarter"
            img="./public/imagenes/menu/quarter.png"
            price="200"
          />
          <BurguerCard
            title="Angus Mushroom"
            img="./public/imagenes/menu/angusmushroom.png"
            price="250"
          />
          <BurguerCard
            title="Angus Bacon"
            img="./public/imagenes/menu/angusbacon.png"
            price="250"
          />
          <BurguerCard
            title="Angus Deluxe"
            img="./public/imagenes/menu/angusdeluxe.png"
            price="250"
          />
          <BurguerCard
            title="Quarter Pounder"
            img="./public/imagenes/menu/quarterpounder.png"
            price="300"
          />
          <BurguerCard
            title="Big Meat "
            img="./public/imagenes/menu/bigmac.png"
            price="300"
          />
          <BurguerCard
            title="Doble Big Meat"
            img="./public/imagenes/menu/Doublebigmac.png"
            price="350"
          />
        </div>
      </div>
    </div>
  );
}
export default Menu;
