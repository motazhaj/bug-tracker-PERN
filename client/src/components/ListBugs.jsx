import React from "react";

const ListBugs = () => {
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
        <li className="flex w-full justify-between items-center bg-white/40 rounded-xl min-h-12 pl-4">
          <div className="flex gap-4 h-full w-full">
            <h2 className="w-2/3">Bug 1</h2>
            <p>4-7-2024</p>
          </div>
          <div className="w-1/3 text-end flex justify-end">
            <button className="text-[#fffbd6] hover:text-[#ffcd61] text-end font-bold w-32 h-full px-4">Edit</button>
            <button className="text-[#ffd6d6] hover:text-[#F23030] text-end font-bold w-32 h-full px-4">Delete</button>
          </div>
        </li>
        <li className="flex w-full justify-between items-center bg-white/40 rounded-xl min-h-12 pl-4">
          <div className="flex gap-4 h-full w-full">
            <h2 className="w-2/3">Bug 1</h2>
            <p>4-7-2024</p>
          </div>
          <div className="w-1/3 text-end flex justify-end">
            <button className="text-[#fffbd6] hover:text-[#ffcd61] text-end font-bold w-32 h-full px-4">Edit</button>
            <button className="text-[#ffd6d6] hover:text-[#F23030] text-end font-bold w-32 h-full px-4">Delete</button>
          </div>
        </li>
        <li className="flex w-full justify-between items-center bg-white/40 rounded-xl min-h-12 pl-4">
          <div className="flex gap-4 h-full w-full">
            <h2 className="w-2/3">Bug 1</h2>
            <p>4-7-2024</p>
          </div>
          <div className="w-1/3 text-end flex justify-end">
            <button className="text-[#fffbd6] hover:text-[#ffcd61] text-end font-bold w-32 h-full px-4">Edit</button>
            <button className="text-[#ffd6d6] hover:text-[#F23030] text-end font-bold w-32 h-full px-4">Delete</button>
          </div>
        </li>
      </ul>
    </div>
  );
};

export default ListBugs;
