import React, { useEffect, useState } from "react";
import dayjs from "dayjs";
import BugDetails from "./BugDetails";
import Resolved from "./Resolved";
import { fetchAllBugsApi, resolveBugApi } from "../utilities/apis";

const ListBugs = ({ bugs, setBugs }) => {
  useEffect(() => {
    try {
      fetchAllBugsApi().then((data) => {
        setBugs(data);
      });
    } catch (err) {
      console.error(err);
    }
  }, []);

  const resolveBug = (id, resolved) => {
    try {
      const body = { resolved: !resolved };
      resolveBugApi(id, body).then((data) => setBugs([...bugs.filter((bug) => bug.bug_id !== id), data]));
    } catch (err) {
      console.error(err.message);
    }
  };

  const sortedBugs = bugs.sort((a, b) => (dayjs(a.creationdate).isAfter(b.creationdate) ? -1 : 1));

  return (
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

      {sortedBugs.map((bug) => (
        <tbody key={bug.bug_id} className="border-y border-dashed border-primary/30">
          <tr>
            <td className="max-w-[300px] truncate">{bug.bug_id + ": " + bug.title}</td>
            <td>{dayjs(bug.creationdate).format("h:mm A - DD MMM YYYY")}</td>
            <td>
              <Resolved
                resolved={bug.resolved}
                onClick={() => resolveBug(bug.bug_id, bug.resolved)}
                setBugs={setBugs}
              />
            </td>
            <td>{bug.updatedate ? dayjs(bug.updatedate).format("h:mm A - DD MMM YYYY") : "N/A"}</td>
            <td className="text-end">
              <BugDetails id={bug.bug_id} bugs={bugs} setBugs={setBugs} />
            </td>
          </tr>
        </tbody>
      ))}
    </table>
  );
};

export default ListBugs;
