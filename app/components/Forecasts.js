"use client";
import { AppContext } from "@/contexts/AppContext";
import Image from "next/image";
import React, { useContext } from "react";
import ReactLoading from "react-loading";
export default function Forecasts() {
  const { selectedLocation, loading } = useContext(AppContext);
  if (loading) {
    return (
      <div className="flex items-center justify-center">
        <div>
          <ReactLoading
            type="bubbles"
            color="orange"
            height={150}
            width={200}
          />
          <h1 className="text-center text-4xl" style={{color:"orange"}}>Loading.</h1>
        </div>
      </div>
    );
  } else {
    return (
      <div className="my-4">
        {/* Last 3 Days Forecast */}
        <div className="flex items-center justify-center space-x-4">
          {/* Single Forecast */}
          {selectedLocation?.forecast?.forecastday?.slice(1).map((day) => {
            const dateObj = new Date(day?.date);
            const options = { weekday: "long" };
            const dayOfWeek = dateObj.toLocaleString("en-US", options);
            return (
              <div className="bg-white flex flex-col lg:flex-row items-center space-x-4 bg-opacity-30 py-2 px-4 my-1 rounded-xl  text-center">
                {/* Weather Icon */}
                <div className="  h-14 w-14">
                  <Image
                    src={`https:${day?.day?.condition.icon}`}
                    width={100}
                    height={100}
                    alt="weather icon"
                  />
                </div>
                <h1 className="text-white text-3xl font-semibold">
                  {day?.day?.avgtemp_c} &deg;
                </h1>
                <h1 className="text-white">{dayOfWeek}</h1>
              </div>
            );
          })}
        </div>
      </div>
    );
  }
}
