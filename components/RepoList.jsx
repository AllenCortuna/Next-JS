import React from "react";
import { Card } from "@/components/ui/card";
import Link from "next/link";
import { CheckCircle2 } from "lucide-react";

const fetchRepo = async () => {
  const repos = await fetch("https://api.github.com/users/allencortuna/repos", {
    next: { revalidate: 60 * 60 * 24 },
  });
  return repos.json();
};

const RepoList = async () => {
  const repos = await fetchRepo();
  return (
    <Card className="w-full mx-auto gap-4 grid md:grid-cols-2 border-none px-6 bg-transparent mb-10 shadow-none">
      {repos.map((repo) => (
        <Link
          key={repo.id}
          href={"/"+repo.name}
          className="flex gap-2 dark:text-zinc-300 text-zinc-700 underline hover:text-lime-600 dark:hover:text-lime-500"
        >
          <CheckCircle2
            size={15}
            className="my-auto"
            strokeWidth={3}
          />
          <p className="truncate text-xs w-[16rem] sm:w-auto font-[600] my-auto">
            {repo.name}
          </p>
        </Link>
      ))}
    </Card>
  );
};

export default RepoList;
