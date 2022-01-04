import { AiOutlineRight } from "react-icons/ai";

export default function Card(props: {
  title: string;
  description: string;
  url: string;
}) {
  return (
    <div className="card rounded-lg">
      <a href={props.url} className="grid grid-cols-5">
        <div className="col-span-4">
          <h1 className="font-bold text-2xl">{props.title}</h1>
          <h1>{props.description}</h1>
        </div>
        <AiOutlineRight className="text-6xl opacity-20" />
      </a>
    </div>
  );
}
