

export default function SkillsPreview({ resumeInfo }) {
    return (
        <div className="my-6">
            <h2 className="text-center  font-bold text-sm mb-2 " style={{ color: resumeInfo?.themeColor }}>Skills</h2>
            <div className="grid grid-cols-2 gap-3 my-3">
                {
                    resumeInfo?.skills.map((el, i) => (
                        <div key={i} className="text-sm grid grid-cols-2 items-center">
                      
                                <span>{el?.name}</span>
                                <div className="h-2 bg-gray-200 w-[120px]">
                                    <div className="h-2 " style={{backgroundColor:resumeInfo?.themeColor,width:el?.rating+"%"}}>

                              
                                    </div>
                                </div>
                           
                        </div>
                    ))
                }
            </div>
        </div>
    )
}
