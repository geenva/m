import type { NextPage } from "next";
import LastFM from "../components/LastFM";

const Home: NextPage = () => {
  return (
    <main className="font-sans bg-black flex flex-col h-screen text-white">
      <div className="m-12">
        <h1 className="text-6xl font-bold">Marcus Y.</h1>
        <p className="opacity-70 text-xl">
          Software developer currently in the{" "}
          <span className="font-bold">United Kingdom</span>.
        </p>
        <LastFM />
      </div>
    </main>
  );
};

export default Home;
