import React, { useRef } from "react";

function Task7() {
  const light = useRef(null);
  const dark = useRef();

  const handleLight = (e) => {
    e.preventDefault();
    light.current.style.backgroundColor = "#f1f1f1";
    light.current.style.color = "#000000";
    dark.current.style.backgroundColor = "#f1f1f1";
    dark.current.style.color = "#000000";
  };

  const handleDark = (e) => {
    e.preventDefault();
    dark.current.style.backgroundColor = "#000000";
    dark.current.style.color = "#f1f1f1";
    light.current.style.backgroundColor = "#000000";
    light.current.style.color = "#f1f1f1";
  };

  return (
    <div>
      <h3>Task 7</h3>
      <h1 ref={light}>React fronto studija</h1>
      <p ref={dark}>Never give up</p>
      <button onClick={handleLight}>Light theme</button>
      <button ref={dark} onClick={handleDark}>
        Dark theme
      </button>
    </div>
  );
}

export default Task7;

/* Task 7
Task 7 komponento viduje sukurkite h1 ir p žymas su tekstu ir du mygtukus.

Vienas mygtukas vadinsis "Light theme", kurį paspaudus Task7 komponento fonas
taps šios spalvos #f1f1f1, o tekstas #0000.
Kitas mygtukas vadinsis "Dark theme", kurį paspaudus Task7 komponento fonas
taps šios spalvos #000000, o tekstas #f1f1f1.

Pastabos:
- mygtukai turi būti atvaizduojami komponento viduje, jiems atskirų komponentų
kurti nereikia;
- panaudokite useRef.
*/
