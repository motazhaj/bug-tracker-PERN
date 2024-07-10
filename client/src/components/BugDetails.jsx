import React, { useEffect, useState } from "react";
import TextareaAutosize from "react-textarea-autosize";
import { IoIosMore } from "react-icons/io";
import { FaRegTrashAlt } from "react-icons/fa";
import Resolved from "./Resolved";

export default function BugDetails({ id, bugs, setBugs }) {
  const [showBugDetails, setShowBugDetails] = React.useState(false);
  const [bug, setBug] = useState({});

  useEffect(() => {
    try {
      fetch("http://localhost:5000/bugs/" + id)
        .then((data) => data.json())
        .then((data) => {
          setBug(data);
        });
    } catch (err) {
      console.error(err);
    }
  }, []);

  const deleteBug = (id) => {
    try {
      fetch("http://localhost:5000/bugs/" + id, {
        method: "DELETE",
      });

      setBugs(bugs.filter((bug) => bug.bug_id !== id));
    } catch (err) {
      console.error(err.message);
    }
  };

  return (
    <>
      <button className="w-10 hover:scale-125 duration-200" type="button" onClick={() => setShowBugDetails(true)}>
        <IoIosMore size={24} />
      </button>
      {showBugDetails ? (
        <>
          <div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
            <div className="relative my-6 mx-auto w-[1280px] h-[600px] bg-white/10 px-8 pt-4 rounded-md">
              <form className="border-0 rounded-lg h-full relative flex flex-col justify-between w-full  outline-none focus:outline-none">
                <button className="hover:scale-125 duration-200 ml-auto" type="button" onClick={() => deleteBug(id)}>
                  <FaRegTrashAlt size={24} />
                </button>
                <div className="text-start h-full pb-8 flex flex-col justify-between py-8">
                  <TextareaAutosize
                    type="text"
                    minRows={2}
                    value={bug.title}
                    className="block w-full bg-transparent border-none"
                  />
                  <TextareaAutosize
                    type="text"
                    minRows={2}
                    placeholder="Add description"
                    value={bug.description}
                    className="block w-full bg-transparent border-none"
                  />
                  <Resolved
                    resolved={bug.resolved}
                    onClick={(e) => {
                      e.preventDefault();
                      setBug({ ...bug, resolved: !bug.resolved });
                    }}
                  />
                </div>

                <div className="flex items-center justify-end p-6 border-t border-white/30 border-solid border-blueGray-200 rounded-b">
                  <button
                    className="text-red-500 background-transparent font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                    type="button"
                    onClick={() => setShowBugDetails(false)}
                  >
                    Close
                  </button>
                  <button
                    className="bg-emerald-500 text-white active:bg-emerald-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                    type="button"
                    onClick={() => setShowBugDetails(false)}
                  >
                    Save Changes
                  </button>
                </div>
              </form>
            </div>
          </div>
          <div className="fixed inset-0 z-40 bg-black/25 backdrop-blur-lg" />
        </>
      ) : null}
    </>
  );
}
