import { useLastFM } from "use-last-fm";

const LastFM = () => {
  if (!process.env.LAST_FM_API_KEY)
    throw new Error("No last.fm API key defined in .env.");

  const lastFM = useLastFM("flarely", process.env.LAST_FM_API_KEY);
  if (lastFM.status !== "playing") return null;

  return (
    <p>
      Listening to {lastFM.song.name} by {lastFM.song.artist}
    </p>
  );
};

export default LastFM;
