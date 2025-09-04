"use client"
import './searchForm.scss'
import { MagnifyingGlass } from "@phosphor-icons/react/dist/ssr";
const SearchForm = () => {
  return (
    <div className="searchComponent">
        <button className="searchComponent__iconbtn">
            <MagnifyingGlass size={32} />
     
        </button>
      {/* <input
        type="text"
        placeholder="Search..."
        className="border rounded-lg px-3 py-2 w-full"
      /> */}


    </div>
  );
};

export default SearchForm;
