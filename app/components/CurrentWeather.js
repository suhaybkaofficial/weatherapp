"use client";
import { AppContext } from "@/contexts/AppContext";
import Image from "next/image";
import React, { useContext } from "react";

export default function CurrentWeather() {
  const { selectedLocation,loading } = useContext(AppContext);
  let imageUrl = "https:" + selectedLocation?.current?.condition?.icon
  if(!loading){
  return (
    <div className="my-4  text-center flex flex-col items-center justify-center">
         {/* Weather Icon */}
      <div className="  h-14 w-14">
      <Image
        src={imageUrl}
        width={100}
        height={100}
        alt="weather icon"
      />
      </div>
      <h1 className="text-7xl text-white  font-bold">
        {selectedLocation?.current?.feelslike_c} &deg; 
      </h1>
      <p className="py-3  text-orange-500 text-3xl rounded-full font-semibold my-2">
        {selectedLocation?.location?.name} , {selectedLocation?.location?.country}
      </p>
    </div>
  );
  }
}
