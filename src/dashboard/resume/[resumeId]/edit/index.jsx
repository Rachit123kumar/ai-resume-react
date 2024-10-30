import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import FormSection from "../../../../components/custom/FormSection";
import ResumePreview from "../../../../components/custom/ResumePreview";
import { ResumeInfoContext } from "../../../../context/ResumeContxt";
import dummydata from "../../../../data/dummydata";

export default function EditResume() {

  const [resumeInfo, setResumeInfo] = useState("")
  const params = useParams();


  useEffect(() => {
    console.log(params)
    setResumeInfo(dummydata)

  }, [])
  return (
    <ResumeInfoContext.Provider value={{ resumeInfo, setResumeInfo }}>

   
      <div className="max-w-[1300px] mx-auto grid  grid-cols-1 md:grid-cols-2 gap-5 ">


        {/* form Section */}
        <FormSection />

        <ResumePreview />
        {/* Preview section */}

   
        </div>
    </ResumeInfoContext.Provider>
  )
}
