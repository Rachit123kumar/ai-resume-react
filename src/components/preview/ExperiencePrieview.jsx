

export default function ExperiencePrieview({resumeInfo}) {
    // console.log(resumeInfo, "i am from experience page")
  return (
    <div className="mt-3">
      <h2 className="text-center font-bold text-sm mb-2 " style={{color:resumeInfo?.themeColor}}>Proffession Experience</h2>
      <hr/>
      {
        resumeInfo?.experience.map((el,key)=>(
         <div key={key} className="mb-1 mt-5">
            <span className="text-sm "></span>
            <span className="text-sm font-bold line-clamp-1">  { el.title}</span>
            <h2 className="text-sm flex justify-between"><span>{el?.companyName}</span> <span> {el?.state} {el?.city}</span></h2>
           
            <span className="text-sm font-normal line-clamp-1">{el?.startDate}  {el.curcurrentlyWorking ? "Present":` to ${el?.endDate}`} {}</span>
            
            
            <p className="mb-2 text-sm mt-3 font-semibold">{el?.workSummary}</p>
         </div>   
        ))
      }

    </div>
  )
}
