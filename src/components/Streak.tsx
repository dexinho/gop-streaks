type StreakProps = {
  streak: Record<string, any>;
};

const Streak = ({ streak }: StreakProps) => {
  if (!streak) return <div>No data uploaded</div>;

  const entries = Object.entries(streak);

  return (
    <div className="flex gap-2 flex-col p-2">
      <div className="grid grid-cols-3 gap-4">
        <div className="font-bold">Streak</div>
        <div className="font-bold">Amount</div>
        <div className="font-bold">Percentage</div>
      </div>

      {entries.map((combination, index) => (
        <div key={index} className={`grid grid-cols-3 px-2 gap-4 rounded-2xl ${index % 2 ? "bg-slate-50" : "bg-slate-300"}`}>
          {combination.map((e, index) => (
            <div key={index}>{e}</div>
          ))}
          <div className="text-red-900">
            {(combination[1] / entries.length).toPrecision(3).toString()}%
          </div>
        </div>
      ))}
    </div>
  );
};

export default Streak;
