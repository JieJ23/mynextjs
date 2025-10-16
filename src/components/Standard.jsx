"use cilent";

export default function Standard({ rawData }) {
  return (
    <div className="my-4 max-w-[1600px] mx-auto font-[font]">
      <div className="p-2 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-2 text-[12px] md:text-[13px]">
        {rawData.map((obj, index) => (
          <div key={index} className="rounded">
            <div className="aspect-video border-1 border-[#28282b] rounded-lg">
              <a href={`https://www.youtube.com/watch?v=${obj.id.videoId}`} target="_blank">
                <img
                  src={`${obj.snippet.thumbnails.medium.url}`}
                  alt="Thumbnails"
                  className="w-full h-full rounded-lg"
                />
              </a>
            </div>
            <div className="px-2">
              <div className="line-clamp-2">{obj.snippet.title}</div>
              <div className="flex justify-between text-[12px] my-0.5">
                <div>{obj.snippet.channelTitle}</div>
                <div>{obj.snippet.publishedAt.slice(0, 10)}</div>
              </div>
              <div className="line-clamp-2">{obj.snippet.description}</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
