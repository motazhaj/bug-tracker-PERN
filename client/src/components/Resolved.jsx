import React from "react";

const Resolved = ({ resolved }) => {
  return (
    <button className={`${resolved ? "bg-green-400 text-black" : "bg-red-400"} px-2 rounded-sm`}>
      {resolved ? "Resolved" : "Not Resolved"}
    </button>
  );
};

export default Resolved;
