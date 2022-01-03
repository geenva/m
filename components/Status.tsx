import { Data, LanyardError, useLanyard } from "use-lanyard";
import { IoMdGitCommit } from "react-icons/io";
import { SWRResponse } from "swr";

const blacklist = ["Spotify", "Apple Music", "Custom Status"];

export default function Status(props: {
  lanyard: SWRResponse<Data, LanyardError>;
}) {
  const { data } = props.lanyard;
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
