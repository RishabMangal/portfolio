import React from "react";

function Card(props) {
  return (
    <div
      style={{
        backgroundImage: `url(${props.cover})`,
        backgroundPosition: "center",
        backgroundAttachment: "fixed",
        backgroundSize: "cover",
        display: "flex",
        position: "relative",
        minHeight: "700px",
      }}
    >
      <div className="row card-container">
        <div
          className="picture-card col-sm-6"
          style={{
            backgroundImage: `url(${props.profilePics})`,
          }}
        ></div>
        <div className="card col-sm-6 main-card-body ">
          <ul className="">
            <li className="text-dark text-center lead font-weight-bold">
              Rishab Mangal
            </li>
            <li className="text-secondary font-weight-bold text-center">
              Software Engineer
            </li>
            <li className="text-dark">Phone:</li>
            <li className="text-secondary" style={{ paddingTop: "0px" }}>
              9928799243
            </li>
            <li className="text-dark">Email:</li>
            <li className="text-secondary">rishabhmangal1@gmail.com</li>
            <li className="text-dark">Address:</li>
            <li className="text-secondary"> Japiur | Rajasthan | India</li>
            <li className="text-dark">Birthday:</li>
            <li className="text-secondary">20th Oct 1999</li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Card;
