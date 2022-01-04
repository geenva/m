import useSWR from "swr";
import fetcher from "../utils/fetcher";
import Card from "./Card";

export interface PinnedRepos {
  owner: string;
  repo: string;
  link: string;
  description: string;
  image: string;
  website: string;
  language: string;
  languageColor: string;
  stars: string;
  forks: any;
}

export default function Projects() {
  const { data } = useSWR<PinnedRepos[]>(
    "https://gh-pinned-repos.egoist.sh/?username=geenva",
    fetcher
  );

  if (!data) return null;

  return (
    <div className="space-y-3">
      {data.map((repo) => (
        <Card
          key=""
          title={repo.repo}
          description={repo.description}
          url={repo.link}
        />
      ))}
    </div>
  );
}
