import { useHistory } from "react-router";

function Contacts() {
  const history = useHistory();

  const handleBack = () => {
    history.push("/");
  };
  return (
    <>
      <h1>Contacts</h1>
      <button onClick={handleBack}>back</button>
    </>
  );
}

export default Contacts;
