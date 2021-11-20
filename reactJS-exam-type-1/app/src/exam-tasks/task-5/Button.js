import css from "./Task5.module.css";

function Button({ sing, log }) {
  return (
    <div>
      <button className={css.btn1}>{sing}</button>
      <button className={css.btn2}>{log}</button>
    </div>
  );
}

export default Button;
