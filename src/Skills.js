import React from 'react'
import Skill from './Skill'
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
import './resume.css'
function Skills(props) {
    return (
            <div className="card text-center my-5 p-0" id="skills">
                <h2
                    className="display-4 p-3 card text-light"
                    style={{
                        backgroundColor: "#182153",
                        borderBottom: "1px solid white",
                        margin: "0px"
                    }}
                >
                    Skills
                </h2>
                <div
                    className=""
                    style={{
                        margin: "0px",
                        backgroundColor: "rgb(41, 55, 122)",
                        padding:"0%"
                        // width: "100%"
                    }}
                >
                <Skill skillimg={html} name="HTML" level="Intermidiate" animation= "threeD1 5s linear infinite"></Skill>
                <Skill skillimg={css} name="CSS" level="Intermidiate" animation="threeD2 5s linear infinite"></Skill>
                <Skill skillimg={js} name="JavaScript" level="Intermidiate" animation="threeD3 5s linear infinite"></Skill>
                <Skill skillimg={node} name="NodeJS" level="Beginner" animation="threeD3 10s linear infinite"></Skill>
                <Skill skillimg={react} name="ReactJS" level="Intermidiate" animation="rotate 2.5s linear infinite"></Skill>
                <Skill skillimg={redux} name="ReduxJS" level="Beginner" animation="threeD1 5s linear infinite"></Skill>
                <Skill skillimg={jquery} name="jQueryJS" level="Beginner" animation="threeD1 5s linear infinite"></Skill>
                <Skill skillimg={php} name="Php" level="Beginner" animation="threeD2 5s linear infinite"></Skill>
                <Skill skillimg={mysql} name="MySQL" level="Beginner" animation="threeD3 5s linear infinite"></Skill>
                <Skill skillimg={mongo} name="MongoDB" level="Beginner" animation="threeD3 5s linear infinite"></Skill>
                <Skill skillimg={bootstrap} name="BootStrap" level="Intermidiate" animation="threeD2 5s linear infinite"></Skill>
                <Skill skillimg={c} name="C" level="Intermidiate" animation="threeD1 5s linear infinite"></Skill>
                <Skill skillimg={cpp} name="C++" level="Intermidiate" animation="threeD1 5s linear infinite"></Skill>
                <Skill skillimg={java} name="Java" level="Beginner" animation="threeD2 5s linear infinite"></Skill>
                <Skill skillimg={python} name="Python" level="Beginner" animation="threeD3 5s linear infinite"></Skill>
                <Skill skillimg={unity} name="Unity" level="Beginner" animation="threeD3 5s linear infinite"></Skill>
                </div>
            </div>
    )
}

export default Skills
