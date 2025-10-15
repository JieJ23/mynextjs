const revalidate = 43200;

import Standard from "@/components/Standard";

export default async function Home() {

  const data = await fetch('https://pathofexile2.com/internal-api/content/game-ladder/id/Rise%20of%20the%20Abyssal', {
    next: { revalidate: 43200 }
  })

  const data2 = await fetch('https://pathofexile2.com/internal-api/content/game-ladder/id/HC%20Rise%20of%20the%20Abyssal', {
    next: { revalidate: 43200 }
  })

  const data3 = await fetch('https://pathofexile2.com/internal-api/content/game-ladder/id/SSF%20Rise%20of%20the%20Abyssal', {
    next: { revalidate: 43200 }
  })

  const data4 = await fetch('https://pathofexile2.com/internal-api/content/game-ladder/id/HC%20SSF%20Rise%20of%20the%20Abyssal', {
    next: { revalidate: 43200 }
  })

  const posts = await data.json()
  const posts2 = await data2.json()
  const posts3 = await data3.json()
  const posts4 = await data4.json()
  const fetchedAt = new Date().toTimeString();

  return (
    <div>
      <main >
        <p className="text-[14px] p-2">Data fetched at: {fetchedAt}</p>
        <Standard data={posts} />
        <Standard data={posts2} />
        <Standard data={posts3} />
        <Standard data={posts4} />

      </main>
    </div>
  );
}
