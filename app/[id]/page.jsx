import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Link from "next/link";
import { Github,Bug,ArrowBigUpDash } from "lucide-react";
import RepoList from "@/components/RepoList";
import { Eye } from "lucide-react";

const Info = async (params) => {
  const id = params.params.id;
  const repo = await fetch("https://api.github.com/repos/allencortuna/" + id, {
    next: { revalidate: 60 },
  })
    .then((response) => response.json())
    .then((json) => json);
  console.log("repo: ", repo);
  return (
    <div className="p-4 flex content-start flex-col h-auto max-w-[30rem] justify-center gap-10">
      <Card className="w-full mx-auto">
        <CardHeader>
          <CardTitle className="text-3xl">{repo.name}</CardTitle>
          <CardDescription className="text-sm">
            {repo.description}
          </CardDescription>
        </CardHeader>
        <CardContent className="flex flex-col gap-2">
          <Link
            href={repo.html_url}
            target="_blank"
            rel="noopener noreferrer"
            className="flex gap-2"
          >
            <Github size={24} className=" rounded-lg p-1 dark:bg-zinc-800 bg-zinc-100" />
            <p className="truncate text-xs w-[16rem] sm:w-auto font-[500] my-auto">
              {repo.html_url}
            </p>
          </Link>
        
          <Link
            href={repo.url}
            target="_blank"
            rel="noopener noreferrer"
            className="flex gap-2"
          >
            <ArrowBigUpDash size={24} className=" rounded-lg p-1 dark:bg-zinc-800 bg-zinc-100" />
            <p className="truncate text-xs w-[16rem] sm:w-auto font-[500] my-auto">
              {repo.url}
            </p>
          </Link>
        </CardContent>

        <CardFooter className="mt-auto mb-0 flex gap-2">
          {repo.language && (
            <Badge variant="outline" className={"rounded-md p-3 py-1"}>
              <p>{repo.language}</p>
            </Badge>
          )}
          
          <Badge variant="outline" className={"rounded-md p-3 py-1 flex gap-2"}>
            <Bug size={16} className="" />
            {repo.open_issues_count}
          </Badge>
          

          <Badge variant="outline" className={"rounded-md p-3 py-1 flex gap-2"}>
            <Eye size={16} className="" />
            <p>{repo?.visibility}</p>
          </Badge>
        </CardFooter>
        
      </Card>
     
      <RepoList/>
    </div>
  );
};

export default Info;
