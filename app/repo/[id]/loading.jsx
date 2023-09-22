import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
} from "@/components/ui/card";
import { Skeleton } from "@/components/ui/skeleton";

const Loading = () => {
  return (
    <div className="flex p-4 sm:p-10 flex-wrap gap-10 w-full justify-center content-start">
      <Card className="w-[19rem] md:w-[25rem] min-h-[14rem] flex flex-wrap flex-col dark:bg-zinc-900 border">
        <CardHeader>
          <Skeleton className="w-3/5 h-8 rounded-md"></Skeleton>
          <Skeleton className="w-full h-14 rounded-md "></Skeleton>
        </CardHeader>

        <CardContent>
          <Skeleton className="w-full h-5 rounded-md "></Skeleton>
        </CardContent>

        <CardFooter className="mt-auto mb-0 flex gap-2"></CardFooter>
      </Card>
    </div>
  );
};

export default Loading;
