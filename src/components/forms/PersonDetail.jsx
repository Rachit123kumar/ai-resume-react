import { useContext, useState } from "react"
import { ResumeInfoContext } from "../../context/ResumeContxt"
import { Input } from "../ui/input"
import { Button } from "../ui/button"

import { useParams } from "react-router-dom";
import { updatePersonDetails } from "../../services/apiResume"

export default function PersonDetail({setEnableNext}) {

    const params=useParams()
    const {resumeInfo,setResumeInfo}=useContext(ResumeInfoContext)

    const [formData,setFormData]=useState({
        
            firstName: resumeInfo?.firstName || "",
            lastName: resumeInfo?.lastName || "",
            jobTitle: resumeInfo?.jobTitle || "",
            address: resumeInfo?.address || "",
            phone: resumeInfo?.phone || "",
            email: resumeInfo?.email || ""
          
    });
 

    if(!resumeInfo){
        return "loading..."
    }
    function handleInputChange(e){
        // firstName:"Bittu",
        // lastName:"kumar",
        // jobTitle:"Full stack web developer",
        // address:"Gohran Raod pao bhaji Club",
        // phone:"9847932846",
        // email:"hellobittukumar12@gmail.com",
        setEnableNext(false)

        const {name,value}=e.target;
     setFormData((prevData)=>(
        {
            ...prevData,
            [name]:value
        })
     )
     

        setResumeInfo(
            {
                ...resumeInfo,
                [name]:value
            }
        )
    }


  


        const  onSave=(e)=>{
            e.preventDefault()
            setEnableNext(true)
            const data={
                // ...formData,
                firstName:resumeInfo?.firstName,
                lastName:resumeInfo?.lastName,
                email:resumeInfo?.email,
                address:resumeInfo?.address,
                phone:resumeInfo?.phone,
                jobTitle:resumeInfo?.jobTitle,


                resumeId:params.resumeId
                
                // summary:"hello"
            }
            console.log(data,"I am form Data")
            updatePersonDetails(data)


        }

        // useEffect(()=>{
        //     setResumeId(params.resumeId)
        //         },[])

  return (
    <div className="p-5 rounded-lg shadow-lg border-t-primary border-t-8 mt-4">
      <h2 className="font-bold text-large">Personal Details</h2>
      <p>Get started with some basic information </p>
      <form onSubmit={onSave}>
        <div className="grid grid-cols-2 mt-5 gap-3">
            <div className="mt-3">
                <label className="text-sm">FirstName</label>
                <Input required type="text" value={resumeInfo?.firstName} name="firstName" onChange={handleInputChange}   placeholder="Rohan"/>
            </div>
            <div className="mt-3">
                <label className="text-sm">LastName</label>
                <Input required type="text" name="lastName" value={resumeInfo?.lastName} onChange={handleInputChange} placeholder="Chanad"/>
            </div>
            <div className="mt-3">
                <label className="text-sm">Job Title</label>
                <Input required type="text" name="jobTitle" value={resumeInfo?.jobTitle} onChange={handleInputChange} placeholder="Marketing "/>
            </div>
            <div className="mt-3 col-span-2">
                <label className="text-sm">Address</label>
                <Input required type="text" name="address" value={resumeInfo?.address}  onChange={handleInputChange} placeholder="London City NewYork"/>
            </div>
            <div className="mt-3">
                <label className="text-sm">Phone</label>
                <Input required type="text" name="phone" value={resumeInfo?.phone} onChange={handleInputChange} placeholder="38642676"/>
            </div>
            <div className="mt-3">
                <label className="text-sm">Email</label>
                <Input required type="text" name="email" value={resumeInfo?.email} onChange={handleInputChange} placeholder="gmail@gmail.com"/>
            </div>
        </div>
        <Button type="submit" className="flex justify-end mt-3">Save </Button>

      </form>
    </div>
  )
}
