const revalidate = 10;

import Link from "next/link";
import Box1 from "@/components/Box1";

export default async function Home() {

  const data = await fetch('https://api.vercel.app/blog', {
    next: { revalidate: 10 }
  })
  const posts = await data.json()
  const fetchedAt = new Date().toISOString();




  return (
    <div className="flex items-center justify-items-center p-4">
      <main >
        <div>This page revalidate every 10 seconds.</div>

        <Link href="/About" className="font-[ubuntu] text-[20px]">Go to About Page</Link>

        <p>Data fetched at: {fetchedAt}</p>


        <div className="font-[ubuntu] text-[16px] my-4">
          <Box1 data={posts} />
        </div>

      </main>
    </div>
  );
}
