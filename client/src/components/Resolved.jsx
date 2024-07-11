import React from "react";

const Resolved = ({ resolved, onClick }) => {
  return (
    <button
      onClick={onClick}
      className={`${resolved ? "bg-primary text-secondary hover:bg-white" : "hover:text-white"} px-2 rounded-sm w-32 py-1 font-bold`}
    >
      {resolved ? "Resolved" : "Not Resolved"}
    </button>
  );
};

export default Resolved;
