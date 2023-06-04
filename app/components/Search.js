"use client";
import React, { useState } from "react";
import { BsSearch } from "react-icons/bs";
export default function Search() {
  const [query, setQuery] = useState("");
  return (
    <div>
      {/* Search Form */}
      <form>
        <div className="flex items-center bg-white opacity-85 py-2 px-4 rounded-full">
          <input
            type="text"
            placeholder="Search City...."
            className="ring-0 outline-0"
            maxLength={15}
            value={query}
            onChange={(e) => {
              setQuery(e.target.value);
            }}
          />
          <button className="bg-orange-600 p-2 rounded-full">
            <BsSearch />
          </button>
        </div>
        <br />
        {/* Search Results */}
        <div className="bg-gray-500 py-2 px-4 my-1 rounded-full cursor-pointer">
          <h1 className="text-white">London, UK</h1>
        </div>
        <div className="bg-gray-500 py-2 px-4 my-1 rounded-full cursor-pointer">
          <h1 className="text-white">London, UK</h1>
        </div>
      </form>
    </div>
  );
}
