import React from "react";

const Resolved = ({ resolved, onClick }) => {
  return (
    <button
      onClick={onClick}
      className={`${resolved ? "bg-green-400 text-black" : "bg-red-400"} px-2 rounded-sm w-32 py-2`}
    >
      {resolved ? "Resolved" : "Not Resolved"}
    </button>
  );
};

export default Resolved;
