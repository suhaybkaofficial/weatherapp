"use client";
import React, { useContext, useEffect, useState } from "react";
import { BsSearch } from "react-icons/bs";
import debounce from "lodash.debounce";
import axios from "axios";
import { AppContext } from "@/contexts/AppContext";
export default function Search() {
  const API_KEY = "8183066d205d417b8be190802230406";
  const [searchQuery, setSearchQuery] = useState("");
  const [searchResults, setSearchResults] = useState([]);
  const {
    selectedLocation,
    setSelectedLocation,
    searchedCity,
    setSearchedCity,
    setLoading,
  } = useContext(AppContext);
  // Debounce the search function to delay API requests
  const debouncedSearch = debounce(async (query) => {
    if (query) {
      try {
        const response = await axios.get(
          `https://api.weatherapi.com/v1/search.json?key=${API_KEY}&q=${query}`
        );
        setSearchResults(response.data);
      } catch (error) {
        console.error("Error fetching search results:", error);
      }
    } else {
      setSearchResults([]);
    }
  }, 300);

  const handleSearchInputChange = (event) => {
    const query = event.target.value;
    setSearchQuery(query);
    debouncedSearch(query);
  };
  // Shorten Results to only 2 results
  const mappedData = searchResults.slice(0, 2).map((item) => {
    return {
      id: item.id,
      name: item.name,
      region: item.region,
      country: item.country,
    };
  });

  const viewLocation = async (name) => {
    setSearchedCity(name);
    // Store Searched City To Local Storage
    let storeCity = localStorage.setItem("searchedCity", name);
    try {
      const response = await axios.get(
        `https://api.weatherapi.com/v1/forecast.json?key=${API_KEY}&q=${name}&days=4&aqi=no&alerts=no`
      );
      setSelectedLocation(response.data);
      setSearchQuery("");
      setLoading(false);
      setSearchResults([]);
      console.log(response.data);
    } catch (error) {
      console.error("Error fetching search results:", error);
    }
  };

  useEffect(() => {
    const searchSavedCityWeather = () => {
      if (searchedCity.length > 0) {
        viewLocation(searchedCity);
      } else {
        viewLocation("Istanbul");
      }
    };

    searchSavedCityWeather();

    return () => {};
  }, []);

  return (
    <div>
      {/* Search Form */}
      <form>
        <div className="flex items-center justify-between bg-white mb-3 opacity-85 py-2 px-4 rounded-full">
          <input
            type="text"
            placeholder="Search City...."
            className="ring-0 outline-0  flex-1"
            maxLength={15}
            value={searchQuery}
            onChange={handleSearchInputChange}
          />
          <button className="bg-orange-600 p-2 rounded-full">
            <BsSearch color="white" />
          </button>
        </div>
        {/* Search Results */}
        <div className="flex flex-col">
          {mappedData.map(({ name, country, id }) => {
            return (
              <button
                className="bg-white text-white bg-opacity-30 py-2 px-4 my-1 rounded-full"
                key={id}
                onClick={(e) => {
                  e.preventDefault();
                  viewLocation(name);
                }}
              >
                {name} , {country}
              </button>
            );
          })}
        </div>
      </form>
    </div>
  );
}
