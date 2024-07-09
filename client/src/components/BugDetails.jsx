import React from "react";

export default function BugDetails() {
  const [showBugDetails, setShowBugDetails] = React.useState(false);
  return (
    <>
      <button className="w-20" type="button" onClick={() => setShowBugDetails(true)}>
        Open
      </button>
      {showBugDetails ? (
        <>
          <div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
            <div className="relative w-auto my-6 mx-auto max-w-4xl bg-white/10 px-8 pt-4 rounded-sm">
              <form className="border-0 rounded-lg shadow-lg relative flex flex-col w-full  outline-none focus:outline-none">
                <div className="text-start py-8 flex flex-col gap-4">
                  <input type="text" value={"Some Title"} className="block w-full bg-transparent border-none" />
                  <input type="text" value={"Some Description"} className="block w-full bg-transparent border-none" />
                  <button className="bg-green-400 text-black">Resolved</button>
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
