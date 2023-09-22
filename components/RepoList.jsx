import React from "react";
import { Card } from "@/components/ui/card";
import Link from "next/link";
import { ArrowBigUpDash } from "lucide-react";

const fetchRepo = async () => {
  const repos = await fetch("https://api.github.com/users/allencortuna/repos", {
    next: { revalidate: 60 * 60 * 24 },
  });
  return repos.json();
};

const RepoList = async () => {
  const repos = await fetchRepo();
  return (
    <Card className="w-full mx-auto gap-4 flex flex-col border-none justify-start px-6 ">
      {repos.map((repo) => (
        <Link
          key={repo.id}
          href={"/repo/"+repo.name}
          className="flex gap-2 underline dark:text-zinc-300"
        >
          <ArrowBigUpDash
            size={20}
            className=""
          />
          <p className="truncate text-xs w-[16rem] sm:w-auto font-[500] my-auto">
            {repo.name}
          </p>
        </Link>
      ))}
    </Card>
  );
};

export default RepoList;
