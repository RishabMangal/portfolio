import React from "react";

function Educard({ title, year, from, description, location, i, slug }) {
  const color = i % 2 ? "rgb(5,5,5)" : "#151515";
//   const color = i % 2 ? "#00143d" : "#151515";
  return (
    // <div className="border bg-dark">
    //   <span
    //     className="p-3 mr-auto bg-warning"
    //     style={{
    //       display: "inline-block",
    //       width: "20%",
    //       verticalAlign: "top",
    //     }}
    //   >
    //     <p className="lead text-secondary text-center bg-dark">{year}</p>
    //     <p className="lead text-secondary text-center bg-dark">{title}</p>
    //   </span>
    //   <span
    //     className="p-3 px-5 mr-auto bg-success"
    //     style={{
    //       display: "inline-block",
    //       width: "40%",
    //       borderLeft: "1px solid gray",
    //     }}
    //   >
    //     <p className="lead text-left bg-primary">
    //       {from}
    //     </p>
    //     <p className="text-secondary text-left font-weight-light bg-info">
    //       {description}
    //           </p>
    //           <p className="lead text-left bg-danger">
    //               {location}
    //           </p>
    //   </span>
    // </div>
    <>
      <tr className="" style={{ backgroundColor: color }}>
        <th className="text-right">{year}</th>
        <th className="">
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
        <td className="text-right">{title}</td>
        <td className="text-cursive">{description}</td>
      </tr>
      <tr style={{ backgroundColor: color }}>
        <td>{}</td>
        <td className="lead ">{location}</td>
      </tr>
    </>
  );
}

export default Educard;
