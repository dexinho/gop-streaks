type StreakProps = {
  streak: Record<string, any>;
};

const Streak = ({ streak }: StreakProps) => {
  if (!streak) return <div>No data uploaded</div>;

  const entries = Object.entries(streak);

  let entriesAmount = entries.reduce((acc, entry) => acc + entry[1], 0)

  return (
    <div className="flex gap-2 flex-col p-2">
      <div className="grid grid-cols-3 gap-4">
        <div className="font-bold">Streak</div>
        <div className="font-bold">Amount</div>
        <div className="font-bold">Percentage</div>
      </div>

      {entries.map((combination, index) => (
        <div key={index} className={`grid grid-cols-3 px-2 gap-4 rounded-2xl ${index % 2 ? "bg-slate-800" : "bg-slate-900"}`}>
          {combination.map((e, index) => (
            <div key={index}>{e}</div>
          ))}
          <div className="text-red-800">
            {(combination[1] / entriesAmount * 100).toPrecision(3).toString()}%
          </div>
        </div>
      ))}
    </div>
  );
};

export default Streak;
