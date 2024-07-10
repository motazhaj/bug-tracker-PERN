import React, { useEffect, useState } from "react";
import dayjs from "dayjs";
import BugDetails from "./BugDetails";
import Resolved from "./Resolved";

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
  }, [bugs]);

  return (
    <div>
      <table className="w-full text-start">
        <thead>
          <tr>
            <th className="text-start">Name</th>
            <th className="text-start">Date</th>
            <th className="text-start">Status</th>
            <th className="text-start">Activity</th>
            <th className="text-end">Actions</th>
          </tr>
        </thead>

        {bugs.map((bug) => (
          <tbody key={bug.bug_id} className="border-y border-white/30">
            <tr>
              <td className="max-w-[300px] truncate">{bug.title}</td>
              <td>{dayjs(bug.creationdate).format("h:mm A - DD MMM YYYY")}</td>
              <td>
                <Resolved resolved={bug.resolved} setBugs={setBugs} />
              </td>
              <td>{bug.updatedate ? dayjs(bug.updatedate).format("h:mm A - DD MMM YYYY") : "N/A"}</td>
              <td className="text-end">
                <BugDetails id={bug.bug_id} bug={bug} setBugs={setBugs} />
              </td>
            </tr>
          </tbody>
        ))}
      </table>
    </div>
  );
};

export default ListBugs;
