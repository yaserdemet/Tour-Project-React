import React from "react";
import Header from "../header/Header";
// import Nav from "../navbar/Nav";
import cardStyle from "./card.module.css";


const Card = ({ id, image, title, desc }) => {
  return (

      <div className={cardStyle["outer-container"]}>
      <div className={cardStyle["container"]}>
        <h1 className={cardStyle["baslık"]}>{title}</h1>
        <img className={cardStyle["foto"]} src={image} alt="image" />
        <p className={cardStyle["aciklama"]}>{desc}</p>

      </div>
      {/* <Header /> */}
     

    </div>
    
  );
};

export default Card;
