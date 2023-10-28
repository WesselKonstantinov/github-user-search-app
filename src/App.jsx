import useSWR from "swr";
import AppHeader from "./components/AppHeader/AppHeader";
import SearchBar from "./components/SearchBar/SearchBar";
import UserProfile from "./components/UserProfile/UserProfile";

const fetcher = (...args) => fetch(...args).then((res) => res.json());

function App() {
  const { data: user, isLoading } = useSWR(
    "https://api.github.com/users/octocat",
    fetcher
  );

  return (
    <div className="box-content min-h-screen flex flex-col gap-9 px-6 py-8 max-w-[35.8125rem] mx-auto">
      <AppHeader />
      <main>
        <h1 className="sr-only">GitHub user search app</h1>
        <SearchBar />
        {isLoading && <p>Loading...</p>}
        {user && <UserProfile user={user} />}
      </main>
    </div>
  );
}

export default App;
