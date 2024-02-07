import React, { useEffect, useState } from "react";
import TableModal from "./TableModal";
import { Helmet } from "react-helmet-async";
import { to } from "@react-spring/web";
import toast from "react-hot-toast";

export default function UserTable() {
  const [users, setUsers] = useState([]);
  const [toggle, setToggle] = useState(false);
  const [sort, setSort] = useState("");
  useEffect(() => {
    fetch("http://localhost:5000/allUsers")
      .then((res) => res.json())
      .then((data) => setUsers(data));
  }, [toggle]);
  // a function to sort by name of users
  const sortByName = () => {
    const sortedUsers = users.sort((a, b) => {
      if (a.userName > b.userName) {
        return 1;
      }
      if (a.userName < b.userName) {
        return -1;
      }
      return 0;
    });
    setUsers([...sortedUsers]);
  };
  // a function to sort by date of users
  const sortByDate = () => {
    const sortedUsers = users.sort((a, b) => {
      if (a.addedDate > b.addedDate) {
        return 1;
      }
      if (a.addedDate < b.addedDate) {
        return -1;
      }
      return 0;
    });
    setUsers([...sortedUsers]);
  };
  const goForSort = (e) => {
    if (e.target.value === "name") {
      sortByName();
    }
    if (e.target.value === "date") {
      sortByDate();
    }
  };
  //  change status using fetch patch method
  const changeStatus = (user) => {
    const status = !user.status;
    fetch(`http://localhost:5000/updateUser/${user._id}`, {
      method: "PATCH",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify({ status }),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.modifiedCount) {
          const newUsers = users.map((usr) => {
            if (usr._id === user._id) {
              usr.status = status;
            }
            return usr;
          });
          setUsers(newUsers);
          toast.success("Status Changed");
        }
      });
  };
  //   delete user using fetch delete method
  const deleteUser = (id) => {
    fetch(`http://localhost:5000/deleteUser/${id}`, {
      method: "DELETE",
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.deletedCount) {
          const remainingUsers = users.filter((user) => user._id !== id);
          setUsers(remainingUsers);
        }
      });
  };
  return (
    <div className="min-h-screen p-10">
      <Helmet>
        <title>USER TABLE | Home</title>
      </Helmet>
      <TableModal toggle={toggle} setToggle={setToggle} />
      <div className="overflow-x-auto">
        <table className="table table-zebra">
          {/* head */}
          <thead>
            <tr>
              <th>#</th>
              <th>User Name</th>
              <th>Email</th>
              <th>Added Date</th>
              <th>Status</th>
              <th className="flex gap-4">
                <select
                  onChange={goForSort}
                  className="select select-xs select-info "
                >
                  <option value={""}>Sort By</option>
                  <option value={"name"}>Sort By Name</option>
                  <option value={"date"}>Sort By Date</option>
                </select>
                Action
              </th>
            </tr>
          </thead>
          <tbody>
            {users.map((USR, index) => (
              <tr key={index}>
                <th>{index + 1}</th>
                <td>{USR.userName}</td>
                <td>{USR.email}</td>
                <td>{USR.addedDate}</td>
                <td>
                  <label className="cursor-pointer label">
                    <input
                      type="checkbox"
                      className="toggle toggle-accent"
                      checked={USR.status}
                      onChange={() => changeStatus(USR)}
                    />
                  </label>
                </td>
                <td className="flex gap-4">
                  <button
                    onClick={() => deleteUser(USR._id)}
                    className="btn btn-sm btn-outline btn-error"
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        <div className="flex justify-center my-4">
          {/* add button name ADD USER  center the button*/}
          <label htmlFor="my_modal_6" className="btn btn-accent">
            <span className="btn btn-accent">Add User</span>
          </label>
        </div>
      </div>
    </div>
  );
}
