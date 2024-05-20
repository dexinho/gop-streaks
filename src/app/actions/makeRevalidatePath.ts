"use server";

import { revalidatePath } from "next/cache";

export const makeRevalidatePath = async (path: string) => {
  revalidatePath(path);
};
