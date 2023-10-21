import AppBar from "./components/AppBar/AppBar";
import SearchBar from "./components/SearchBar/SearchBar";
import UserProfile from "./components/UserProfile/UserProfile";

function App() {
  return (
    <main>
      {/* Search GitHub username... Search Joined Repos
      Followers Following */}
      <div className="box-content min-h-screen flex flex-col px-6 py-8 max-w-[35.8125rem] mx-auto">
        <AppBar />
        <SearchBar />
        <UserProfile />
      </div>
    </main>
  );
}

export default App;
