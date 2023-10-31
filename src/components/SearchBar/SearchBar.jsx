import { useState } from "react";

function SearchBar({ setUsername }) {
  const [query, setQuery] = useState("");

  const handleChange = (e) => setQuery(e.target.value);

  const handleSubmit = (e) => {
    e.preventDefault();
    setUsername(query);
    setQuery("");
  };

  return (
    <form
      className="flex flex-wrap gap-2 pt-[0.40625rem] px-[0.4375rem] pb-[0.46875rem] bg-white dark:bg-fainting-light rounded-2xl shadow-[0_1rem_1.875rem_-0.625rem_rgba(70,96,187,0.2)] dark:shadow-none"
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
        className="basis-0 grow-[999] min-w-[70%] py-2 pl-9.5 placeholder:text-san-marino placeholder:dark:text-white leading-loose bg-transparent bg-[url('/images/icon-search.svg')] bg-no-repeat bg-[left_0.5625rem_top_50%] bg-[length:1.25rem_1.25rem]"
        onChange={handleChange}
      />
      <button className="grow basis-23 py-3 pr-3.5 pl-4.5 text-xs font-bold text-white bg-blue rounded-lg">
        Search
      </button>
    </form>
  );
}

export default SearchBar;
