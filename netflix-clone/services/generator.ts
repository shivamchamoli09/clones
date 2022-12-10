import { contents } from "../seeds/content";

export const generateContent = (count: number) => {
  let generatedContent = [] as any;
  for (let i = 0; i < contents.length; i++) {
    generatedContent.push(contents[i]);
    if (generatedContent.length === count) break;
    if (i === contents.length - 1) i = 0;
  }
  return generatedContent;
};
