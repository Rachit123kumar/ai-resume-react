import { ArrowBigLeftDash, ArrowBigRight, LayoutGridIcon } from "lucide-react";
import PersonDetail from "../forms/PersonDetail";
import { Button } from "../ui/button";
import { useState } from "react";
import Summary from "../forms/Summary";
import Experience from "../forms/Experience";


export default function FormSection() {
  const [activeFormIndex,setActiveFormIndex]=useState(1);
  const [enableNext,setEnableNext]=useState(false);
  return (
    <div>
      <div className="flex justify-between mt-3 px-5">
        <Button variant={"outline"}><LayoutGridIcon/>  Theme</Button>
        <div className="flex items-center gap-3">
         {activeFormIndex >1 &&<Button onClick={()=>setActiveFormIndex(activeFormIndex-1)} className><ArrowBigLeftDash/>Back</Button> }
        <Button onClick={()=>setActiveFormIndex(activeFormIndex+1)} disabled={!enableNext}>Next <ArrowBigRight className="size-4" /></Button>
        </div>
      </div>
   {/* {Personal Information} */}
  { activeFormIndex==1 && <PersonDetail setEnableNext={setEnableNext}/>}
   {/* Summary */}

{activeFormIndex==2 &&<Summary/>}
   {/* Experience */}


{activeFormIndex==3 && <Experience/>}
   {/* Skills */}
    </div>
  )
}
