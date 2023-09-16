// import Image from "next/image";
import Link from "next/link";

export default function Home() {
  
  return (
    <main>
      <h2>Dashboard</h2>
      <Link href={'/task'}>task</Link>
    </main>
  );
}
