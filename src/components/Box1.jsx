"use cilent";

export default function Box1({ data }) {
  const first10 = data.slice(0, 10);
  return (
    <div>
      <div>Header Name</div>
      <div>Data information</div>
      <div className="my-2">
        {first10.map((obj, index) => (
          <div key={index}>{obj.title}</div>
        ))}
      </div>
    </div>
  );
}
