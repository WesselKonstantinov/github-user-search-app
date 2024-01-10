import SearchBar from "../SearchBar/SearchBar";
import UserProfile from "../UserProfile/UserProfile";
import { useState } from "react";

function AppMain({ title }) {
  const [username, setUsername] = useState("octocat");

  return (
    <main className="mt-9">
      <h1 className="sr-only">{title}</h1>
      <SearchBar username={username} setUsername={setUsername} />
      <UserProfile username={username} />
    </main>
  );
}

export default AppMain;
