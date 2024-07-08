import React, { useEffect, useState } from "react";
import dayjs from "dayjs";

const ListBugs = () => {
  const [bugs, setBugs] = useState([]);
  console.log(bugs);

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
      <div className="flex w-full justify-between items-center min-h-12 pl-4">
        <div className="flex gap-4 h-full w-full">
          <h2 className="w-2/3">Name</h2>
          <p>Date</p>
        </div>
        <div className="w-1/3 text-end flex justify-end">
          <p className="w-32 h-full px-4">Edit</p>
          <p className="w-32 h-full px-4">Delete</p>
        </div>
      </div>
      <ul className="flex flex-col gap-2">
        {bugs.map((bug) => (
          <li className="flex w-full justify-between items-center bg-white/40 rounded-xl min-h-12 pl-4">
            <div className="flex gap-4 h-full w-full">
              <h2 className="w-2/3">{bug.title}</h2>
              <p className="text-sm">{dayjs(bug.creationdate).format("h:mm A DD/MM/YYYY")}</p>
            </div>
            <div className="w-1/3 text-end flex justify-end">
              <button className="text-[#fffbd6] hover:text-[#ffcd61] text-end font-bold w-32 h-full px-4">Edit</button>
              <button className="text-[#ffd6d6] hover:text-[#F23030] text-end font-bold w-32 h-full px-4">
                Delete
              </button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ListBugs;
