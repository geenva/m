import { BsFillArrowUpRightSquareFill } from "react-icons/bs";

export default function Card(props: {
  title: string;
  description: string;
  url: string;
}) {
  const descriptionArray = props.description.split(" ");
  let description = descriptionArray.slice(0, 12).join(" ");

  if (description !== props.description) description = description + "...";

  return (
    <div className="card rounded-lg">
      <a
        href={props.url}
        target="_blank"
        className="grid grid-cols-6"
        rel="noreferrer"
      >
        <div className="col-span-5">
          <h1 className="font-bold text-2xl">{props.title}</h1>
          <h1>{description}</h1>
        </div>
        <BsFillArrowUpRightSquareFill className="text-3xl opacity-20" />
      </a>
    </div>
  );
}
