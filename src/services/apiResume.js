
import axios from "axios";
const Url=import.meta.env.VITE_API_URL


export async function getResume(userEmail){
   const response = await axios.post(`${Url}resume`, {
   userEmail 
  });

  console.log(response)
  return response;
}

export async function updatePersonDetails(data){
   const res=await axios.post(`${Url}resumeupdate`,data)
console.log(res,"I am from update data")
return res;

}

export async function updateSummary(data){
  const res=await axios.post(`${Url}updatesummary`,data);

  console.log(res,"I am from ResumeUpdate")
  return res
}