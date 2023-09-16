import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import Link from "next/link";

const fetchRepo = async () => {
  const todos = await fetch("https://api.github.com/users/allencortuna/repos", {
    next: { revalidate: 60 },
  });
  return todos.json();
};

const Tasks = async () => {
  const todos = await fetchRepo();
  console.log("todo: ", todos);
  return (
    <div className="flex p-4 sm:p-10 flex-wrap gap-10 justify-center content-start">
      {todos.map((todo) => (
        <Link href={`/task/${todo.id}`} key={todo.id}>
          <Card className="w-[20rem] md:w-[25rem]">
            <CardHeader>
              <CardTitle>{todo.name}</CardTitle>
              <CardDescription className="truncate" >{todo.url}</CardDescription>
            </CardHeader>
            <CardContent>
              <p>{todo?.visibility}</p>
            </CardContent>
            <CardFooter>
              <p>{todo?.created_at}</p>
            </CardFooter>
          </Card>
        </Link>
      ))}
    </div>
  );
};

export default Tasks;
