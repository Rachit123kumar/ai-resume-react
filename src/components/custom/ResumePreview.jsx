import { useContext } from "react"
import { ResumeInfoContext } from "../../context/ResumeContxt"
import PersonInforPreview from "../preview/PersonInforPreview"
import ExperiencePrieview from "../preview/ExperiencePrieview"
import SummaryPreview from "../preview/SummaryPreview"
import EducationPreview from "../preview/EducationPreview"
import SkillsPreview from "../preview/SkillsPreview"


export default function ResumePreview() {
  const { resumeInfo, setResumeInfo } = useContext(ResumeInfoContext)

  if(!resumeInfo){
    return "Loading..."
  }
  return (<div className="h-full shadow-lg p-14 border-t-[20px]" style={{ borderColor: resumeInfo?.themeColor }}>
    <PersonInforPreview resumeInfo={resumeInfo} />
    <SummaryPreview resumeInfo={resumeInfo} />
    <ExperiencePrieview resumeInfo={resumeInfo} setResumeInfo={setResumeInfo} />
    <EducationPreview  resumeInfo={resumeInfo}/>
    <SkillsPreview resumeInfo={resumeInfo}/>
  </div>)
}
