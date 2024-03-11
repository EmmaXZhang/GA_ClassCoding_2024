import logo from "./logo.svg";
import "./App.css";
import SkillList from "./components/SkillList";
import NewSkillForm from "./components/NewSkillForm";

function App() {
  return (
    <div className="App">
      <h1>React Dev Skills</h1>
      <SkillList />
      <hr />
      <NewSkillForm />
    </div>
  );
}

export default App;
