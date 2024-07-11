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

  const updateBug = () => {
    const body = {
      title: bug.title,
      description: bug.description,
      resolved: bug.resolved,
    };

    try {
      fetch("http://localhost:5000/bugs/" + id, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(body),
      })
        .then((data) => {
          return data.json();
        })
        .then((data) => setBugs([...bugs.filter((bug) => bug.bug_id !== id), data]));
    } catch (err) {
      console.error(err.message);
    }
  };

  const deleteBug = (id) => {
    try {
      fetch("http://localhost:5000/bugs/" + id, {
        method: "DELETE",
      }).then(setBugs(bugs.filter((bug) => bug.bug_id !== id)));
    } catch (err) {
      console.error(err.message);
    }
  };

  return (
    <>
      <button className="w-10 hover:text-white" type="button" onClick={() => setShowBugDetails(true)}>
        <IoIosMore size={24} />
      </button>
      {showBugDetails ? (
        <>
          <div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none text-2xl">
            <div className="relative my-6 mx-auto w-[1280px] h-[1000px] bg-secondary/80 px-8 pt-4 rounded-md">
              <form className="border-0 rounded-lg h-full relative flex flex-col justify-between w-full  outline-none focus:outline-none">
                <div className="flex gap-10">
                  <button
                    className="text-red-500 hover:text-red-50 ml-auto font-bold uppercase"
                    type="button"
                    onClick={() => deleteBug(id)}
                  >
                    Delete
                  </button>
                  <button
                    className="text-2xl hover:text-white uppercase"
                    type="button"
                    onClick={() => setShowBugDetails(false)}
                  >
                    Close
                  </button>
                </div>
                <div className="text-start h-full pb-8 flex flex-col justify-between py-8">
                  <div className="flex flex-col gap-8">
                    <TextareaAutosize
                      type="text"
                      minRows={2}
                      maxRows={3}
                      value={bug.title}
                      onChange={(e) => {
                        setBug({ ...bug, title: e.target.value });
                      }}
                      className="block w-full bg-transparent border-none"
                    />
                    <TextareaAutosize
                      type="text"
                      minRows={2}
                      maxRows={18}
                      placeholder="Add description"
                      value={bug.description}
                      onChange={(e) => {
                        setBug({ ...bug, description: e.target.value });
                      }}
                      className="block w-full bg-transparent border-none"
                    />
                  </div>
                  <div className="ml-auto mt-4 flex gap-4 items-center pr-8">
                    <p>Status: </p>
                    <Resolved
                      resolved={bug.resolved}
                      onClick={(e) => {
                        e.preventDefault();
                        console.log(bug.resolved);
                        setBug({ ...bug, resolved: !bug.resolved });
                      }}
                    />
                  </div>
                </div>

                <div className="flex items-center justify-end p-6 border-t border-white/30 border-solid border-blueGray-200 rounded-b">
                  <button
                    className="text-2xl bg-primary text-secondary hover:bg-white font-bold uppercase px-3 py-1 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1"
                    type="button"
                    onClick={updateBug}
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
