import React from "react";
import Skill from "./Skill";
import node from "./logo/node.png";
import react from "./logo/react.jpg";
import redux from "./logo/redux.png";
import jquery from "./logo/jquery.png";
import html from "./logo/html.png";
import css from "./logo/css.png";
import js from "./logo/js.png";
import php from "./logo/php.png";
import mysql from "./logo/mysql.jpg";
import mongo from "./logo/mongo.jpg";
import bootstrap from "./logo/bootstrap.png";
import c from "./logo/c.png";
import cpp from "./logo/cpp.png";
import java from "./logo/java.png";
import python from "./logo/python.jpg";
import unity from "./logo/unity.jpg";
function Skills(props) {
  const atime = "8s";
  const afunc = "linear";
  const alife = "infinite";

  const animations = [
    `threeD1 ${atime} ${afunc} ${alife}`,
    `threeD2 ${atime} ${afunc} ${alife}`,
    `threeD3 ${atime} ${afunc} ${alife}`,
  ];

  const skills = [
    {
      name: "HTML",
      level: "Intermidiate",
      animation: `threeD1 ${atime} ${afunc} ${alife}`,
      skillimg: html,
    },
    {
      name: "CSS",
      level: "Intermidiate",
      animation: `threeD2 ${atime} ${afunc} ${alife}`,
      skillimg: css,
    },
    {
      name: "JavaScript",
      level: "Intermidiate",
      animation: `threeD3 ${atime} ${afunc} ${alife}`,
      skillimg: js,
    },
    {
      name: "NodeJs",
      level: "Intermidiate",
      animation: `threeD1 ${atime} ${afunc} ${alife}`,
      skillimg: node,
    },
    {
      name: "ReactJs",
      level: "Intermidiate",
      animation: `threeD2 ${atime} ${afunc} ${alife}`,
      skillimg: react,
    },
    {
      name: "ReduxJs",
      level: "Beginner",
      animation: `threeD3 ${atime} ${afunc} ${alife}`,
      skillimg: redux,
    },
    {
      name: "jQuery",
      level: "Beginner",
      animation: `threeD1 ${atime} ${afunc} ${alife}`,
      skillimg: jquery,
    },
    {
      name: "PHP",
      level: "Beginner",
      animation: `threeD2 ${atime} ${afunc} ${alife}`,
      skillimg: php,
    },
    {
      name: "mySQL",
      level: "Beginner",
      animation: `threeD3 ${atime} ${afunc} ${alife}`,
      skillimg: mysql,
    },
    {
      name: "MongoDB",
      level: "Intermidiate",
      animation: `threeD1 ${atime} ${afunc} ${alife}`,
      skillimg: mongo,
    },
    {
      name: "Bootstrap",
      level: "Intermidiate",
      animation: `threeD2 ${atime} ${afunc} ${alife}`,
      skillimg: bootstrap,
    },
    {
      name: "C",
      level: "Intermidiate",
      animation: `threeD3 ${atime} ${afunc} ${alife}`,
      skillimg: c,
    },
    {
      name: "C++",
      level: "Intermidiate",
      animation: `threeD1 ${atime} ${afunc} ${alife}`,
      skillimg: cpp,
    },
    {
      name: "Java",
      level: "Beginner",
      animation: `threeD2 ${atime} ${afunc} ${alife}`,
      skillimg: java,
    },
    {
      name: "Python",
      level: "Beginner",
      animation: `threeD3 ${atime} ${afunc} ${alife}`,
      skillimg: python,
    },
    {
      name: "Unity",
      level: "Beginner",
      animation: `threeD1 ${atime} ${afunc} ${alife}`,
      skillimg: unity,
    },
  ];
  return (
    <div className="text-center skills">
      <h2 className="display-4 skills-header">Skills</h2>
      <div className="row mx-0">
        {skills.map((d, i) => (
          <div className="col-sm-3 mr-0" key={i}>
            <Skill
              skillimg={d.skillimg}
              name={d.name}
              level={d.level}
              animation={animations[i % 3] || d.animation}
            ></Skill>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Skills;
