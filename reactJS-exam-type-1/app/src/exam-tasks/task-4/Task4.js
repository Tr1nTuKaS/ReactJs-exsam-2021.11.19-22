import React, { useState } from "react";
import css4 from "./Task4.module.css";

function Task4() {
  const [like, setLike] = useState(12);
  const [dislike, setDislike] = useState(2);

  const handleLike = (e) => {
    e.preventDefault();
    if (like === 12) {
      setLike(like + 1);
      setDislike(2);
    }
  };

  const handleDislike = (e) => {
    e.preventDefault();
    if (dislike === 2) {
      setDislike(dislike + 1);
      setLike(12);
    }
  };

  return (
    <div className={css4.container}>
      <h3>Task 4</h3>
      <div className={css4.card}>
        <div onClick={handleLike} className={css4.like}>
          {like}
        </div>
        <div onClick={handleDislike} className={css4.dislike}>
          {dislike}
        </div>
      </div>
    </div>
  );
}

export default Task4;

/* Task 4
Atkurkite šį komponentą: https://prnt.sc/1296zmk

Pastabos, leidžiama balsuoti, tik vieną kartą. 
Paspaudus ant vieno mygtuko, antrą kartą paspausti ant jo 
negalima, tačiau leidžiama pakeisti nuomonę ir paspausti 
ant kito. Tokiu atveju nuo prieš tai paspausto balsas "nuimamas"
ir perduodamas kitam.

Pastaba: būtina panaudoti useReducer
*/
