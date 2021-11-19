import { useHistory } from "react-router";

function About() {
  const history = useHistory();

  const handleBack = () => {
    history.push("/");
  };
  return (
    <>
      <h1>About Us</h1>
      <button onClick={handleBack}>back</button>
    </>
  );
}

export default About;
