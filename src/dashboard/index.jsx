import { useUser } from "@clerk/clerk-react";
import AddResume from "../components/custom/AddResume";

import {useEffect, useState} from "react"
// import axios from "axios";
import { getResume } from "../services/apiResume";
import ResumeCard from "../components/custom/ResumeCard";
import { Button } from "../components/ui/button";




export default function Dashboard() {
  // const Url=import.meta.env.VITE_API_URL
  const {user}=useUser();



  // const [loading,setLoading]=useState(false);
  const [resumeList,setResumeList]=useState([]);
const [loading,setLoading]=useState(false)
    // You can track user and isLoaded as dependencies, so this useEffect runs when either changes

    useEffect(()=>{
    user && callthis()
    },[user])

 async   function callthis(){
setLoading(true)
     const {data:{data:{resumes}}}=  await getResume(user.primaryEmailAddress.emailAddress)
    //  console.log(resumes)
    setResumeList(resumes)
    // console.log(resumeList ,"I am resumeList")

    setLoading(false)
    
    }

if(loading){
  return <Button type="button" className="bg-indigo-500 ..." disabled>
  <svg className="animate-spin h-5 w-5 mr-3 ..." viewBox="0 0 24 24">
    
  </svg>
  Processing...
</Button>
}

  return (
    <div className=" md:px-20 lg:px-30 sm:px-10">
       <h2 className="font-bold  text-2xl">My resume </h2>
       <p className="text-sm mb-5">start creating AI resume for your next Job role</p>
       <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg-grid-cols-5 gap-x-3 gap-y-6 overflow-hidde w-full h-full mx-auto  px-2 mt-4 ">
      
        <AddResume />

        {
          resumeList && resumeList.map((el,i)=>(<ResumeCard key={i} resume={el}/>
            
          ))
        }
      

       </div>
    </div>
  )
}
