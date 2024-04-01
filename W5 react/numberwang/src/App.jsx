import "./App.css";
import NumberWang from "./components/NumberWang";
import NumberFact from "./components/NumberFact";

function App() {
  return (
    <div>
      <NumberWang />
      {/* when loaded, display a random fact auto */}
      <NumberFact />
    </div>
  );
}

export default App;
