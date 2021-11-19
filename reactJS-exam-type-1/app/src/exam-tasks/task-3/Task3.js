import React, { useState } from "react";
import css from "./Task3.module.css";

function Task3() {
  const [reg, setReg] = useState("age");

  const handleCheck = (e) => {
    e.preventDefault();
    if (reg < 18) {
      alert("Deja, registracija negalima.Registruotis galima tik nuo 18 metų");
    }
    if (reg >= 18) {
      alert("Dėkojame, kad užsiregistravote");
    }
  };

  return (
    <form className={css.form}>
      <h3>Task 3</h3>
      <input type="text" placeholder="Name" />
      <input type="text" placeholder="Surname" />
      <input
        value={reg}
        onChange={(e) => setReg(e.target.value)}
        type="text"
        placeholder="Age"
      />
      <div>
        <button onClick={handleCheck}>Pateikti</button>
      </div>
    </form>
  );
}

export default Task3;

/* TASK 3
Sukurkite forma, kurioje vartotojas galės nurodyti
- vardą
- pavardę
- amžių

Vartotojui užpildius formą ir paspaudus "Pateikti", po forma 
atsiras atsiras pasisveikinimas:
- Jei asmuo yra 18 m. ir vyresnis: "Dėkojame, kad užsiregistravote"
- Jei asmuo yra 17 m. ir jaunesnis: "Deja, registracija negalima. 
Registruotis galima tik nuo 18 metų"

Pastaba: panaudokite useState
*/
