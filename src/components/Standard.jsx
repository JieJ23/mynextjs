"use client";

export default function Standard({ data }) {
  return (
    <div>
      {data.map((obj, index) => (
        <div key={index}>
          {obj.nam} - {index}
        </div>
      ))}
    </div>
  );
}
