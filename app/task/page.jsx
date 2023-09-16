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
    <div className="flex p-10 flex-wrap gap-10">
      {todos.map((todo) => (
        <Link href={`/task/${todo.id}`} key={todo.id}>
          <Card className="truncate max-w-[20rem]">
            <CardHeader>
              <CardTitle>{todo.name}</CardTitle>
              <CardDescription >{todo.url}</CardDescription>
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
