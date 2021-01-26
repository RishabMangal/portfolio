import React from "react";

function Educard({ title, year, from, description, location, i, slug }) {
  const color = i % 2 ? "#f9f9f9" : "#ffffff";
  return (
    <>
      <tr style={{ backgroundColor: color, whiteSpace: "" }}>
        <th className="text-right border-right">{year}</th>
        <th>
          {from}
          <span className="certi-container">
            <a
              href={`https://rishus-apis.herokuapp.com/degree/${slug}`}
              className="certi-logo"
            >
              <i className="fas fa-award certi-logo"></i>
            </a>
          </span>
        </th>
      </tr>
      <tr style={{ backgroundColor: color }}>
        <td
          className="text-right border-right"
          style={{ whiteSpace: "nowrap" }}
        >
          {title}
        </td>
        <td className="text-cursive">{description}</td>
      </tr>
      <tr style={{ backgroundColor: color }}>
        <td className="border-right">{}</td>
        <td className="lead ">{location}</td>
      </tr>
    </>
  );
}

export default Educard;
