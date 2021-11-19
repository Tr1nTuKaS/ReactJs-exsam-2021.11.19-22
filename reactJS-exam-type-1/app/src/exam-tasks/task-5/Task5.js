import React from "react";
import css from "./Task5.module.css";
import logo from "./image/Twitter-Logo.png";

function Task5() {
  return (
    <div className={css.container}>
      <h3>Task 5</h3>
      <div className={css.card}>
        <div className={css.nav}>
          <img className={css.logo} src={logo} alt="logo" />
        </div>
        <h1>Happening now</h1>
        <h6>Join Twitter today.</h6>
        <button className={css.btn1}>Sing up</button>
        <button className={css.btn2}>Log in</button>
      </div>
    </div>
  );
}

export default Task5;

/* Task 5
Atkurkite šį komponentą: https://prnt.sc/12978k7

Pastabos:
- turi būti sukurtas papildomas <Button> komponentas, kuris prims
du props: tekstas ir klasė. Remiantis jais bus atvaizduojamas
komponente nurodyti mygtukai;
- šriftas: naudokite savo parinktą;
- twitter logo, naudokite ikon'ą.
*/
