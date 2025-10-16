const revalidate = 43200;

// import { youtube_ids } from "@/data/YTid";
import Standard from "@/components/Standard";

const YOUTUBE_API_KEY = `AIzaSyBdA6aG9KHhqJ_cKhnHXkVzKNWsWZb2F3U`

function chunkArray(array, chunkSize) {
  const chunks = [];
  for (let i = 0; i < array.length; i += chunkSize) {
    chunks.push(array.slice(i, i + chunkSize));
  }
  return chunks;
}

export default async function Home() {
  // const chunks = chunkArray(youtube_ids, 50);

  // const allPosts = [];

  // for (const chunk of chunks) {
  //   const id_strings = chunk.join(",");
  //   const res = await fetch(
  //     `https://www.googleapis.com/youtube/v3/videos?part=snippet,contentDetails,statistics&id=${id_strings}&key=${YOUTUBE_API_KEY}`,
  //     { next: { revalidate: 43200 } }
  //   );
  //   const data = await res.json();
  //   allPosts.push(...data.items); // merge items into allPosts
  // }

  const res = await fetch(
    `https://www.googleapis.com/youtube/v3/search?part=snippet&q=hades+fear&type=video&order=date&maxResults=50&key=${YOUTUBE_API_KEY}`,
    { next: { revalidate: 43200 } }
  );

  const data = await res.json();
  const fetchedAt = new Date().toTimeString();



  return (
    <div>
      <main className="text-white">
        <p className="text-[14px] p-2">Data fetched at: {fetchedAt}</p>
        <Standard rawData={data.items} />
      </main>
    </div>
  );
}
