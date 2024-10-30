import { Loader2, PlusIcon } from "lucide-react";
import { Button } from './../ui/button'
// import { v4 as uuidv4 } from "uuid"
import { Input } from './../ui/input'
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,

} from "@/components/ui/dialog"
import { useState } from "react";
// import {CreateNewResume} from "../../../service/GlobalApi";
import { useUser } from "@clerk/clerk-react";
import axios from "axios";
import { useNavigate } from "react-router-dom";


export default function AddResume() {
  const [openDialog, setOpenDialog] = useState(false);
  const [resumeTitle, setResumeTitle] = useState("")
  const { user } = useUser();
  const [loading, setLoading] = useState(false);
  const Url=import.meta.env.VITE_API_URL
  const naviagate=useNavigate()

function onCreate(){
 setLoading(true);
 console.log()

 axios.post(`${Url}addresume`,{
  title:resumeTitle,
  userEmail:user?.primaryEmailAddress?.emailAddress
 }).then((res)=>{
  setLoading(false)
const {data:{data:{newResume:{resumeId}}}}=res
console.log(res);
naviagate(`/dashboard/resume/${resumeId}/edit`)




  console.log(res)
 }).catch((err)=>{
  setLoading(false)
  console.log(err)
 })


}
 
   
    
  
  return (
    <div className="">
      <div onClick={() => setOpenDialog(true)} className="  flex items-center justify-center bg-slate-300 h-[280px] w-[200px] rounded-lg mt-3 px-30      hover:scale-105 transition-all hover:shadow-md cursor-pointer hover:border-dotted">
        <PlusIcon />
      </div>
      <Dialog open={openDialog}>
        {/* <DialogTrigger>Open</DialogTrigger> */}
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Enter the name of resume</DialogTitle>
            <DialogDescription className="flex flex-col gap-3 pt-3 pb-3">

              <Input type="text" placeholder="full stack resume" value={resumeTitle} onChange={(e) => setResumeTitle(e.target.value)} />
            </DialogDescription>
            <div className="flex justify-between mt-4">
              <Button onClick={() => setOpenDialog(false)} variant="outline">Cancel</Button>
              <Button onClick={onCreate} disabled={!resumeTitle || loading}>{loading ?<Loader2 className="animate-spin"/>:"Create"}    </Button>
            </div>
          </DialogHeader>
        </DialogContent>
      </Dialog>

    </div>
  )
}
