import { Data, LanyardError } from "use-lanyard";
import Image from "next/image";
import { SWRResponse } from "swr";

export default function Status(props: {
  lanyard: SWRResponse<Data, LanyardError>;
}) {
  const { data } = props.lanyard;
  if (!data?.discord_user.avatar) return null;
  const avatar =
    "https://dcdn.dstn.to/avatars/" + data?.discord_user.id + "?size=1280";

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
