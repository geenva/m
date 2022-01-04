import { Response } from "../pages/api/lastfm";
import useSWR from "swr";
import { SiApplemusic as SiAppleMusic } from "react-icons/si";
import fetcher from "../utils/fetcher";

export default function Song() {
  const data = useSWR("/api/lastfm", fetcher);
  const song: Response = data.data;

  if (!song?.data.playing) return null;

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
