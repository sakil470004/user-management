import React, { useEffect, useState } from "react";
import SectionTittle from "../Shared/SectionTittle";
import InstructorCard from "../Shared/InstructorCard";
import { Helmet } from "react-helmet-async";
import { useNavigate } from "react-router-dom";

const Instructors = () => {
  const [instructors, setInstructors] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    fetch("http://localhost:5000/instructors")
      .then((res) => res.json())
      .then((data) => setInstructors(data));
  }, []);

  return (
    <div className="my-10">
      <Helmet>
        <title>Fighting Spirit | Instructor</title>
      </Helmet>
      <SectionTittle
        heading={"Trainers"}
        subHeading={"Trainer We Have"}
      ></SectionTittle>
      <div className="grid md:grid-cols-3 gap-6">
        {instructors.map((instructor) => (
          <InstructorCard
        
            key={instructor._id}
            instructor={instructor}
          ></InstructorCard>
        ))}
      </div>
    </div>
  );
};

export default Instructors;
