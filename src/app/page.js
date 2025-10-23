export default async function Home() {

  const res = await fetch(
    `https://script.google.com/macros/s/AKfycbw1iX5AdD32YcXYohQLAgEx3SDPTsH3V41RGCGts2bNk3-yYfSlEpZgufNt-G60gc7t/exec`
  );
  const data = await res.json();


  return (
    <div>
      <main className="text-white">
        <div>
          {data.map((obj, index) => (
            <div key={index}>
              {obj.nam} - {index} - {obj.asp}
            </div>
          ))}
        </div>
      </main>
    </div>
  );
}
