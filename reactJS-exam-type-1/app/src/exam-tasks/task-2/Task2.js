import React from "react";
import css from "./Task2.module.css";
import img1 from "./images/posters.jpg";
import img2 from "./images/apparel.jpg";
import img3 from "./images/stickers.jpg";
import img4 from "./images/cups.jpg";
import img5 from "./images/calendars.jpg";

function Task2() {
  return (
    <div className={css.container}>
      <section className={css.sect}>
        <h1>Categories</h1>

        <div className={css.cards}>
          <div className={css.card}>
            <img src={img1} alt="" />
            <p>POSTERS</p>
          </div>
          <div className={css.card}>
            <img src={img2} alt="" />
            <p>APPEREL</p>
          </div>
          <div className={css.card}>
            <img src={img3} alt="" />
            <p>STICKERS</p>
          </div>
          <div className={css.card}>
            <img src={img4} alt="" />
            <p>CUPS</p>
          </div>
          <div className={css.card}>
            <img src={img5} alt="" />
            <p>CALENDARS</p>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Task2;

/* TASK 2
Atkurkite šį komponentą: https://prnt.sc/1296ht1

Paveikslėliai:
- posters: https://per4mmedia.com/wp-content/uploads/2021/03/posters.jpg
- apparel" https://per4mmedia.com/wp-content/uploads/2021/03/apparel.jpg
- stickers: https://per4mmedia.com/wp-content/uploads/2021/03/stickers.jpg
- cups: https://per4mmedia.com/wp-content/uploads/2021/03/cups.jpg
- calendars" https://per4mmedia.com/wp-content/uploads/2021/03/calendars.jpg

Pastaba: paveikslėlius talpinti projekto aplanke.
*/
