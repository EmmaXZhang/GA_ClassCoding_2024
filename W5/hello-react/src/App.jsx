// import reactLogo from "./assets/react.svg";
// import viteLogo from "/vite.svg";
import "./App.css";
import HelloWorld from "./components/HelloWorld";
import HelloUser from "./components/HelloUser";

function App() {
  return (
    <div>
      <HelloWorld />
      <HelloUser name="Billy" />
    </div>
  );
}

export default App;
