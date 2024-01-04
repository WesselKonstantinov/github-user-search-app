import AppHeader from "./components/AppHeader/AppHeader";
import SearchBar from "./components/SearchBar/SearchBar";
import UserProfile from "./components/UserProfile/UserProfile";
import { useState } from "react";

function App() {
  const [username, setUsername] = useState("octocat");

  return (
    <div className="box-content min-h-screen flex flex-col gap-9 px-6 py-8 max-w-[35.8125rem] lg:max-w-[45.625rem] mx-auto">
      <AppHeader />
      <main>
        <h1 className="sr-only">GitHub user search app</h1>
        <SearchBar setUsername={setUsername} />
        <UserProfile username={username} />
      </main>
    </div>
  );
}

export default App;
