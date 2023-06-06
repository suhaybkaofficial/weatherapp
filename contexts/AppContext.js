"use client";
import React, { createContext, useEffect, useState } from "react";

export const AppContext = createContext();

export const AppContextProvider = ({ children }) => {
  const [selectedLocation, setSelectedLocation] = useState([]);
  const [searchedCity,setSearchedCity] = useState("");
  const [loading,setLoading] = useState(true)

  //   Check if User ALready Searched A City
  const checkIfUserSearchedCity = async () => {
    try {
      const value = await localStorage.getItem("searchedCity");
      if (value) {
        setSearchedCity(value)
      }
    } catch (e){
        console.log(e);
    }
  };
  useEffect(()=>{
    checkIfUserSearchedCity()
  },[])
  return (
    <AppContext.Provider
      value={{
        selectedLocation,
        setSelectedLocation,
        searchedCity,
        setSearchedCity,
        setLoading,
        loading
      }}
    >
      {children}
    </AppContext.Provider>
  );
};
