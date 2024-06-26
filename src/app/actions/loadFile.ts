export const loadFile = async (file: File) => {
  return new Promise((res) => {
    const fileReader = new FileReader();

    if (file.type === "text/plain") fileReader.readAsText(file);
    else if (file.type === "image/jpeg") fileReader.readAsDataURL(file);
    else throw Error;

    fileReader.onload = (e) => {
      if (!e.target) return;

      const loadedFile = e.target.result;

      setTimeout(() => {
        res(loadedFile);
      }, 1000);
    };
  });
};
