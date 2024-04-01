import "./NewSkillForm.css";
import { useState } from "react";

export default function NewSkillForm({ addToSkills }) {
  const [formData, setFormData] = useState({
    name: "",
    level: 3,
  });

  function handleSubmit(event) {
    event.preventDefault();
    addToSkills(formData);
    setFormData({
      level: 3,
      name: "",
    });
  }

  function handleChange(event) {
    const newFormData = {
      ...formData,
      [event.target.name]: event.target.value,
    };
    setFormData(newFormData);
  }

  return (
    <>
      <form className="NewSkillForm" onSubmit={handleSubmit}>
        <label htmlFor="">Skill</label>
        <input
          type="text"
          name="name"
          value={formData.name}
          onChange={handleChange}
        />

        <label for="level">Level:</label>
        <select
          id="level"
          name="level"
          value={formData.level}
          onChange={handleChange}
        >
          <option value={1}>1</option>
          <option value={2}>2</option>
          <option value={3}>3</option>
          <option value={4}>4</option>
          <option value={5}>5</option>
        </select>

        <button type="submit">ADD SKILL</button>
      </form>
    </>
  );
}
