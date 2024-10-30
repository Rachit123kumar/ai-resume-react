

export default function SummaryPreview({resumeInfo}) {
  return (
    <div >
        <p className="text-sm font-semibold">

 {
     resumeInfo?.summary
    }
    </p>
    </div>
  )
}
