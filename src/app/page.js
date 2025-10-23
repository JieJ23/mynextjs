export const revalidate = 30

import Standard from "@/components/Standard";

export default async function Home() {

  const res = await fetch(
    `https://script.google.com/macros/s/AKfycbw1iX5AdD32YcXYohQLAgEx3SDPTsH3V41RGCGts2bNk3-yYfSlEpZgufNt-G60gc7t/exec`, { next: { revalidate: 30 } }
  );
  const data = await res.json();


  return (
    <div>
      <main className="text-white">
        <Standard data={data} />
      </main>
    </div>
  );
}
