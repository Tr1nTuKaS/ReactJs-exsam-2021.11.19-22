import React from "react";
import css5 from "./Task5.module.css";
import Button from "./Button";
import { IoLogoTwitter } from "react-icons/io";
function Task5() {
  return (
    <div className={css5.container}>
      <h3>Task 5</h3>

      <div className={css5.card}>
        <h2 className={css5.icon}>
          <IoLogoTwitter />
        </h2>
        <h1>Happening now</h1>
        <h6>Join Twitter today.</h6>
        <Button sing="Sign up" log="Log in" />
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
