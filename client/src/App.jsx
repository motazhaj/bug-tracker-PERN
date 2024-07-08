import DefaultContainer from "./components/layout/DefaultContainer";

function App() {
  return (
    <>
      <DefaultContainer>
        <h1 className="text-2xl font-bold text-center mt-12">My Bug Tracker</h1>

        <form className="flex h-12 rounded-xl overflow-hidden">
          <input
            className="w-full h-full px-4 text-black"
            name="newbug"
            id="newbug"
            type="text"
            placeholder="Add a new bug"
          />
          <button className="bg-[#F29F05] hover:bg-[#e6b968] w-32 h-full px-4" type="submit">
            Add Bug
          </button>
        </form>
      </DefaultContainer>
    </>
  );
}

export default App;
