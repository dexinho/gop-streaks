export const generateStreakData = (txtFile: string) => {
  const initialSplit = txtFile.split("\r\n");

  let max = 22;

  const noEmptyLinesAndNumbers = initialSplit.filter(
    (e) =>
      e !== "-1-2-3-4-5-6-7-8-9-0-1-2-3-4-5-6-7-8-9-0-1-2-3-4-5-6-7-8-9-0" &&
      e !== "" &&
      e !== "-"
  );

  console.log(noEmptyLinesAndNumbers);

  const streakData: Record<string, any> = {};
  let amount = noEmptyLinesAndNumbers.length;

  noEmptyLinesAndNumbers.forEach((e, i) => {
    if (typeof e === "string") {
      let noHyphen: string;
      noHyphen = e.replace(/\-+|\s+/g, "");

      if (!noHyphen) {
        console.log("removing ", noHyphen);
        return;
      }

      if (noHyphen.length in streakData) streakData[noHyphen.length]++;
      else streakData[noHyphen.length] = 1;
    }
  });

  return { id: Date.now(), data: streakData, amount };
};
