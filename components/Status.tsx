import { useLanyard } from "use-lanyard";
import { IoMdGitCommit } from "react-icons/io";

const blacklist = ["Spotify", "Apple Music", "Custom Status"];

export default function Status() {
  const { data } = useLanyard(process.env.NEXT_PUBLIC_DISCORD_ID!);
  const activityData = data?.activities;
  let activity = null;
  let status = data?.discord_status == "offline" ? "Offline" : "Online";

  activityData?.forEach((item) => {
    if (!blacklist.includes(item.name))
      activity = "Playing " + item.name + " • " + item.details;
  });

  return (
    <p className="flex space-x-2 -space-y-1 opacity-80">
      <IoMdGitCommit />{" "}
      <span>
        {status}{" "}
        {activity ? (
          <>
            | <span className="animate-pulse">{activity}</span>
          </>
        ) : null}
      </span>
    </p>
  );
}
