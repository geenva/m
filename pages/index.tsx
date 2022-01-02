import type { NextPage } from "next";
import useSWR from "swr";
import { Response } from "./api/lastfm";
import { IoIosMusicalNotes } from "react-icons/io";
import Song from "../components/Song";

const Home: NextPage = () => {
  return (
    <main className="font-sans bg-black flex flex-col h-screen text-white">
      <div className="m-12">
        <h1 className="text-6xl font-bold">Marcus Y.</h1>
        <p className="opacity-70 text-xl">
          Software developer currently in the{" "}
          <span className="font-bold">United Kingdom</span>.
        </p>
        <Song />
        <br />
        <p className="text-2xl">Coming soon.</p>
      </div>
    </main>
  );
};

export default Home;
