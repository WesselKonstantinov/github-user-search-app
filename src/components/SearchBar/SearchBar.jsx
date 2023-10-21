function SearchBar() {
  return (
    <form className="flex flex-wrap gap-2 pt-[0.40625rem] px-[0.4375rem] pb-[0.46875rem] mt-9 bg-white rounded-2xl shadow-[0_1rem_1.875rem_-0.625rem_rgba(70,96,187,0.2)]">
      <label htmlFor="search" className="sr-only">
        Search GitHub username:
      </label>
      <input
        type="text"
        id="search"
        placeholder="Search GitHub username..."
        className="basis-0 grow-[999] min-w-[70%] py-2 pl-9.5 placeholder:text-san-marino leading-loose bg-[url('/images/icon-search.svg')] bg-no-repeat bg-[left_0.5625rem_top_50%] bg-[length:1.25rem_1.25rem]"
      />
      <button className="grow basis-23 py-3 pr-3.5 pl-4.5 text-xs font-bold text-white bg-blue rounded-lg">
        Search
      </button>
    </form>
  );
}

export default SearchBar;
