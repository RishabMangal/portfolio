import React from "react";
import Educard from "./Educard";

function Education() {
  const educard = [
    {
      year: "2018-2022",
      title: "Bachelor's Degree",
      from: "Indian Institute of Information Technology Kota",
      description:"I am pursuing B.Tech from IIIT Kota.I am a Second Year Graduate.My stream is Computer Science Engineering.",
      location: "Jaipur | Rajasthan",
      slug:"btech"
    },
    {
      year: "2017-2018",
      title: "Joint Entrance Exam",
      from: "Meritto Institute Japiur",
      description: "I was preparing for Joint Entrance Exam Mains and Advance.",
      location: "Jaipur | Rajasthan",
      slug:"jee"
    },
    {
      year: "2015-2017",
      title: "High School",
      from: "Good Shephred Sr. Secondary School",
      description:
        "I Have completed my High School from RBSE with Maths and Science as my Primary Branch.",
      location: "Paota | Jaipur | Rajasthan",
      slug:"12th"
    },
    {
      year: "2002-2015",
      title: "Schooling",
      from: "Good Shephred Sr. Secondary School",
      description: "I Have completed my Schooling from RBSE.",
      location: "Paota | Jaipur | Rajasthan",
      slug:"10th"
    },
  ];
  return (
    <div>
      <div className="card text-center p-2 my-5" id="education">
        <h2 className="display-4 skills-header">Education</h2>
        <div className="">
          <table
            className="table text-left table-borderless"
            style={{ width: "70%", marginLeft: "auto", marginRight: "auto" }}
          >
            <tbody>
              {educard.map((e, i) => (
                <Educard
                  year={e.year}
                  title={e.title}
                  from={e.from}
                  description={e.description}
                  location={e.location}
                  key={i}
                  i={i}
                  slug={e.slug}
                ></Educard>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

export default Education;
