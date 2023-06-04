import bg from "../public/bg.png";
import Search from "./components/Search";
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
      <div className="relative z-10 py-10 flex justify-center ">
        {/* Search Component */}
        <Search />
        {/* Current Component */}
        <h1>10 Degree</h1>
      </div>
    </main>
  );
}
