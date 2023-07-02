import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./styles.css";

const skills = [
  {
    skill: "HTML+CSS",
    level: "advanced",
    color: "#2662EA",
  },
  {
    skill: "JavaScript",
    level: "advanced",
    color: "#EFD81D",
  },
  {
    skill: "React",
    level: "beginner",
    color: "#61DBFB",
  },
  {
    skill: "Python",
    level: "advanced",
    color: "#C3DCAF",
  },
  {
    skill: "Machine Learning",
    level: "advanced",
    color: "#E84F33",
  },
  {
    skill: "Deep Learning",
    level: "intermediate",
    color: "#60DAFB",
  },
  {
    skill: "Computer Vision",
    level: "intermediate",
    color: "#FF3B00",
  },
];

function App() {
  return (
    <div className="card">
      <Avatar />
      <div className="data">
        <Intro />
        <SkillList />
      </div>
    </div>
  );
}

function Avatar() {
  return <img className="avatar" src="photo.jpg" alt="Anubhav Goyal" />;
}

function Intro() {
  return (
    <div>
      <h1>Anubhav Goyal</h1>
      <p className="intro">
        I am a second-year student at IP University, specializing in AI and ML.
        Currently interning at Jio in the computer vision domain as well as
        striving to enhance my proficiency in web development.
      </p>
    </div>
  );
}

function SkillList() {
  return (
    <div className="skill-list">
      {skills.map((skill) => (
        <Skill skill={skill.skill} color={skill.color} level={skill.level} />
      ))}
    </div>
  );
}

function Skill({ skill, color, level }) {
  return (
    <div className="skill" style={{ backgroundColor: color }}>
      <span>{skill}</span>
      <span>
        {level === "beginner" && "👶"}
        {level === "intermediate" && "👍"}
        {level === "advanced" && "💪"}
      </span>
    </div>
  );
}

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(
  <StrictMode>
    <App />
  </StrictMode>
);
