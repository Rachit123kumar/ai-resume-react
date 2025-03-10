import { Notebook } from "lucide-react";

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Link } from "react-router-dom";
export default function ResumeCard({ resume }) {
  return (
    <Link to={`/dashboard/resume/${resume.resumeId}/edit`}>
      <div className="hover:scale-105 bg-gray-400 overflow-none rounded-md  transition-all">
        <CardHeader>
          <CardTitle></CardTitle>
          <CardDescription>{resume.title}</CardDescription>
        </CardHeader>
        <CardContent>
          <Notebook />
        </CardContent>
        <CardFooter>
          <p></p>
        </CardFooter>
      </div>
    </Link>

  )
}
