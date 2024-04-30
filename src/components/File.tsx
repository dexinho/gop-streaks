"use client";

import { ChangeEventHandler, useState } from "react";
import { HandleFileUploadP } from "../../types";

type FileProps = {
  handleFileUpload: ({ uploadedFile }: HandleFileUploadP) => void;
};

const File = ({ handleFileUpload }: FileProps) => {
  const handleFileChange: ChangeEventHandler<HTMLInputElement> = (e) => {
    const uploadedFile = e.target.files?.[0];

    if (!uploadedFile) {
      return;
    }

    handleFileUpload({ uploadedFile });
  };

  return (
    <div className="flex items-center justify-center">
      <input className="w-1/2" type="file" onChange={handleFileChange}></input>
    </div>
  );
};

export default File;
