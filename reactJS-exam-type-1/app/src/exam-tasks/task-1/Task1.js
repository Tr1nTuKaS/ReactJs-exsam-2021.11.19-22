import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

const Header = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: #777;
  color: #fff;
  padding: 0.5rem 1rem;
`;
const NavLink = styled(Link)`
  padding: 0.5rem 1rem;
`;

function Task1() {
  return (
    <>
      <h3>Task 1</h3>
      <Header>
        <NavLink to="/about">About</NavLink>
        <NavLink to="/contact">Contacts</NavLink>
      </Header>
    </>
  );
}

export default Task1;

/* TASK 1
task-1 aplanke, sukurkite aplanką ir pavadinkite jį "Pages". 
"Pages" aplanke turi būti sukurti dviejų puslapių komponentai 
"About Us" ir "Contacts", kurie viduje turės tik po h1 žymą,
kurioje bus randmas komponento pavadinimas (pvz. <h1>About Us</h1>)
ir mygtuką "Grįžti atgal", kurį paspaudus bus grįžtama atgal.

Tada, komponente Task1 (kuriame esate dabar) sukurkite navigaciją, 
kuri leis patekti į nurodytus "Pages" puslapių komponentus. 
Naudodami React Router DOM sukurkite SPA principo navigaciją.
"Pages" komponentų turinys turi būti atvaizduojamas Task1 komponente.
*/
