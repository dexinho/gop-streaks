"use client";

import File from "@/components/File";
import { generateStreakData } from "@/utility/generateStreakData";
import { HandleFileUploadP } from "../../types";
import { useState } from "react";
import Streak from "@/components/Streak";

const HomePage = () => {
  const [streaks, setStreaks] = useState<any[]>([]);

  const handleFileUpload = ({ uploadedFile }: HandleFileUploadP) => {
    const fileReader = new FileReader();

    fileReader.readAsText(uploadedFile);

    fileReader.onload = (e) => {
      if (!e) return;

      if (typeof e.target?.result === "string") {
        const streakData = generateStreakData(e.target.result);

        console.log(streakData);

        setStreaks([...streaks, streakData]);
      }
    };
  };

  const handleStreakRemove = (id: string) => {
    setStreaks((prevStreaks) =>
      prevStreaks.filter((streak) => streak.id !== id)
    );
  };

  return (
    <div className="flex  flex-col gap-4 items-center justify-center">
      <h1>UPLOAD GOP PATTERN FILE</h1>
      <File handleFileUpload={handleFileUpload} />
      <div className="flex gap-4">
        {streaks.map((streak, index) => (
          <div key={index} className="flex  gap-4 flex-col">
            <div className="flex justify-between flex-col rounded-2xl  border">
              <div className="flex justify-end">
                <button
                  className="hover:bg-slate-50 px-2 text-xl rounded-2xl "
                  onClick={() => handleStreakRemove(streak.id)}
                >
                  X
                </button>
              </div>
              <Streak streak={streak.data} />
              <div className="p-2">Total: {streak.amount}</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default HomePage;
