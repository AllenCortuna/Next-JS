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

const fetchRepo = async () => {
  const todos = await fetch("https://api.github.com/users/allencortuna/repos", {
    next: { revalidate: 6 },
  });
  return todos.json();
};

const Tasks = async () => {
  const todos = await fetchRepo();
  console.log("todo: ", todos);
  return (
    <div className="flex p-4 sm:p-10 flex-wrap gap-10 w-full justify-center content-start">
      {todos.map((todo) => (
        <Link href={`/task/${todo.id}`} key={todo.id}>
          <Card className="w-[19rem] md:w-[25rem] min-h-[14rem] flex flex-wrap flex-col dark:bg-zinc-900">
            <CardHeader>
              <CardTitle className="capitalize">{todo.name}</CardTitle>

              <CardDescription className="whitespace-normal w-[16rem] sm:w-auto text-xs line-clamp-2">
                {todo.description}
              </CardDescription>
            </CardHeader>
            
            <CardContent>
              <p className="truncate font-semibold text-xs w-[16rem] sm:w-auto">
                {todo.url}
              </p>
            </CardContent>
            
            <CardFooter className="mt-auto mb-0 flex gap-2">
              
              <Badge variant="outline" className={"rounded-md p-3 py-1"}>
                <p>{todo.language ? todo.language : "none"}</p>
              </Badge>
              
              <Badge variant="outline" className={"rounded-md p-3 py-1"}>
                <p>{todo?.visibility}</p>
              </Badge>
            </CardFooter>
          </Card>
        </Link>
      ))}
    </div>
  );
};

export default Tasks;
