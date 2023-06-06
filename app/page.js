import Link from "next/link";
import bg from "../public/bg.png";
import CurrentWeather from "./components/CurrentWeather";
import Forecasts from "./components/Forecasts";
import Search from "./components/Search";
import { AiFillHeart } from "react-icons/ai";
export default function Home() {
  return (
    <main
      className="min-h-screen relative"
      style={{
        backgroundImage: `url("https://i.ibb.co/k6sgg1V/bg.jpg")`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {/* Black Transparent Background */}
      <div
        className="absolute inset-0 bg-black opacity-50"
        style={{ mixBlendMode: "multiply" }}
      ></div>
      {/* Main Content */}
      <div className="relative z-10 py-4 flex justify-center">
        <div>
          <h1 className="my-4 text-center text-white  font-semibold text-5xl">
            Weather App 1.0
          </h1>
          <hr />
          <br />
          {/* Search Component */}
          <Search />
          {/* Current Weather Component */}
          <CurrentWeather />
          {/* Last 3 Days Forecast */}
          <Forecasts />

        </div>
      </div>
    </main>
  );
}
