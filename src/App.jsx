import { SWRConfig } from "swr";
import AppHeader from "./components/AppHeader/AppHeader";
import SearchBar from "./components/SearchBar/SearchBar";
import UserProfile from "./components/UserProfile/UserProfile";

function App() {
  return (
    <div className="box-content min-h-screen flex flex-col gap-9 px-6 py-8 max-w-[35.8125rem] mx-auto">
      <AppHeader />
      <main>
        <h1 className="sr-only">GitHub user search app</h1>
        <SWRConfig
          value={{
            fetcher: (...args) => fetch(...args).then((res) => res.json()),
          }}
        >
          <SearchBar />
          <UserProfile />
        </SWRConfig>
      </main>
    </div>
  );
}

export default App;
