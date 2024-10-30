import{
    GoogleGenerativeAI, HarmCategory, HarmBlockThreshold, } from "@google/generative-ai"
  
  const apiKey = import.meta.env.VITE_API_GOOGLE ;
  const genAI = new GoogleGenerativeAI(apiKey);
  
  const model = genAI.getGenerativeModel({
    model: "gemini-1.5-flash",
  });
  
  const generationConfig = {
    temperature: 1,
    topP: 0.95,
    topK: 64,
    maxOutputTokens: 8192,
    responseMimeType: "application/json",
  };
  
export async  function run(prompt){

    const res =await model.generateContent(prompt)
    console.log(res);
    return res
    
}
  

  
  
