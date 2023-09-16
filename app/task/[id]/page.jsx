import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import Link from "next/link";

const Info = async(params) => {
  const id = params.params.id
  const todo = await fetch("https://jsonplaceholder.typicode.com/posts/" + id, {
    next: { revalidate: 60 },
  })
    .then((response) => response.json())
    .then((json) => json);
  console.log("todo: ", todo);
  return (
    <div className="p-20 px-40 flex content-start">
          <Card>
            <CardHeader>
              <CardTitle>{todo.title}</CardTitle>
              <CardDescription>{todo.body}</CardDescription>
            </CardHeader>
            <CardContent>
              <p>Card Content</p>
            </CardContent>
            <CardFooter>
              <p>Card Footer</p>
            </CardFooter>
          </Card>
    </div>
  )
}

export default Info
