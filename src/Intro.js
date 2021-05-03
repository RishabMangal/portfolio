import React from "react";
function Intro(props) {
  return (
    <div
      className="p-2 mx-auto text-secondary info"
      style={{ textAlign: "center", maxWidth: "1200px" }}
    >
      <p className="m-3 intro">Hello! I'm Rishab</p>
      <div className="lead text-secondary discription">
        I am pursuing B.Tech in Computer Science Engineering at{" "}
        <span className="font-weight-bold" style={{ whiteSpace: "normal" }}>
          {" "}
          Indian Institute of Information Technology Kota.
        </span>
        <p>
          I will be in my final year of graduation in next few months. I love to
          develop Web Apps and Mobile Apps.
        </p>
        <p>
          I have developed many websites and been an intern at two startups as
          web developer.
        </p>
        <p>
          I really enjoy being an Software Engineer.I would love to be a part of
          company as a Software Engineer.
        </p>
      </div>
    </div>
  );
}

export default Intro;
