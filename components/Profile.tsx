import { Data, LanyardError } from "use-lanyard";
import Image from "next/image";
import { SWRResponse } from "swr";
import placeholder from "../public/img/low-quality-profile-picture.png";

export default function Status(props: {
  lanyard: SWRResponse<Data, LanyardError>;
}) {
  const { data } = props.lanyard;
  if (!data?.discord_user.avatar)
    return (
      <Image
        className="rounded-full"
        src={placeholder}
        layout="intrinsic"
        width="160"
        height="160"
        alt="Profile picture"
      />
    );
  const avatar =
    "https://dcdn.dstn.to/avatars/" + data?.discord_user.id + "?size=512";

  return (
    <Image
      className="rounded-full"
      src={avatar}
      layout="intrinsic"
      width="160"
      height="160"
      alt="Profile picture"
    />
  );
}
