import { Button } from "../components/ui/button";
import { Link } from "react-router-dom";

import MyIcon from "./../assets/logo.svg";
import JobIcon from "./../assets/job.svg"

export default function Home() {




  return (
    <div className="">
      {/* header */}
      <div className="header sticky top-0 flex items-center justify-between py-4  bg-gray-800 mx-auto px-2 lg:px-10">
        <div className="flex items-center ">

          <img src={MyIcon} className="size-4" alt="Resume Icon" />
          <p className="text-white ml-5">ResumeHub</p>

        </div>
        <Link to={"/dashboard"}> <Button variant="outline" > Create Resume </Button></Link>

      </div>
      {/* <div>
        <Link to={"/dashboard"}>

          <Button>Go to Dashboard</Button>
        </Link>
      </div> */}
      {/* for paragrah and call to action */}
      <div className="mx-auto px-8 flex  flex-col items-center h-[80vh] justify-center bg-green-300">
        <h1 className="text-center text-3xl sm:text-3xl md:text-4xl lg:text-5xl mb-4 font-bold">
          The ultimate ai resume builder
        </h1>
        <p className="max-w-[700px] text-center  p-4">Create polished, recruiter-approved resumes in just a few clicks! Our powerful, easy-to-use resume builder offers a variety of impressive features. Customize resumes for any role in minutes to boost your interview chances and stand out from the competition.</p>
        <Link to="/dashboard">
          <Button size="lg" className="mt-3" >  Try for free</Button>
        </Link>

      </div>
        {/* adding features */}
      <div className="flex flex-col justify-center gap-5 items-center  mt-10 pt-10 px-5 ">
        <div className="flex mx-auto sm:max-w-[300px] max-w-[200px]">
          <img className="" src={JobIcon} />

        </div>
        <div className="">
          <h2 className="sm:text-3xl text-2xl font-bold px-3 mb-4 text-center p-5 mx-auto max-w-[500px]">Build a resume that will help you secure your next job</h2>
          <p className="text-center mx-auto mb-4 pb-4 font-semibold max-w-[550px]">Our resume builder is crafted from the insights of thousands of users, recruiter expertise, standout template design, and top hiring practices. The goal is clear: to help you secure that dream job interview! Gain an edge in todays competitive professional landscape.</p>
          <div className="flex items-center justify-center mb-4">

          <Button  variant="outline" size="lg">
            <Link to={"/dashboard"}>
            Build Your Resume
            </Link>
            </Button>
          </div>

        </div>

      </div>

<footer className="bg-black text-white mx-auto px-5">


  <p className="text-xs text-center py-3 font-semibold">Copyright 2024- ResumeHub</p>
</footer>


    </div>
  )
}
