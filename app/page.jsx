import {
  Card,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

import Link from "next/link";

const fetchRepo = async () => {
  // await new Promise((resolve) => setTimeout(resolve, 3000));
  const repos = await fetch("https://api.github.com/users/allencortuna/repos", {
    next: { revalidate: 60 },
  });
  return repos.json();
};

const Tasks = async () => {
  const repos = await fetchRepo();
  return (
    <div className="flex p-4 sm:p-10 flex-wrap gap-10 w-full justify-center content-start">
      {repos.map((repo) => (
        <Link href={`/${repo.name}`} key={repo.name}>
          <Card className="w-[19rem] md:w-[25rem] min-h-[12rem] flex flex-wrap flex-col dark:bg-zinc-900">
            <CardHeader>
              <CardTitle className="capitalize">{repo.name}</CardTitle>

              <CardDescription className="whitespace-normal w-[16rem] sm:w-auto text-xs line-clamp-3">
                {repo.description}
              </CardDescription>
            </CardHeader>


            <CardFooter className="mt-auto mb-0 flex gap-2">
              {repo.language && (
                <Badge variant="outline" className={"rounded-md p-3 py-1"}>
                  <p>{repo.language}</p>
                </Badge>
              )}

              <Badge variant="outline" className={"rounded-md p-3 py-1"}>
                <p>{repo?.visibility}</p>
              </Badge>
            </CardFooter>
          </Card>
        </Link>
      ))}
    </div>
  );
};

export default Tasks;
