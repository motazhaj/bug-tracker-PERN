import { useState } from "react";
import DefaultContainer from "./components/layout/DefaultContainer";
import ListBugs from "./components/ListBugs";
import { addNewBugApi } from "./utilities/apis";

function App() {
  const [newBugTitle, setNewBugTitle] = useState("");
  const [bugs, setBugs] = useState([]);

  const onSubmitForm = (e) => {
    e.preventDefault();
    if (newBugTitle) {
      const body = {
        title: newBugTitle,
        description: "",
      };
      try {
        addNewBugApi(body).then((data) => {
          setNewBugTitle("");
          setBugs([...bugs, data]);
        });
      } catch (err) {
        console.error(err.message);
      }
    }
  };

  return (
    <>
      <DefaultContainer>
        <h1 className="text-3xl font-bold text-center mt-4">======== My Bug Tracker ========</h1>

        <form className="flex h-6 rounded-sm overflow-hidden" onSubmit={onSubmitForm}>
          <input
            className="w-full h-full px-4 bg-primary/50 drop-shadow-glow text-secondary placeholder:text-secondary"
            name="newbug"
            id="newbug"
            type="text"
            value={newBugTitle}
            onChange={(e) => setNewBugTitle(e.target.value)}
            required
            placeholder="Add a new bug"
          />
          <button className="bg-primary hover:bg-primary/40 text-secondary w-32 h-full px-4" type="submit">
            Add Bug
          </button>
        </form>
        <div className="max-h-[80svh] overflow-y-scroll">
          <ListBugs bugs={bugs} setBugs={setBugs} />
        </div>
      </DefaultContainer>
    </>
  );
}

export default App;
