import React, { useEffect, useState } from "react";
import axios from "axios";
import css6 from "./Task6.module.css";

const baseURL = "https://jsonplaceholder.typicode.com/users";
function Task6() {
  const [items, setitems] = useState(null);

  useEffect(() => {
    axios.get(baseURL).then((response) => {
      setitems(response.data);
    });
  }, []);

  if (!items) return null;

  return (
    <div>
      <h3>Task 6</h3>
      <div className={css6.container}>
        {items.map((item) => (
          <ul className={css6.card} key={item.id}>
            <li>Name: {item.name}</li>
            <li>Email: {item.email}</li>
            <li>
              Address street: {item.address.street},city:
              {item.address.street.city}
            </li>
            <li>Phone: {item.phone}</li>
            <li>Company name: {item.company.name}</li>
          </ul>
        ))}
      </div>
    </div>
  );
}

export default Task6;

/* Task 6
Atkurkite lentelę, kurioje bus randama ši informacija apie vartotoją:
- name;
- email;
- address (street + city pvz.: "Kulas Light, Gwenborough");
- phone;
- company (name).

Informaciją imkite iš čia: https://jsonplaceholder.typicode.com/users

Pastaba: naudokite useState, useEffect.
*/
