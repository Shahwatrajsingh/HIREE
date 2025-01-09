// import { useEffect, useState } from "react";
// import { useUser } from "@clerk/clerk-react";
// import { State } from "country-state-city";
// import { BarLoader } from "react-spinners";
// import useFetch from "@/hooks/use-fetch";

// import JobCard from "@/components/job-card";
// import { Button } from "@/components/ui/button";
// import { Input } from "@/components/ui/input";
// import {
//   Select,
//   SelectContent,
//   SelectGroup,
//   SelectItem,
//   SelectTrigger,
//   SelectValue,
// } from "@/components/ui/select";

// import { getCompanies } from "@/api/apiCompanies";
// import { getJobs } from "@/api/apiJobs";

// const JobListing = () => {
//   const [searchQuery, setSearchQuery] = useState("");
//   const [location, setLocation] = useState("");
//   const [company_id, setCompany_id] = useState("");

//   const { isLoaded } = useUser();

//   const {
//     // loading: loadingCompanies,
//     data: companies,
//     fn: fnCompanies,
//   } = useFetch(getCompanies);

//   const {
//     loading: loadingJobs,
//     data: jobs,
//     fn: fnJobs,
//   } = useFetch(getJobs);
  
//   useEffect(() => {
//     console.log('Loading:', loadingJobs);
//     console.log('Jobs:', jobs);
//     fnJobs();
//   }, []);

//   useEffect(() => {
//     if (isLoaded) fnJobs();
//     // eslint-disable-next-line react-hooks/exhaustive-deps
//   }, [isLoaded, location, company_id, searchQuery]);

//   const handleSearch = (e) => {
//     e.preventDefault();
//     let formData = new FormData(e.target);

//     const query = formData.get("search-query");
//     if (query) setSearchQuery(query);
//   };

//   const clearFilters = () => {
//     setSearchQuery("");
//     setCompany_id("");
//     setLocation("");
//   };

//   if (!isLoaded) {
//     return <BarLoader className="mb-4" width={"100%"} color="#36d7b7" />;
//   }

//   return (
//     <div className="">
//       <h1 className="gradient-title font-extrabold text-6xl sm:text-7xl text-center pb-8">
//         Latest Jobs
//       </h1>
//       <form
//         onSubmit={handleSearch}
//         className="h-14 flex flex-row w-full gap-2 items-center mb-3"
//       >
//         <Input
//           type="text"
//           placeholder="Search Work by Title.."
//           name="search-query"
//           className="h-full flex-1  px-4 text-md"
//         />
//         <Button type="submit" className="h-full sm:w-28" variant="blue">
//           Search
//         </Button>
//       </form>

//       <div className="flex flex-col sm:flex-row gap-2">
//         <Select value={location} onValueChange={(value) => setLocation(value)}>
//           <SelectTrigger>
//             <SelectValue placeholder="Filter by Location" />
//           </SelectTrigger>
//           <SelectContent>
//             <SelectGroup>
//               {State.getStatesOfCountry("IN").map(({ name }) => {
//                 return (
//                   <SelectItem key={name} value={name}>
//                     {name}
//                   </SelectItem>
//                 );
//               })}
//             </SelectGroup>
//           </SelectContent>
//         </Select>

//         <Select
//           value={company_id}
//           onValueChange={(value) => setCompany_id(value)}
//         >
//           <SelectTrigger>
//             <SelectValue placeholder="Filter by Profession" />
//           </SelectTrigger>
//           <SelectContent>
//             <SelectGroup>
//               {companies?.map(({ name, id }) => {
//                 return (
//                   <SelectItem key={name} value={id}>
//                     {name}
//                   </SelectItem>
//                 );
//               })}
//             </SelectGroup>
//           </SelectContent>
//         </Select>
//         <Button
//           className="sm:w-1/2"
//           variant="destructive"
//           onClick={clearFilters}
//         >
//           Clear Filters
//         </Button>
//       </div>

//       {loadingJobs && (
//         <BarLoader className="mt-4" width={"100%"} color="#36d7b7" />
//       )}

//       {loadingJobs === false && (
//         <div className="mt-8 grid md:grid-cols-2 lg:grid-cols-3 gap-4">
//           {jobs?.length ? (
//             jobs.map((job) => {
//               return (
//                 <JobCard
//                   key={job.id}
//                   job={job}
//                   savedInit={job?.saved?.length > 0}
//                 />
//               );
//             })
//           ) : (
//             <div>No Jobs Found 😢</div>
//           )}
//         </div>
//       )}
//     </div>
//   );
// };

// export default JobListing;



// import { useEffect, useState } from "react";
// import { useUser } from "@clerk/clerk-react";
// import { State } from "country-state-city";
// import { BarLoader } from "react-spinners";
// import useFetch from "@/hooks/use-fetch";

// import JobCard from "@/components/job-card";
// import { Button } from "@/components/ui/button";
// import { Input } from "@/components/ui/input";
// import {
//   Select,
//   SelectContent,
//   SelectGroup,
//   SelectItem,
//   SelectTrigger,
//   SelectValue,
// } from "@/components/ui/select";

// import { getCompanies } from "@/api/apiCompanies";
// import { getJobs } from "@/api/apiJobs";

// // Predefined jobs
// const predefinedJobs = [
//   // const serviceOrientedJobs = [
//     {
//       id: "1",
//       title: "House Cleaning Assistant",
//       company: { name: "Residential Property" },
//       location: "Crossing Republik, Ghaziabad",
//       pay: "₹1500 - ₹2000 per session",
//       description: 
//         "Assist in maintaining cleanliness and organization of a private residence. Flexible timings and tools provided. Suitable for individuals with a knack for thorough cleaning.",
//       requirements: ["Basic cleaning skills", "Punctuality", "Hardworking attitude"],
//     },
//     {
//       id: "2",
//       title: "Carpentry Helper",
//       company: { name: "Local Furniture Workshop" },
//       location: "Mumbai, Maharashtra",
//       pay: "₹500 - ₹800 per day",
//       description: 
//         "Support experienced carpenters in creating custom furniture and repairing wooden items. Gain hands-on experience in woodworking techniques.",
//       requirements: ["Willingness to learn", "Basic handling of tools", "Physical fitness"],
//     },
//     {
//       id: "3",
//       title: "Gardener",
//       company: { name: "Green Spaces Landscaping" },
//       location: "Delhi, NCR",
//       pay: "₹1000 - ₹1500 per day",
//       description: 
//         "Maintain gardens and green spaces by planting, watering, and pruning plants. Work outdoors in a friendly environment.",
//       requirements: ["Knowledge of basic gardening tools", "Love for plants", "Punctuality"],
//     },
//     {
//       id: "4",
//       title: "Home Painting Assistant",
//       company: { name: "Rainbow Painters" },
//       location: "Hyderabad, Telangana",
//       pay: "₹800 - ₹1200 per day",
//       description: 
//         "Assist professional painters in preparing surfaces and applying paints. No prior experience needed; training will be provided on the job.",
//       requirements: ["Willingness to learn", "Attention to detail", "Ability to work in teams"],
//     },
//     {
//       id: "5",
//       title: "Plumbing Assistant",
//       company: { name: "QuickFix Plumbing Services" },
//       location: "Pune, Maharashtra",
//       pay: "₹900 - ₹1200 per day",
//       description: 
//         "Work alongside experienced plumbers to install and repair pipes, faucets, and other plumbing fixtures. A great opportunity to learn a skilled trade.",
//       requirements: ["Basic tool knowledge", "Problem-solving skills", "Physical stamina"],
//     },
//     {
//       id: "6",
//       title: "Electrician's Helper",
//       company: { name: "Bright Sparks Electricals" },
//       location: "Bangalore, Karnataka",
//       pay: "₹800 - ₹1100 per day",
//       description: 
//         "Assist electricians in wiring homes and offices. Learn the basics of electrical systems and safety measures on the job.",
//       requirements: ["Willingness to learn", "Basic math skills", "Attention to safety protocols"],
//     },
//     {
//       id: "7",
//       title: "Household Cook",
//       company: { name: "Private Residence" },
//       location: "Jaipur, Rajasthan",
//       pay: "₹15,000 - ₹20,000 per month",
//       description: 
//         "Prepare daily meals for a family. Should be familiar with basic cooking techniques and maintaining kitchen hygiene.",
//       requirements: ["Cooking skills", "Cleanliness", "Time management"],
//     },
//     {
//       id: "8",
//       title: "Delivery Assistant",
//       company: { name: "Local Grocery Store" },
//       location: "Chennai, Tamil Nadu",
//       pay: "₹1000 - ₹1500 per day",
//       description: 
//         "Deliver groceries and small packages to customers within the city. Fuel allowance provided.",
//       requirements: ["Driver's license", "Time management", "Polite demeanor"],
//     },
//     {
//       id: "9",
//       title: "Security Guard",
//       company: { name: "SecureSafe Pvt. Ltd." },
//       location: "Kolkata, West Bengal",
//       pay: "₹12,000 - ₹18,000 per month",
//       description: 
//         "Ensure the safety and security of residential or commercial properties. Night and day shifts available.",
//       requirements: ["Basic fitness", "Alertness", "Polite communication skills"],
//     },
//     {
//       id: "10",
//       title: "Warehouse Worker",
//       company: { name: "QuickMove Logistics" },
//       location: "Ahmedabad, Gujarat",
//       pay: "₹900 - ₹1200 per day",
//       description: 
//         "Assist in loading, unloading, and organizing goods in the warehouse. Training provided for safe handling of materials.",
//       requirements: ["Physical fitness", "Teamwork", "Basic organizational skills"],
//     },
//   ];
  

// const JobListing = () => {
//   const [searchQuery, setSearchQuery] = useState("");
//   const [location, setLocation] = useState("");
//   const [company_id, setCompany_id] = useState("");

//   const { isLoaded } = useUser();

//   const {
//     data: companies,
//     fn: fnCompanies,
//   } = useFetch(getCompanies);

//   const {
//     loading: loadingJobs,
//     data: jobs,
//     fn: fnJobs,
//   } = useFetch(getJobs);
  
//   useEffect(() => {
//     console.log('Loading:', loadingJobs);
//     console.log('Jobs:', jobs);
//     fnJobs();
//   }, []);

//   useEffect(() => {
//     if (isLoaded) fnJobs();
//     // eslint-disable-next-line react-hooks/exhaustive-deps
//   }, [isLoaded, location, company_id, searchQuery]);

//   const handleSearch = (e) => {
//     e.preventDefault();
//     let formData = new FormData(e.target);

//     const query = formData.get("search-query");
//     if (query) setSearchQuery(query);
//   };

//   const clearFilters = () => {
//     setSearchQuery("");
//     setCompany_id("");
//     setLocation("");
//   };

//   if (!isLoaded) {
//     return <BarLoader className="mb-4" width={"100%"} color="#36d7b7" />;
//   }

//   return (
//     <div className="">
//       <h1 className="gradient-title font-extrabold text-6xl sm:text-7xl text-center pb-8">
//         Latest Jobs
//       </h1>
//       <form
//         onSubmit={handleSearch}
//         className="h-14 flex flex-row w-full gap-2 items-center mb-3"
//       >
//         <Input
//           type="text"
//           placeholder="Search Work by Title.."
//           name="search-query"
//           className="h-full flex-1  px-4 text-md"
//         />
//         <Button type="submit" className="h-full sm:w-28" variant="blue">
//           Search
//         </Button>
//       </form>

//       <div className="flex flex-col sm:flex-row gap-2">
//         <Select value={location} onValueChange={(value) => setLocation(value)}>
//           <SelectTrigger>
//             <SelectValue placeholder="Filter by Location" />
//           </SelectTrigger>
//           <SelectContent>
//             <SelectGroup>
//               {State.getStatesOfCountry("IN").map(({ name }) => {
//                 return (
//                   <SelectItem key={name} value={name}>
//                     {name}
//                   </SelectItem>
//                 );
//               })}
//             </SelectGroup>
//           </SelectContent>
//         </Select>

//         <Select
//           value={company_id}
//           onValueChange={(value) => setCompany_id(value)}
//         >
//           <SelectTrigger>
//             <SelectValue placeholder="Filter by Profession" />
//           </SelectTrigger>
//           <SelectContent>
//             <SelectGroup>
//               {companies?.map(({ name, id }) => {
//                 return (
//                   <SelectItem key={name} value={id}>
//                     {name}
//                   </SelectItem>
//                 );
//               })}
//             </SelectGroup>
//           </SelectContent>
//         </Select>
//         <Button
//           className="sm:w-1/2"
//           variant="destructive"
//           onClick={clearFilters}
//         >
//           Clear Filters
//         </Button>
//       </div>

//       {loadingJobs && (
//         <BarLoader className="mt-4" width={"100%"} color="#36d7b7" />
//       )}

//       {loadingJobs === false && (
//         <div className="mt-8 grid md:grid-cols-2 lg:grid-cols-3 gap-4">
//           {(jobs?.length ? jobs : predefinedJobs).map((job) => {
//             return (
//               <JobCard
//                 key={job.id}
//                 job={job}
//                 savedInit={job?.saved?.length > 0}
//               />
//             );
//           })}
//         </div>
//       )}
//     </div>
//   );
// };

// export default JobListing;


import React, { useState, useEffect } from 'react';
import { Loader2 } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { Card, CardContent } from '@/components/ui/card';

// Sample Indian states data
const indianStates = [
  "Karnataka",
  "Maharashtra",
  "Delhi",
  "Telangana",
  "Tamil Nadu",
  "Uttar Pradesh",
  "Gujarat"
];

// Sample companies data
const companiesList = [
  { id: "1", name: "Warehouse Worker" },
  { id: "2", name: "Electrician's Helper" },
  { id: "3", name: "House Cleaning Assistant" },
  { id: "4", name: "Home Painting Assistant " },
  { id: "5", name: "Plumbing Assistant" },
  { id: "4", name: "Household Cook " },
  { id: "5", name: "Delivery Assistant" }
];

// Predefined jobs (keeping the same data)
 const predefinedJobs = [
  
    {
      id: "1",
      title: "House Cleaning Assistant",
      company: { name: "Residential Property" },
      location: "Crossing Republik, Ghaziabad",
      pay: "₹1500 - ₹2000 per session",
      description: 
        "Assist in maintaining cleanliness and organization of a private residence. Flexible timings and tools provided. Suitable for individuals with a knack for thorough cleaning.",
      requirements: ["Basic cleaning skills", "Punctuality", "Hardworking attitude"],
    },
    {
      id: "2",
      title: "Carpentry Helper",
      company: { name: "Local Furniture Workshop" },
      location: "Mumbai, Maharashtra",
      pay: "₹500 - ₹800 per day",
      description: 
        "Support experienced carpenters in creating custom furniture and repairing wooden items. Gain hands-on experience in woodworking techniques.",
      requirements: ["Willingness to learn", "Basic handling of tools", "Physical fitness"],
    },
    {
      id: "3",
      title: "Gardener",
      company: { name: "Green Spaces Landscaping" },
      location: "Delhi, NCR",
      pay: "₹1000 - ₹1500 per day",
      description: 
        "Maintain gardens and green spaces by planting, watering, and pruning plants. Work outdoors in a friendly environment.",
      requirements: ["Knowledge of basic gardening tools", "Love for plants", "Punctuality"],
    },
    {
      id: "4",
      title: "Home Painting Assistant",
      company: { name: "Rainbow Painters" },
      location: "Hyderabad, Telangana",
      pay: "₹800 - ₹1200 per day",
      description: 
        "Assist professional painters in preparing surfaces and applying paints. No prior experience needed; training will be provided on the job.",
      requirements: ["Willingness to learn", "Attention to detail", "Ability to work in teams"],
    },
    {
      id: "5",
      title: "Plumbing Assistant",
      company: { name: "QuickFix Plumbing Services" },
      location: "Pune, Maharashtra",
      pay: "₹900 - ₹1200 per day",
      description: 
        "Work alongside experienced plumbers to install and repair pipes, faucets, and other plumbing fixtures. A great opportunity to learn a skilled trade.",
      requirements: ["Basic tool knowledge", "Problem-solving skills", "Physical stamina"],
    },
    {
      id: "6",
      title: "Electrician's Helper",
      company: { name: "Bright Sparks Electricals" },
      location: "Bangalore, Karnataka",
      pay: "₹800 - ₹1100 per day",
      description: 
        "Assist electricians in wiring homes and offices. Learn the basics of electrical systems and safety measures on the job.",
      requirements: ["Willingness to learn", "Basic math skills", "Attention to safety protocols"],
    },
    {
      id: "7",
      title: "Household Cook",
      company: { name: "Private Residence" },
      location: "Jaipur, Rajasthan",
      pay: "₹15,000 - ₹20,000 per month",
      description: 
        "Prepare daily meals for a family. Should be familiar with basic cooking techniques and maintaining kitchen hygiene.",
      requirements: ["Cooking skills", "Cleanliness", "Time management"],
    },
    {
      id: "8",
      title: "Delivery Assistant",
      company: { name: "Local Grocery Store" },
      location: "Chennai, Tamil Nadu",
      pay: "₹1000 - ₹1500 per day",
      description: 
        "Deliver groceries and small packages to customers within the city. Fuel allowance provided.",
      requirements: ["Driver's license", "Time management", "Polite demeanor"],
    },
    {
      id: "9",
      title: "Security Guard",
      company: { name: "SecureSafe Pvt. Ltd." },
      location: "Kolkata, West Bengal",
      pay: "₹12,000 - ₹18,000 per month",
      description: 
        "Ensure the safety and security of residential or commercial properties. Night and day shifts available.",
      requirements: ["Basic fitness", "Alertness", "Polite communication skills"],
    },
    {
      id: "10",
      title: "Warehouse Worker",
      company: { name: "QuickMove Logistics" },
      location: "Ahmedabad, Gujarat",
      pay: "₹900 - ₹1200 per day",
      description: 
        "Assist in loading, unloading, and organizing goods in the warehouse. Training provided for safe handling of materials.",
      requirements: ["Physical fitness", "Teamwork", "Basic organizational skills"],
    },
  ];
  

// JobCard component
const JobCard = ({ job, savedInit = false }) => {
  const [isSaved, setIsSaved] = useState(savedInit);

  return (
    <Card className="overflow-hidden">
      <CardContent className="p-6">
        <h3 className="text-xl font-bold mb-2">{job.title}</h3>
        <p className="text-gray-600 mb-2">{job.company.name}</p>
        <p className="text-gray-500 mb-2">{job.location}</p>
        <p className="text-green-600 mb-2">{job.salary}</p>
        <p className="text-gray-700 mb-4">{job.description}</p>
        <div className="flex justify-between items-center">
          <Button variant="blue">Apply Now</Button>
          <Button 
            variant={isSaved ? "outline" : "secondary"}
            onClick={() => setIsSaved(!isSaved)}
          >
            {isSaved ? "Saved" : "Save Job"}
          </Button>
        </div>
      </CardContent>
    </Card>
  );
};

const JobListing = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [location, setLocation] = useState("");
  const [companyId, setCompanyId] = useState("");
  const [loading, setLoading] = useState(false);
  const [jobs, setJobs] = useState(predefinedJobs);

  useEffect(() => {
    // Simulate loading jobs
    setLoading(true);
    setTimeout(() => {
      setJobs(predefinedJobs);
      setLoading(false);
    }, 1000);
  }, []);

  const handleSearch = (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const query = formData.get("search-query");
    if (query) setSearchQuery(query);
  };

  const clearFilters = () => {
    setSearchQuery("");
    setCompanyId("");
    setLocation("");
  };

  const filterJobs = (jobs) => {
    return jobs.filter((job) => {
      const matchesLocation = !location || job.location.includes(location);
      const matchesSearch = !searchQuery || job.title.toLowerCase().includes(searchQuery.toLowerCase());
      const matchesCompany = !companyId || job.company.id === companyId;
      return matchesLocation && matchesSearch && matchesCompany;
    });
  };

  if (loading) {
    return (
      <div className="w-full flex justify-center p-4">
        <Loader2 className="h-8 w-8 animate-spin text-blue-500" />
      </div>
    );
  }

  return (
    <div className="">
      <h1 className="gradient-title font-extrabold text-6xl sm:text-7xl text-center pb-8">
        Latest Jobs
      </h1>
      <form
        onSubmit={handleSearch}
        className="h-14 flex flex-row w-full gap-2 items-center mb-3"
      >
        <Input
          type="text"
          placeholder="Search Work by Title.."
          name="search-query"
          className="h-full flex-1 px-4 text-md"
        />
        <Button type="submit" className="h-full sm:w-28" variant="blue">
          Search
        </Button>
      </form>

      <div className="flex flex-col sm:flex-row gap-2">
        <Select value={location} onValueChange={setLocation}>
          <SelectTrigger>
            <SelectValue placeholder="Filter by Location" />
          </SelectTrigger>
          <SelectContent>
            <SelectGroup>
              {indianStates.map((state) => (
                <SelectItem key={state} value={state}>
                  {state}
                </SelectItem>
              ))}
            </SelectGroup>
          </SelectContent>
        </Select>

        <Select value={companyId} onValueChange={setCompanyId}>
          <SelectTrigger>
            <SelectValue placeholder="Filter by Profession" />
          </SelectTrigger>
          <SelectContent>
            <SelectGroup>
              {companiesList.map(({ name, id }) => (
                <SelectItem key={id} value={id}>
                  {name}
                </SelectItem>
              ))}
            </SelectGroup>
          </SelectContent>
        </Select>
        
        <Button
          className="sm:w-1/2"
          variant="destructive"
          onClick={clearFilters}
        >
          Clear Filters
        </Button>
      </div>

      <div className="mt-8 grid md:grid-cols-2 lg:grid-cols-3 gap-4">
        {filterJobs(jobs).map((job) => (
          <JobCard
            key={job.id}
            job={job}
            savedInit={job?.saved?.length > 0}
          />
        ))}
      </div>
    </div>
  );
};

export default JobListing;