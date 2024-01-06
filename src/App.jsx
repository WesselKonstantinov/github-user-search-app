import AppHeader from "./components/AppHeader/AppHeader";
import Center from "./components/Center/Center";
import Cover from "./components/Cover/Cover";
import SearchBar from "./components/SearchBar/SearchBar";
import UserProfile from "./components/UserProfile/UserProfile";
import { useState } from "react";

function App() {
  const [username, setUsername] = useState("octocat");

  return (
    <Cover>
      <Center>
        <AppHeader />
        <main className="mt-9">
          <h1 className="sr-only">GitHub user search app</h1>
          <SearchBar username={username} setUsername={setUsername} />
          <UserProfile username={username} />
        </main>
      </Center>
    </Cover>
  );
}

export default App;
