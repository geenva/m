import { useLanyard } from "use-lanyard";
import { IoMdGitCommit } from "react-icons/io";

export default function Status() {
  const { data } = useLanyard(process.env.NEXT_PUBLIC_DISCORD_ID!);
  const activityData = data?.activities;
  let activity = null;

  activityData?.forEach((item) => {
    if (item.name !== "Spotify" && item.name !== "Apple Music")
      activity = "Playing " + item.name + " • " + item.details;

    if (data?.discord_status == "offline") return null;
  });

  return (
    <p className="flex space-x-2 -space-y-1 opacity-80">
      <IoMdGitCommit />{" "}
      <span>
        Online{" "}
        {activity ? (
          <>
            | <span className="animate-pulse">{activity}</span>
          </>
        ) : null}
      </span>
    </p>
  );
}
