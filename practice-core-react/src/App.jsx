import "./App.css";
import Hobby from "./Hobby";

function App() {
  const hobbies = ["Sleeping", "Traveling", "Coding", "Running", "Swimming"];

  return (
    <>
      <h1>Hello Good People</h1>

      <Name />
      <Sports />

      <h2>Hobby List:</h2>
      {hobbies.map((hobby, index) => (
        <Hobby key={index} hobby={hobby} />
      ))}

      <Devoloper name="Person1" technology="React" />
      <Devoloper name="Person2" technology="JavaScript" />

      <Salami event="Birthday Party" amount="5000" />
      <Salami event="Wedding" amount="20000" />
      <Salami />
    </>
  );
}

function Salami({ event = "No Event", amount = 20 }) {
  return (
    <div className="Name">
      <h3>Event: {event}</h3>
      <h3>Amount: {amount}</h3>
    </div>
  );
}

function Name() {
  const name = "Nahin";
  const age = 24;
  const passion = "Development";
  const experience = "1 year";

  return (
    <div className="Name">
      <p>
        My name is {name}, age is {age}. I am working on {passion}. I have{" "}
        {experience} of experience.
      </p>
    </div>
  );
}

function Sports() {
  const sportsStyle = {
    color: "blue",
    backgroundColor: "lightgray",
    padding: "10px",
    borderRadius: "5px",
    textAlign: "left",
  };

  return (
    <div style={sportsStyle}>
      <h2>My favorite sports are:</h2>
      <ol>
        <li>Football</li>
        <li>Cricket</li>
        <li>Badminton</li>
        <li>Chess</li>
      </ol>
    </div>
  );
}

function Devoloper(props) {
  const developerStyle = {
    color: "white",
    backgroundColor: "teal",
    border: "3px solid red",
    padding: "10px",
    marginTop: "10px",
  };

  return (
    <div style={developerStyle}>
      <h2>Name: {props.name}</h2>
      <h2>Technology: {props.technology
}</h2>
    </div>
  );
}

export default App;