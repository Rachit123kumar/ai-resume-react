import { Button } from "../components/ui/button";
import { Link } from "react-router-dom";




export default function Home() {




  return (
    <div className="flex h-screen items-center justify-center">
      <div>
        <Link to={"/dashboard"}>
        
        <Button>Go to Dashboard</Button>
         </Link>
      </div>

      
    </div>
  )
}
