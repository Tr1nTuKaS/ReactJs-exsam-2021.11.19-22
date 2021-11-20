import css5 from "./Task5.module.css";

function Button({ sing, log }) {
  return (
    <div>
      <button className={css5.btn1}>{sing}</button>
      <button className={css5.btn2}>{log}</button>
    </div>
  );
}

export default Button;
