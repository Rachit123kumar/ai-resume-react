import { Result } from "postcss";


export default function EducationPreview({resumeInfo}) {
  return (
    <div className="my-6 ">
        <h2 className="text-center font-bold text-sm mb-2 " style={{color:resumeInfo?.themeColor}}>Education Preview</h2>
        <hr className="pt-4 " style={{color:resumeInfo?.themeColor}}/>
     {
        resumeInfo?.education.map((el,i)=>(
            <div key={i} className="mb-2">
          <p className="text-sm  font-bold"  style={{color:resumeInfo?.themeColor}} >{el?.degree} in {el?.major}</p>
          <div className="flex justify-between">

          <p className="text-sm font-bold ">{el?. UniversityName}  </p>
          <p className="text-sm font-bold">{el?.startDate} to {el?.endDate}</p>
          </div>
          <p className="text-sm">{el?.description}</p>


                </div>
        ))
     }
  
    </div>
  )
}
