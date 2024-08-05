import { GoogleGenerativeAI } from "@google/generative-ai";
import * as fs from "fs";
import { File } from "buffer";

import dotenv from "dotenv";

dotenv.config();

const genAI = new GoogleGenerativeAI(process.env.API_KEY);

function FilePath(path, mimeType) {
  return {
    inlineData: {
      data: Buffer.from(fs.readFileSync(path)).toString("base64"),
      mimeType,
    },
  };
}

async function Convert() {
  const model = genAI.getGenerativeModel({ model: "gemini-1.5-pro" });

  const prompt =
    "Observe this image carefully and study each thing in detail and generate the code for the component present in this image in react and tailwind css make it as accurate as possible if there is any icons in the image add the CDN link of the similar icons present on the internet don't add any random icons add only necessary icons  , if there is any images present in the design try to crop that image from the original design and add that image to the code  , notice the colors very carefully and add the appropriate color if there is any gradient colors add that too and notice the size of the margin and padding and add them properly as well";

  const imageParts = [FilePath("Design4Hero.png", "image/png")];

  const result = await model.generateContent([prompt, ...imageParts]);

  const response = result.response;

  const code = response.text();

  console.log(code);
}

Convert();
