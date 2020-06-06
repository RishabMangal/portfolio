import React from "react";

function Course(props) {
  const { title, from, duration } = props.data;
  return (
    <>
      <tr>
        <td>{props.srno}</td>
        <td style={{ fontFamily: "cursive", textAlign: "left" }} className="">
          {title}
        </td>
        <td style={{ fontFamily: "cursive" }}>{from}</td>
        <td style={{ fontFamily: "cursive" }}>{duration}</td>
        <td>
          <a
            href={`https://rishus-apis.herokuapp.com/certi/${title}`}
            target="blank"
          >
            <button className="btn btn-primary">View</button>
          </a>
        </td>
      </tr>
    </>
  );
}

export default Course;
