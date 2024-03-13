import { useState } from "react";

import "./App.css";

function App() {
  const [formData, setFormData] = useState({
    name: "",
    emotion: "😁",
  });

  function handleChange(event) {
    //replace object state with a new object
    const newFormData = {
      ...formData,
      [event.target.name]: event.target.value,
    };
    //use a computed property to update the correct state property
    setFormData(newFormData);
  }

  return (
    <div className="App">
      <form>
        <label>NAME</label>
        <input name="name" value={formData.name} onChange={handleChange} />
        <label>EMOTION</label>
        <select name="emotion" value={formData.emotion} onChange={handleChange}>
          <option value="😁">Happy</option>
          <option value="😐">Neutral</option>
          <option value="😠">Angry</option>
        </select>
      </form>
    </div>
  );
}

export default App;
