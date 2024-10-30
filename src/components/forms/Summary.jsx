import { useContext, useState } from "react";
import { Button } from "../ui/button";
import { Textarea } from "@/components/ui/textarea"
import { ResumeInfoContext } from "../../context/ResumeContxt";
import { useParams } from "react-router-dom";
import { updateSummary } from "../../services/apiResume";

import { FaBrain } from "react-icons/fa6";
import { run } from "../../services/Almodel";
// import { chatSession, run } from "../../services/Almodel";

export default function Summary() {
    const prompt = "Job titlte: Marketing designer, Depends on job title give me summary for my resume within 4-5 lines in JSON format with field experience level and Summary with experience level for Fresher, Mid-Level ,Experience"
    const params = useParams();
    const resumeId = params.resumeId;
    // console.log(resumeId);
    const { resumeInfo, setResumeInfo } = useContext(ResumeInfoContext);
    const [formData, setFormData] = useState("")
    const [loading, setLoading] = useState(false)
    const [aiGeneratedSummaryList,setAiGeneratesSummary]=useState("")


    function handleChange(e) {
        setResumeInfo({ ...resumeInfo, summary: e.target.value })
        const { value } = e.target
        setFormData({
            ...formData,
            resumeId,
            summary: value
        })
    }

async function generatefromAI(){

    setLoading(true)
    const PROMPT=prompt.replace(`Job titlte`,resumeInfo?.jobTitle)
    const result=await run(PROMPT)
    console.log(result)
    setAiGeneratesSummary(result)
    console.log("setSummary",aiGeneratedSummaryList)
    setLoading(false)
}


    function handleSubmit(e) {
        e.preventDefault();
        setLoading(true)

        updateSummary(formData)
        setLoading(false)

        // Store the information inside the Database

    }

    if (!resumeInfo) {
        return "loading..."
    }


    return (
        <div>
            <div className="p-5 rounded-lg shadow-lg border-t-primary border-t-8 mt-4">
                <h2 className="font-bold text-large">Add summary details</h2>
                <p className="text-sm font-md mt-4">Add summary for your job title</p>


                <form onSubmit={handleSubmit} className="mt-7">
                    <div className=" flex justify-between">


                        <label>Add summary</label>

                        <Button variant="ghost" type="button" onClick={generatefromAI} className="border-primary " size="sm"> <FaBrain /> Generate from AI</Button>
                    </div>
                    <Textarea className="mt-5" required name="summary" onChange={handleChange} />


                    {
                        loading ? <button className="mt-4 bg-purple-600"><svg className="  bg-purple-300 animate-spin h-3 w-3 mr-3 ..." viewBox="0 0 24 24"></svg></button> : <Button className="mt-3" type="submit" >Save</Button>
                    }

                </form>
            </div>

        </div>
    )
}
