import { useState } from 'react'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

export default function JobPostingForm() {
  const [jobType, setJobType] = useState('')

//   const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
//     event.preventDefault()
//     // Here you would typically send the form data to your backend
//     console.log('Form submitted')
//   }

  return (
    <Card className="w-full max-w-2xl mx-auto">
      <CardHeader>
        <CardTitle>Post a New Job</CardTitle>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label htmlFor="jobTitle" className="block text-sm font-medium mb-1">Job Title</label>
            <Input id="jobTitle" placeholder="e.g. Senior React Developer" required />
          </div>
          <div>
            <label htmlFor="jobType" className="block text-sm font-medium mb-1">Job Type</label>
            <Select onValueChange={setJobType} required>
              <SelectTrigger>
                <SelectValue placeholder="Select job type" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="fullTime">Full-time</SelectItem>
                <SelectItem value="partTime">Part-time</SelectItem>
                <SelectItem value="contract">Contract</SelectItem>
                <SelectItem value="freelance">Freelance</SelectItem>
              </SelectContent>
            </Select>
          </div>
          <div>
            <label htmlFor="location" className="block text-sm font-medium mb-1">Location</label>
            <Input id="location" placeholder="e.g. New York, NY or Remote" required />
          </div>
          <div>
            <label htmlFor="salary" className="block text-sm font-medium mb-1">Salary Range</label>
            <Input id="salary" placeholder="e.g. $80,000 - $120,000" required />
          </div>
          <div>
            <label htmlFor="description" className="block text-sm font-medium mb-1">Job Description</label>
            <Textarea id="description" placeholder="Enter job description..." required />
          </div>
          <div>
            <label htmlFor="requirements" className="block text-sm font-medium mb-1">Requirements</label>
            <Textarea id="requirements" placeholder="Enter job requirements..." required />
          </div>
          <Button type="submit" className="w-full">Post Job</Button>
        </form>
      </CardContent>
    </Card>
  )
}

