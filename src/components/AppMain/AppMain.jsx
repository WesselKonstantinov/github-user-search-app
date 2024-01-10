import SearchBar from "../SearchBar/SearchBar";
import UserProfile from "../UserProfile/UserProfile";
import { useState } from "react";

function AppMain({ title }) {
  const [username, setUsername] = useState("octocat");

  return (
    <main className="mt-9 flex flex-col gap-4 md:gap-6">
      <h1 className="sr-only">{title}</h1>
      <SearchBar username={username} setUsername={setUsername} />
      <UserProfile username={username} />
    </main>
  );
}

export default AppMain;
