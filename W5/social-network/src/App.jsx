import "./App.css";
import Profile from "./components/Profile";
import Greeting from "./components/Greeting";

function App() {
  return (
    <>
      <h1>Social Network</h1>

      <Greeting user="Bjorn" />
      <Profile
        name="Groucho"
        age="44"
        motto="No Gosd No Matter"
        pic="http://picsum.photos/100/100"
      />
    </>
  );
}

export default App;
