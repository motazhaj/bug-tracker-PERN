import React from "react";

const DefaultContainer = ({ children }) => {
  return <div className="max-w-screen-xl flex flex-col gap-8 p-4 mx-auto border-x border-b rounded-b-xl ">{children}</div>;
};

export default DefaultContainer;
