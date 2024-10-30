import { useUser } from "@clerk/clerk-react";
import AddResume from "../components/custom/AddResume";

import {useEffect, useState} from "react"
// import axios from "axios";
import { getResume } from "../services/apiResume";
import ResumeCard from "../components/custom/ResumeCard";




export default function Dashboard() {
  // const Url=import.meta.env.VITE_API_URL
  const {user}=useUser();



  // const [loading,setLoading]=useState(false);
  const [resumeList,setResumeList]=useState([]);

    // You can track user and isLoaded as dependencies, so this useEffect runs when either changes

    useEffect(()=>{
    user && callthis()
    },[user])

 async   function callthis(){

     const {data:{data:{resumes}}}=  await getResume(user.primaryEmailAddress.emailAddress)
     console.log(resumes)
    setResumeList(resumes)
    console.log(resumeList ,"I am resumeList")
    
    }



  return (
    <div className=" md:px-20 lg:px-30 sm:px-10">
       <h2 className="font-bold  text-2xl">My resume </h2>
       <p className="text-sm">start creating AI resume for your next Job role</p>
       <div className="grid grid-col-2 sm:grid-cols-1 md:grid-cols-2 gap-5 lg:grid-cols-5">
       
        <AddResume/>

        {
          resumeList && resumeList.map((el,i)=>(<ResumeCard key={i} resume={el}/>
            
          ))
        }
      

       </div>
    </div>
  )
}
