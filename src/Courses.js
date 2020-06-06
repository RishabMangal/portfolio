import React from "react";
import Course from "./Course";
function Courses() {
  const courses = [
    {
      title: "Introducing Coding for Beginners an HTML and CSS Online Course",
      from: "BitDegree",
      duration: "May 2020-Jun 2020",
    },
    {
      title: "jQuery Fundamentals",
      from: "Pluralsight",
      duration: "May 2020-Jun 2020",
    },
    {
      title: "jQuery Forms and Bootstrap 3",
      from: "Pluralsight",
      duration: "May 2020-Jun 2020",
    },
    {
      title: "React Getting Started",
      from: "Pluralsight",
      duration: "May 2020-Jun 2020",
    },
    {
      title: "Client Side React Router 4",
      from: "Pluralsight",
      duration: "May 2020-Jun 2020",
    },
    {
      title: "Styling React Components",
      from: "Pluralsight",
      duration: "May 2020-Jun 2020",
    },
    {
      title: "Node.js-Getting Started",
      from: "Pluralsight",
      duration: "May 2020-Jun 2020",
    },
    {
      title: "Building Applications with React and Redux",
      from: "Pluralsight",
      duration: "May 2020-Jun 2020",
    },
    {
      title: "Building a Full Stack App with React and Express",
      from: "Pluralsight",
      duration: "May 2020-Jun 2020",
    },
    {
      title: "Building Real-time Apps with React,Socket.io and RethinkDb",
      from: "Pluralsight",
      duration: "May 2020-Jun 2020",
    },
    {
      title: "Securing React Apps with Auth0",
      from: "Pluralsight",
      duration: "May 2020-Jun 2020",
    },
    {
      title: "React Native -The Big Picture",
      from: "Pluralsight",
      duration: "May 2020-Jun 2020",
    },
    {
      title: "Python-The Big Picture",
      from: "Pluralsight",
      duration: "May 2020-Jun 2020",
    },

    {
      title: "Data Science-The Big Picture",
      from: "Pluralsight",
      duration: "May 2020-Jun 2020",
    },

    {
      title: "Understanding Machine Learning",
      from: "Pluralsight",
      duration: "May 2020-Jun 2020",
    },
    {
      title: "Excel 2019 Essentials",
      from: "Pluralsight",
      duration: "May 2020-Jun 2020",
    },
  ];
  return (
    <div className="courses">
      <h1 className="text-center display-4 my-3 p-3">Courses</h1>
      <table className="table table-striped table-hover text-center">
        <thead className="">
          <tr>
            <th>Sr. No</th>
            <th>Title</th>
            <th>From</th>
            <th>Completion</th>
            <th>Certificate</th>
          </tr>
        </thead>
        <tbody>
          {courses.map((c, i) => (
            <Course key={i} data={c} srno={i + 1}></Course>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Courses;
