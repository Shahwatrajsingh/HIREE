import React, { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Card, CardHeader, CardContent, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

const PostJob = () => {
  const [formData, setFormData] = useState({
    title: '',
    location: '',
    salary: '',
    duration: '',
    type: '',
    description: '',
    requirements: '',
    contactInfo: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSelectChange = (value, name) => {
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    // Here you would typically make an API call to save the job posting
    console.log('Form submitted:', formData);
    // Add your API call here
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <Card className="max-w-2xl mx-auto">
        <CardHeader>
          <CardTitle className="text-2xl font-bold text-center">Post a New Job</CardTitle>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="space-y-2">
              <Label htmlFor="title">Job Title</Label>
              <Input
                id="title"
                name="title"
                placeholder="e.g., Construction Worker"
                value={formData.title}
                onChange={handleChange}
                required
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="location">Location</Label>
              <Input
                id="location"
                name="location"
                placeholder="e.g., Mumbai, Maharashtra"
                value={formData.location}
                onChange={handleChange}
                required
              />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="salary">Daily Wage (₹)</Label>
                <Input
                  id="salary"
                  name="salary"
                  type="number"
                  placeholder="e.g., 500"
                  value={formData.salary}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="duration">Duration</Label>
                <Select
                  name="duration"
                  onValueChange={(value) => handleSelectChange(value, 'duration')}
                >
                  <SelectTrigger>
                    <SelectValue placeholder="Select duration" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="oneDay">One Day</SelectItem>
                    <SelectItem value="weekly">Weekly</SelectItem>
                    <SelectItem value="monthly">Monthly</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>

            <div className="space-y-2">
              <Label htmlFor="type">Job Type</Label>
              <Select
                name="type"
                onValueChange={(value) => handleSelectChange(value, 'type')}
              >
                <SelectTrigger>
                  <SelectValue placeholder="Select job type" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="construction">Construction</SelectItem>
                  <SelectItem value="farming">Farming</SelectItem>
                  <SelectItem value="cleaning">Cleaning</SelectItem>
                  <SelectItem value="loading">Loading/Unloading</SelectItem>
                  <SelectItem value="other">Other</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div className="space-y-2">
              <Label htmlFor="description">Job Description</Label>
              <Textarea
                id="description"
                name="description"
                placeholder="Describe the job responsibilities and requirements..."
                value={formData.description}
                onChange={handleChange}
                className="h-32"
                required
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="requirements">Requirements</Label>
              <Textarea
                id="requirements"
                name="requirements"
                placeholder="List any specific requirements or skills needed..."
                value={formData.requirements}
                onChange={handleChange}
                className="h-24"
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="contactInfo">Contact Information</Label>
              <Input
                id="contactInfo"
                name="contactInfo"
                placeholder="Phone number or email"
                value={formData.contactInfo}
                onChange={handleChange}
                required
              />
            </div>

            <Button type="submit" className="w-full" variant="blue">
              Post Job
            </Button>
          </form>
        </CardContent>
      </Card>
    </div>
  );
};

export default PostJob;