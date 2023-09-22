import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Skeleton } from "@/components/ui/skeleton"


const Loading = () => {
  const newArray = Array.from({ length: 6 }, (_, index) => index + 1);


  console.log(newArray)
  return (
    <div className="flex p-4 sm:p-10 flex-wrap gap-10 w-full justify-center content-start">
      {newArray.map((id) => (
          <Card className="w-[19rem] md:w-[25rem] min-h-[10rem] flex flex-wrap flex-col dark:bg-zinc-950 border" key={id}>
            <CardHeader>
              <Skeleton className="w-3/5 h-8 rounded-md"></Skeleton>
              <Skeleton className="w-full h-10 rounded-md "></Skeleton>
            </CardHeader>

            <CardContent className="flex justify-start gap-5">
              <Skeleton className="w-1/4 h-5 rounded-md "></Skeleton>
              <Skeleton className="w-1/4 h-5 rounded-md "></Skeleton>
            </CardContent>

          </Card>
      ))}
      
      
    </div>
  );
};

export default Loading;
