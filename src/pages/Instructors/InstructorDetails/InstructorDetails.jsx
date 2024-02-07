import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

export default function InstructorDetails() {
  const { instructorId } = useParams();
  //   console.log(instructorId)
  const [instructor, setInstructor] = useState({});
  useEffect(() => {
    fetch(`http://localhost:5000/instructor/${instructorId}`)
      .then((res) => res.json())
      .then((data) => setInstructor(data));
  }, []);
//   const img =
//     "https://images.unsplash.com/photo-1529891858519-f18aa4f6a3b0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=686&q=80";
  // const instructor = {
  //     name: "KHAN",
  //     img: img,
  //     email:'mynul.sakil@gmail.com',
  //     description:
  //       "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed aut quos, necessitatibus obcaecati illum vitae minus aperiam odio cumque amet.",
  //       contribution:['Get Nobel Prize on boost','Get National Award'],
  //       verification:'VERIFIED',
  //   };
  return (
    <div className="hero min-h-screen ">
      <div className="hero-content flex-col lg:flex-row">
        <img src={instructor?.img} className="max-w-sm rounded-lg shadow-2xl" />
        <div>
          <h1 className="text-5xl font-bold">{instructor?.name}</h1>
          <p className="py-6">{instructor?.description}</p>
          <h3 className="font-bold text-xl mb-4">CONTACT</h3>
          <p className="">EMAIL : {instructor?.email}</p>

          <h3 className="font-bold text-xl my-4">CONTRIBUTION</h3>
          <ul className="list-disc ml-4">
            {instructor?.contribution?.map((ICON) => (
              <li key={ICON}>{ICON}</li>
            ))}
          </ul>
          <h3 className="font-bold text-lg my-4 text-green-400">
            VERIFICATION STATUS : {instructor?.verification}
          </h3>
        </div>
      </div>
    </div>
  );
}
