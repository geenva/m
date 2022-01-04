import type { NextPage } from "next";
import Song from "../components/Song";
import Status from "../components/Status";
import Link from "next/link";
import { IoInformationCircle, IoPencil } from "react-icons/io5";
import { useLanyard } from "use-lanyard";
import Profile from "../components/Profile";
import { SiGithub } from "react-icons/si";
import { HiMail } from "react-icons/hi";
import Card from "../components/Card";

const Home: NextPage = () => {
  const lanyard = useLanyard(process.env.NEXT_PUBLIC_DISCORD_ID!);

  return (
    <main className="font-sans bg-black flex flex-col h-screen text-white">
      <div className="m-3 md:m-12 grid grid-cols-none lg:grid-cols-2">
        <div>
          <Profile lanyard={lanyard} />
          <h1 className="text-6xl font-bold">Marcus Y.</h1>
          <p className="opacity-70 text-xl">
            Software developer currently in the{" "}
            <span className="font-bold">United Kingdom</span>.
          </p>
          <div className="text-3xl flex space-x-2">
            <a href="https://github.com/geenva">
              <SiGithub />
            </a>
            <a href="mailto:m@ymarc.us">
              <HiMail />
            </a>
          </div>
          <br />
          <Status lanyard={lanyard} />
          <Song />
          <br />
          <div className="text-2xl">
            <Link href="/about">
              <a className="flex space-x-2 -space-y-1 hover:underline">
                <IoInformationCircle />
                <span>About</span>
              </a>
            </Link>
            <Link href="/blog">
              <a className="flex space-x-2 -space-y-1 hover:underline">
                <IoPencil />
                <span>Blog</span>
              </a>
            </Link>
          </div>
          <br />
        </div>
        <div>
          <Card
            title="Website"
            description="My personal website."
            url="https://github.com/geenva/m"
          />
        </div>
      </div>
    </main>
  );
};

export default Home;
