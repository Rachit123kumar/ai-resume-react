import { Button } from "../ui/button"
import { Input } from "../ui/input"
import { useEffect, useState } from "react"
import RichTextEditor from "./RichTextEditor"




const formField = {
    title: "",
    companyName: "",
    city: "",
    state: "",
    startDate: "",
    endDate: "",
    workSummary: ""

}


export default function Experience() {
    const [experienceList, setExperienceList] = useState([
        formField
    ])


     function addNewExperience(){
        setExperienceList([...experienceList,formField])
        console.log(experienceList)
     }


    function handleChange(i,e){
const newEnteries=experienceList.slice();
const {name,value}=e.target
newEnteries[i][name]=value
setExperienceList(newEnteries)

    }

    function RemoveExperience(){
        setExperienceList(exp=>exp.splice(-1, 1))
    }


    useEffect(()=>{
console.log(experienceList)
    },[experienceList])
    return (
        <div>

            <div className="p-5 rounded-lg shadow-lg border-t-primary border-t-8 mt-4">
                <h2 className="font-bold text-large">Add Proffessional Experience Details</h2>
                <p className="text-sm font-md mt-4">Add experience of your job</p>
                <div>
                    {
                        experienceList.map((el, i) => (
                            <div key={i} className="border-t-4 mt-3">
                             
                                <div>
                                    <div className="grid grid-cols-2 mt-4 gap-3">
                                        <div>
                                            <label className="text-sm ">Position title</label>
                                            <Input type="text" name="title" onChange={(e)=>handleChange(i,e)}/>
                                        </div>
                                        <div>
                                            <label className="text-sm ">Company Name</label>
                                            <Input type="text" name="companyName" onChange={(e)=>handleChange(i,e)}/>
                                        </div>
                                        <div>
                                            <label className="text-sm ">City</label>
                                            <Input type="text" name="city" onChange={(e)=>handleChange(i,e)}/>
                                        </div>
                                        <div>
                                            <label className="text-sm ">State</label>
                                            <Input type="text" name="state" onChange={(e)=>handleChange(i,e)}/>
                                        </div>
                                        <div>
                                            <label className="text-sm ">Start Date</label>
                                            <Input type="date" name="startDate" onChange={(e)=>handleChange(i,e)}/>
                                        </div>
                                        <div>
                                            <label className="text-sm ">End Date</label>
                                            <Input type="date" name="endDate" onChange={(e)=>handleChange(i,e)}/>
                                        </div>
                                        <div className="col-span-2 mt-3 ">
                                            <RichTextEditor/>
                                        </div>
                                    </div>
                                </div>

                            </div>
                        ))
                    }
                </div>
                 <div className="mt-4 flex justify-between">
              <div className="space-x-3">

                <Button  variant="outline" onClick={addNewExperience}>+ Add Experience</Button>
                <Button  className="bg-red-400" onClick={RemoveExperience}>- Remove </Button>
              </div>
                <Button > Save </Button>
                 </div>
                <div>

                </div>
            </div>
        </div>
    )
}
