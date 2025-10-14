const revalidate = 60;

import Link from "next/link";
export default async function AboutPage() {

    const data = await fetch('https://script.google.com/macros/s/AKfycbw1iX5AdD32YcXYohQLAgEx3SDPTsH3V41RGCGts2bNk3-yYfSlEpZgufNt-G60gc7t/exec', {
        next: { revalidate: 60 }
    })
    const posts = await data.json()
    const fetchedAt = new Date().toISOString();

    console.log(posts)

    return (
        <div className="flex items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20">
            <main className="flex flex-col">
                <p>Data revalidate every 60 seconds</p>
                <p>Data fetched at: {fetchedAt}</p>
                <div className="font-[cinzel] text-[20px]">
                    Power of the Light twin
                </div>
                <Link href={"/"} className="font-[ubuntu] text-[20px]">Go to Home page</Link>
                {posts.map((obj, index) => (
                    <div className="flex gap-4">
                        <div>
                            {index}
                        </div>
                        <div>
                            {obj.nam}
                        </div>
                    </div>
                ))}
            </main>
        </div>
    );
}
