import React, { useEffect, useState } from "react";
import dayjs from "dayjs";

const ListBugs = () => {
  const [bugs, setBugs] = useState([]);

  useEffect(() => {
    try {
      fetch("http://localhost:5000/bugs")
        .then((data) => data.json())
        .then((data) => {
          setBugs(data);
        });
    } catch (err) {
      console.error(err);
    }
  }, []);

  return (
    <div>
      <table className="w-full text-start">
        <thead>
          <tr>
            <th className="text-start">Name</th>
            <th className="text-start">Date</th>
            <th className="text-start">Edit</th>
            <th className="text-start">Delete</th>
          </tr>
        </thead>

        {bugs.map((bug) => (
          <tbody key={bug.bug_id}>
            <tr className="bg-white/30 border-y border-white/30">
              <td>{bug.title}</td>
              <td>{dayjs(bug.creationdate).format("h:mm A - DD MMM YYYY")}</td>
              <td className="text-[#f2f2f2] hover:text-[#fff1c2] cursor-pointer">Edit</td>
              <td className="text-[#f2f2f2] hover:text-[#ffa6a6] cursor-pointer">Delete</td>
            </tr>
          </tbody>
        ))}
      </table>
    </div>
  );
};

export default ListBugs;
