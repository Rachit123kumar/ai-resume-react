import MyIcon from "../../../public/vite.svg"
  import { Link } from "react-router-dom"
  import {Button} from "../ui/button"
  import { UserButton, useUser } from "@clerk/clerk-react"
  export default function Header() {
      const {isSignedIn,isLoaded}=useUser()
    return (
      <div className=" w-screen flex  justify-between shadow-md py-2 px-4 bg-gray-800">
        {/* <img src="../../assets/logo.svg" width={100} height={100}/>  */}
          
          <p className="text-sm flex items-center cursor-pointer text-center gap-3  py-2 px-3 text-white font-bold rounded-lg ">
            <img className="size-4" src={MyIcon} />
             <span>ResumeHub</span>
             
             </p>
  {

      isLoaded && isSignedIn ?<Link to={'/dashboard'}><div className="flex gap-3 items-center ">
      <Button  variant="outline">Dashboard</Button>
      <UserButton className=""/>
        
      </div>
      </Link>
        
        : <Link to={'/auth/sign-in'}>
        <Button variant="primary">Get started</Button>
          </Link>
  }



          
      </div>
    )
  }
