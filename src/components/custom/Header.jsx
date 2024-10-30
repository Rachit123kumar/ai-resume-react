
import { Link } from "react-router-dom"
import {Button} from "../ui/button"
import { UserButton, useUser } from "@clerk/clerk-react"
export default function Header() {
    const {isSignedIn,isLoaded}=useUser()
  return (
    <div className=" w-screen flex  justify-between shadow-md py-2 px-4">
        {/* <img src="../../assets/logo.svg" width={100} height={100}/>
         */}
         <span className="text-sm bg-purple-500 py-2 px-3 text-white font-bold rounded-lg ">AI LOGO</span>
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
