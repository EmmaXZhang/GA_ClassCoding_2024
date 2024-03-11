import "./App.css";
import Clicker from "./components/Clicker";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Clicker />
    </>
  );
}

export default App;
