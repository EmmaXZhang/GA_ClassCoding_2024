import "./SkillListItem.css";

export default function SkillListItem({ skillName, skillLevel }) {
  return (
    <li className="SkillListItem">
      {skillName}
      <p className="level">LEVEL{skillLevel}</p>
    </li>
  );
}
