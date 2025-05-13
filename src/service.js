import {  GoogleGenerativeAI} from "@google/generative-ai";

const genAI = new GoogleGenerativeAI(process.env.NEXT_PUBLIC_AI_API_KEY);
const model = genAI.getGenerativeModel({
  model: "gemini-2.0-flash",
});

const generationConfig = {
  temperature: 1,
  topP: 0.95,
  topK: 64,
  maxOutputTokens: 8192,
  responseMimeType: "text/plain",
};


export async function run(input) {
  try {
    const chatSession = model.startChat({
      generationConfig,
    history: [
    ],
  });
  
  const result = await chatSession.sendMessage(
    `you  are a assistent and you job is to give answer about this ${input} it should be in a simple way and you should not give any extra information or details, just a brif and well explain it, only send the response not the fiter like okey here is the response of the quations
    just a brif and well explain it, only send the response not the fiter like okey here is the response of the quations, and most import the answer should be in 3 seconds`);
    return result.response.text();

  }catch (error) {
    console.error("Error in run function:", error);
  }
}

