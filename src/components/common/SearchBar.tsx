import { BiSearch } from "react-icons/bi";

export default function SearchBar() {
    return ( <div
    role="searchbox"
        className={` sm:ml-0 flex  w-[120px] bg-stone-900 text-sm text-white three:w-[200px] tablet:w-[300px] tablet:text-lg
            flex-row-reverse tems-center rounded-xl px-3 py-1 mr-4`}
      >
        <label htmlFor="s1" className="cursor-pointer">
          <BiSearch className="mt-1 text-sm tablet:text-xl" />
        </label>
        <input
          role="search"
          className="sm:w-full w-full bg-transparent px-2 text-[0.9em] outline-none"
          type="text"
          placeholder="Search "
        />
      </div>);
};