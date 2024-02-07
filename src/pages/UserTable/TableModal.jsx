import { to } from "@react-spring/web";
import React, { useRef, useState } from "react";
import { set } from "react-hook-form";
import toast from "react-hot-toast";
import { FaWindowClose } from "react-icons/fa";

export default function TableModal({ toggle, setToggle }) {
  const [userName, setUserName] = useState("");
  const [email, setEmail] = useState("");
  const [addedDate, setAddedDate] = useState("");
  const [status, setStatus] = useState(false);
  const formRef = useRef(null);
  const modalRef = useRef(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    const user = { userName, email, addedDate, status };
    setUserName("");
    setEmail("");
    setAddedDate("");
    setStatus(false);

    formRef.current.reset();
    // set user to database using fetch post method
    fetch("http://localhost:5000/addUser", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(user),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.insertedId) {
          toast.success("User Added");
          setToggle(!toggle);
        }
      });
  };

  return (
    <div>
      <input
        ref={modalRef}
        type="checkbox"
        id="my_modal_6"
        className="modal-toggle"
      />
      <div className="modal" role="dialog">
        <div className="modal-box">
          <div className="modal-action flex text-2xl justify-between">
            ADD USER
            <label htmlFor="my_modal_6" className="btn">
              <FaWindowClose />
            </label>
          </div>

          <form ref={formRef} onSubmit={handleSubmit} className="p-4">
            <div className="mb-4">
              <label htmlFor="userName" className="block mb-2">
                User Name
              </label>
              <input
              name="userName"
              type="text"
                required
                onChange={(e) => setUserName(e.target.value)}
                id="userName"
                placeholder="Enter User Name"
                className="w-full border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                defaultValue={userName}
              />
            </div>
            <div className="mb-4">
              <label htmlFor="email" className="block mb-2">
                Email
              </label>
              <input
              name="email"
              type="email"
                required
                onChange={(e) => setEmail(e.target.value)}
                id="email"
                placeholder="Enter Email"
                className="w-full border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                defaultValue={email}
              />
            </div>
            <div className="mb-4">
              <label htmlFor="addedDate" className="block mb-2">
                Added Date
              </label>
              <input
                required
                onChange={(e) => setAddedDate(e.target.value)}
                id="addedDate"
                type="date"
                name="addedDate"
                placeholder="Enter Added Date"
                className="w-full border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                defaultValue={addedDate}
              />
            </div>
            <div className="mb-4">
              <label htmlFor="status" className="block mb-2">
                Status
              </label>
              <div className="form-control w-52">
                <label className="cursor-pointer label">
                  <span className="label-text">
                    {status ? "TRUE" : "FALSE"}
                  </span>
                  <input
                  required
                    name="status"
                    type="checkbox"
                    className="toggle toggle-accent"
                    defaultValue={status}
                    onChange={(e) => setStatus(e.target.checked)}
                  />
                </label>
              </div>
            </div>

            <label htmlFor="my_modal_6">
              <button className="btn btn-accent" type="submit">
                Submit
              </button>
            </label>
          </form>
        </div>
      </div>
    </div>
  );
}
