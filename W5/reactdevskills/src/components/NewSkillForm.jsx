import "../components/NewSkillForm.css";

export default function NewSkillForm() {
  return (
    <>
      <form className="NewSkillForm">
        <label htmlFor="">Skill</label>
        <input type="text" />

        <label for="level">Level:</label>
        <select id="level" name="level">
          <option value="1">1</option>
          <option value="2">2</option>
          <option value="3">3</option>
          <option value="4">4</option>
          <option value="5">5</option>
        </select>

        <button type="button">ADD SKILL</button>
      </form>
    </>
  );
}
