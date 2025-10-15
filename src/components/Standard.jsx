"use cilent";

export default function Standard({ data }) {
  const classes_store = data.context.ladder.entries.reduce((acc, entry) => {
    const classType = entry.character.class;

    acc[classType] = (acc[classType] || 0) + 1;
    return Object.fromEntries(Object.entries(acc).sort());
  }, {});

  const players_dead = data.context.ladder.entries.filter((obj) => obj.dead === true);
  const classes_dead_store = players_dead.reduce((acc, entry) => {
    const classType = entry.character.class;

    acc[classType] = (acc[classType] || 0) + 1;
    return Object.fromEntries(Object.entries(acc).sort());
  }, {});

  return (
    <div className="my-4 max-w-[1400px] mx-auto">
      <div className="p-2">
        <div>{data.context.league.name}</div>
        <div>{data.context.league.description}</div>
      </div>
      <div className="p-2 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-1 text-white">
        {Object.entries(classes_store).map(([ke, val], index) => (
          <div className="flex justify-between gap-4 p-2 bg-black/80 rounded" key={index}>
            <div>{ke}</div>
            <div>
              ({val}) {((val / 1000) * 100).toFixed(2)}%
            </div>
          </div>
        ))}
      </div>
      <div className="p-2 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-1 text-white">
        {Object.entries(classes_dead_store).map(([ke, val], index) => (
          <div className="flex justify-between gap-4 p-2 bg-[#521111]/80 rounded" key={index}>
            <div>{ke}</div>
            <div>
              ({val}) {((val / 1000) * 100).toFixed(2)}%
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
