"use cilent";

export default function Standard({ rawData }) {
  const sortDataByDate = rawData.sort(
    (a, b) => new Date(b.snippet.publishedAt.slice(0, 10)) - new Date(a.snippet.publishedAt.slice(0, 10))
  );

  console.log(rawData[0]);
  return (
    <div className="my-4 max-w-[1400px] mx-auto">
      <div className="p-2 grid grid-cols-2 md:grid-cols-4 gap-2 text-[12px] md:text-[13px]">
        {sortDataByDate.map((obj, index) => (
          <div key={index} className="rounded">
            <div className="aspect-video border-1 border-[#28282b] rounded-lg">
              <a href={`https://www.youtube.com/watch?v=${obj.id}`} target="_blank">
                <img
                  src={`${obj.snippet.thumbnails.medium.url}`}
                  alt="Thumbnails"
                  className="w-full h-full rounded-lg"
                />
              </a>
            </div>
            <div className="px-2">
              <div className="line-clamp-2">{obj.snippet.title}</div>
              <div className="flex justify-between">
                <div>{obj.snippet.channelTitle}</div>
                <div>Like: {obj.statistics.likeCount}</div>
              </div>
              <div className="flex justify-between">
                <div>{obj.snippet.publishedAt.slice(0, 10)}</div>
                <div>View: {obj.statistics.viewCount}</div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
