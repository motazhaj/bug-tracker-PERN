import { useState } from "react";
import DefaultContainer from "./components/layout/DefaultContainer";
import ListBugs from "./components/ListBugs";

function App() {
  const [newBugTitle, setNewBugTitle] = useState("");

  const onSubmitForm = async (e) => {
    e.preventDefault();
    const body = {
      title: newBugTitle,
      description: "",
    };
    try {
      await fetch("http://localhost:5000/newbug", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(body),
      }).then(setNewBugTitle(""));
    } catch (err) {
      console.error(err.message);
    }
  };

  return (
    <>
      <DefaultContainer>
        <h1 className="text-2xl font-bold text-center mt-12">My Bug Tracker</h1>

        <form className="flex h-12 rounded-xl overflow-hidden" onSubmit={onSubmitForm}>
          <input
            className="w-full h-full px-4 text-black"
            name="newbug"
            id="newbug"
            type="text"
            value={newBugTitle}
            onChange={(e) => setNewBugTitle(e.target.value)}
            placeholder="Add a new bug"
          />
          <button className="bg-[#F29F05] hover:bg-[#e6b968] w-32 h-full px-4" type="submit">
            Add Bug
          </button>
        </form>

        <ListBugs />
      </DefaultContainer>
    </>
  );
}

export default App;
