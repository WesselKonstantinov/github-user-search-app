import { useState } from "react";
import useUser from "../../hooks/useUser";

function SearchBar({ setUsername, username }) {
  const [query, setQuery] = useState("");
  const { isLoading, error } = useUser(username);

  const notFound = error?.status === 404;

  const handleChange = (e) => setQuery(e.target.value);

  const handleSubmit = (e) => {
    e.preventDefault();
    setUsername(query);
    setQuery("");
  };

  return (
    <form
      className="flex flex-wrap gap-2 relative pt-[0.40625rem] px-[0.4375rem] pb-[0.46875rem] md:py-[0.59375rem] md:px-2.5 bg-white dark:bg-fainting-light rounded-2xl shadow-[0_1rem_1.875rem_-0.625rem_rgba(70,96,187,0.2)] dark:shadow-none"
      onSubmit={handleSubmit}
    >
      <label htmlFor="search" className="sr-only">
        Search GitHub username:
      </label>
      <input
        type="text"
        id="search"
        name="query"
        value={query}
        placeholder="Search GitHub username..."
        className="basis-0 grow-[999] min-w-[70%] py-2 pl-9.5 md:pl-[4.375rem] rounded-lg placeholder:text-san-marino placeholder:dark:text-white leading-loose md:leading-snug bg-transparent bg-[url('/images/icon-search.svg')] bg-no-repeat bg-[left_0.5625rem_top_50%] md:bg-[left_1.375rem_top_50%] bg-[length:1.25rem_1.25rem] md:bg-[length:1.5rem_1.5rem] md:text-lg focus-visible:outline focus-visible:outline-hei-se-black focus-visible:outline-2 dark:focus-visible:outline-white"
        onChange={handleChange}
      />
      <button className="grow basis-24 py-3 pr-3.5 pl-4.5 md:px-6 text-xs md:text-base font-bold text-white bg-blue hover:bg-abi-blue rounded-lg transition-colors focus-visible:outline focus-visible:outline-hei-se-black focus-visible:outline-2 focus-visible:outline-offset-2 dark:focus-visible:outline-white">
        Search
      </button>
      <div
        aria-live="polite"
        aria-atomic="true"
        className="absolute left-0 -top-6 lg:top-[1.39rem] lg:left-[31rem]"
      >
        {isLoading && <p>Loading...</p>}
        {notFound && (
          <p className="text-tart-orange font-bold text-sm">No results</p>
        )}
      </div>
    </form>
  );
}

export default SearchBar;
