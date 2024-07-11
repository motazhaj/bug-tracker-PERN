import React from "react";

const DefaultContainer = ({ children }) => {
  return (
    <div className="text-primary text-lg max-w-screen-xl flex flex-col gap-8 p-4 mx-auto my-10 rounded-xl max-h-full bg-secondary drop-shadow-glow bg-[radial-gradient(169.40%_89.55%_at_94.76%_6.29%,rgba(0,0,0,0.40)_0%,rgba(255,255,255,0.00)_100%)]">
      {children}
    </div>
  );
};

export default DefaultContainer;
