import SkillListItem from "../components/SkillListItem";

export default function SkillList({ skills }) {
  const skillItem = skills.map((skill) => {
    return (
      <SkillListItem
        key={skill}
        skillName={skill.name}
        skillLevel={skill.level}
      />
    );
  });

  return <ul className="padding-0 ">{skillItem}</ul>;
}
