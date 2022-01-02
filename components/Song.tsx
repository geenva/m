import { Response } from "../pages/api/lastfm";
import useSWR from "swr";
import { SiApplemusic as SiAppleMusic } from "react-icons/si";

const fetcher = (url: string) => fetch(url).then((res) => res.json());

export default function Song() {
  const data = useSWR("/api/lastfm", fetcher);
  const song: Response = data.data;

  if (!song) return null;

  return (
    <p className="opacity-80 flex space-x-2 -space-y-1">
      <span>
        <SiAppleMusic />
      </span>
      <span>
        Playing{" "}
        <a
          href={song.data.url}
          className="hover:underline font-bold animate-pulse"
        >
          {song.data.name} by {song.data.artist}
        </a>
      </span>
    </p>
  );
}
