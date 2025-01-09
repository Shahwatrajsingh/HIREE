// import { getCompanies } from "@/api/apiCompanies";
// import { addNewJob } from "@/api/apiJobs";
// import AddCompanyDrawer from "@/components/add-company-drawer";
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
// import { Textarea } from "@/components/ui/textarea";
// import useFetch from "@/hooks/use-fetch";
// import { useUser } from "@clerk/clerk-react";
// import { zodResolver } from "@hookform/resolvers/zod";
// import MDEditor from "@uiw/react-md-editor";
// import { State } from "country-state-city";
// import { useEffect } from "react";
// import { Controller, useForm } from "react-hook-form";
// import { Navigate, useNavigate } from "react-router-dom";
// import { BarLoader } from "react-spinners";
// import { z } from "zod";

// const schema = z.object({
//   title: z.string().min(1, { message: "Title is required" }),
//   description: z.string().min(1, { message: "Description is required" }),
//   location: z.string().min(1, { message: "Select a location" }),
//   company_id: z.string().min(1, { message: "Select or Add a new Company" }),
//   requirements: z.string().min(1, { message: "Requirements are required" }),
// });

// const PostJob = () => {
//   const { user, isLoaded } = useUser();
//   const navigate = useNavigate();

//   const {
//     register,
//     handleSubmit,
//     control,
//     formState: { errors },
//   } = useForm({
//     defaultValues: { location: "", company_id: "", requirements: "" },
//     resolver: zodResolver(schema),
//   });

//   const {
//     loading: loadingCreateJob,
//     error: errorCreateJob,
//     data: dataCreateJob,
//     fn: fnCreateJob,
//   } = useFetch(addNewJob);

//   const onSubmit = (data) => {
//     fnCreateJob({
//       ...data,
//       recruiter_id: user.id,
//       isOpen: true,
//     });
//   };

//   useEffect(() => {
//     if (dataCreateJob?.length > 0) navigate("/jobs");
//   }, [loadingCreateJob]);

//   const {
//     loading: loadingCompanies,
//     data: companies,
//     fn: fnCompanies,
//   } = useFetch(getCompanies);

//   useEffect(() => {
//     if (isLoaded) {
//       fnCompanies();
//     }
//     // eslint-disable-next-line react-hooks/exhaustive-deps
//   }, [isLoaded]);

//   if (!isLoaded || loadingCompanies) {
//     return <BarLoader className="mb-4" width={"100%"} color="#36d7b7" />;
//   }

//   if (user?.unsafeMetadata?.role !== "recruiter") {
//     return <Navigate to="/jobs" />;
//   }

//   return (
//     <div>
//       <h1 className="gradient-title font-extrabold text-5xl sm:text-7xl text-center pb-8">
//         Post a Job
//       </h1>
//       <form
//         onSubmit={handleSubmit(onSubmit)}
//         className="flex flex-col gap-4 p-4 pb-0"
//       >
//         <Input placeholder="Job Title" {...register("title")} />
//         {errors.title && <p className="text-red-500">{errors.title.message}</p>}

//         <Textarea placeholder="Job Description" {...register("description")} />
//         {errors.description && (
//           <p className="text-red-500">{errors.description.message}</p>
//         )}

//         <div className="flex gap-4 items-center">
//           <Controller
//             name="location"
//             control={control}
//             render={({ field }) => (
//               <Select value={field.value} onValueChange={field.onChange}>
//                 <SelectTrigger>
//                   <SelectValue placeholder="Job Location" />
//                 </SelectTrigger>
//                 <SelectContent>
//                   <SelectGroup>
//                     {State.getStatesOfCountry("IN").map(({ name }) => (
//                       <SelectItem key={name} value={name}>
//                         {name}
//                       </SelectItem>
//                     ))}
//                   </SelectGroup>
//                 </SelectContent>
//               </Select>
//             )}
//           />
//           <Controller
//             name="company_id"
//             control={control}
//             render={({ field }) => (
//               <Select value={field.value} onValueChange={field.onChange}>
//                 <SelectTrigger>
//                   <SelectValue placeholder="Company">
//                     {field.value
//                       ? companies?.find((com) => com.id === Number(field.value))
//                           ?.name
//                       : "Company"}
//                   </SelectValue>
//                 </SelectTrigger>
//                 <SelectContent>
//                   <SelectGroup>
//                     {companies?.map(({ name, id }) => (
//                       <SelectItem key={name} value={id}>
//                         {name}
//                       </SelectItem>
//                     ))}
//                   </SelectGroup>
//                 </SelectContent>
//               </Select>
//             )}
//           />
//           <AddCompanyDrawer fetchCompanies={fnCompanies} />
//         </div>
//         {errors.location && (
//           <p className="text-red-500">{errors.location.message}</p>
//         )}
//         {errors.company_id && (
//           <p className="text-red-500">{errors.company_id.message}</p>
//         )}

//         <Controller
//           name="requirements"
//           control={control}
//           render={({ field }) => (
//             <MDEditor value={field.value} onChange={field.onChange} />
//           )}
//         />
//         {errors.requirements && (
//           <p className="text-red-500">{errors.requirements.message}</p>
//         )}
//         {errors.errorCreateJob && (
//           <p className="text-red-500">{errors?.errorCreateJob?.message}</p>
//         )}
//         {errorCreateJob?.message && (
//           <p className="text-red-500">{errorCreateJob?.message}</p>
//         )}
//         {loadingCreateJob && <BarLoader width={"100%"} color="#36d7b7" />}
//         <Button type="submit" variant="blue" size="lg" className="mt-2">
//           Submit
//         </Button>
//       </form>
//     </div>
//   );
// };

// export default PostJob;




// import { getCompanies } from "@/api/apiCompanies";
// import { addNewJob } from "@/api/apiJobs";
// import AddCompanyDrawer from "@/components/add-company-drawer";
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
// import { Textarea } from "@/components/ui/textarea";
// import useFetch from "@/hooks/use-fetch";
// import { useUser } from "@clerk/clerk-react";
// import { zodResolver } from "@hookform/resolvers/zod";
// import MDEditor from "@uiw/react-md-editor";
// import { State } from "country-state-city";
// import { useEffect } from "react";
// import { Controller, useForm } from "react-hook-form";
// import { Navigate, useNavigate } from "react-router-dom";
// import { BarLoader } from "react-spinners";
// import { z } from "zod";

// const schema = z.object({
//   title: z.string().min(1, { message: "Title is required" }),
//   description: z.string().min(1, { message: "Description is required" }),
//   location: z.string().min(1, { message: "Select a location" }),
//   company_id: z.string().min(1, { message: "Select or Add a new Company" }),
//   requirements: z.string().min(1, { message: "Requirements are required" }),
// });

// const PostJob = () => {
//   const { user, isLoaded } = useUser();
//   const navigate = useNavigate();

//   const {
//     register,
//     handleSubmit,
//     control,
//     formState: { errors },
//   } = useForm({
//     defaultValues: { location: "", company_id: "", requirements: "" },
//     resolver: zodResolver(schema),
//   });

//   const {
//     loading: loadingCreateJob,
//     error: errorCreateJob,
//     data: dataCreateJob,
//     fn: fnCreateJob,
//   } = useFetch(addNewJob);

//   const onSubmit = (data) => {
//     fnCreateJob({
//       ...data,
//       recruiter_id: user.id,
//       isOpen: true,
//     });
//   };

//   useEffect(() => {
//     if (dataCreateJob?.length > 0) navigate("/jobs");
//   }, [loadingCreateJob]);

//   const {
//     loading: loadingCompanies,
//     data: companies,
//     fn: fnCompanies,
//   } = useFetch(getCompanies);

//   useEffect(() => {
//     if (isLoaded) {
//       fnCompanies();
//     }
//     // eslint-disable-next-line react-hooks/exhaustive-deps
//   }, [isLoaded]);

//   if (!isLoaded || loadingCompanies) {
//     return <BarLoader className="mb-4" width={"100%"} color="#36d7b7" />;
//   }

//   if (user?.unsafeMetadata?.role !== "recruiter") {
//     return <Navigate to="/jobs" />;
//   }

//   return (
//     <div>
//       <h1 className="gradient-title font-extrabold text-5xl sm:text-7xl text-center pb-8">
//         Post a Job
//       </h1>
//       <form
//         onSubmit={handleSubmit(onSubmit)}
//         className="flex flex-col gap-4 p-4 pb-0"
//       >
//         <div className="border p-4 rounded-md">
//           <Input placeholder="Job Title" {...register("title")} />
//           {errors.title && <p className="text-red-500">{errors.title.message}</p>}
//         </div>

//         <div className="border p-4 rounded-md">
//           <Textarea placeholder="Job Description" {...register("description")} />
//           {errors.description && (
//             <p className="text-red-500">{errors.description.message}</p>
//           )}
//         </div>

//         <div className="border p-4 rounded-md">
//           <div className="flex gap-4 items-center">
//             <Controller
//               name="location"
//               control={control}
//               render={({ field }) => (
//                 <Select value={field.value} onValueChange={field.onChange}>
//                   <SelectTrigger>
//                     <SelectValue placeholder="Job Location" />
//                   </SelectTrigger>
//                   <SelectContent>
//                     <SelectGroup>
//                       {State.getStatesOfCountry("IN").map(({ name }) => (
//                         <SelectItem key={name} value={name}>
//                           {name}
//                         </SelectItem>
//                       ))}
//                     </SelectGroup>
//                   </SelectContent>
//                 </Select>
//               )}
//             />
//             <Controller
//               name="company_id"
//               control={control}
//               render={({ field }) => (
//                 <Select value={field.value} onValueChange={field.onChange}>
//                   <SelectTrigger>
//                     <SelectValue placeholder="Company">
//                       {field.value
//                         ? companies?.find((com) => com.id === Number(field.value))
//                             ?.name
//                         : "Company"}
//                     </SelectValue>
//                   </SelectTrigger>
//                   <SelectContent>
//                     <SelectGroup>
//                       {companies?.map(({ name, id }) => (
//                         <SelectItem key={name} value={id}>
//                           {name}
//                         </SelectItem>
//                       ))}
//                     </SelectGroup>
//                   </SelectContent>
//                 </Select>
//               )}
//             />
//             <AddCompanyDrawer fetchCompanies={fnCompanies} />
//           </div>
//           {errors.location && (
//             <p className="text-red-500">{errors.location.message}</p>
//           )}
//           {errors.company_id && (
//             <p className="text-red-500">{errors.company_id.message}</p>
//           )}
//         </div>

//         <div className="border p-4 rounded-md">
//           <Controller
//             name="requirements"
//             control={control}
//             render={({ field }) => (
//               <MDEditor value={field.value} onChange={field.onChange} />
//             )}
//           />
//           {errors.requirements && (
//             <p className="text-red-500">{errors.requirements.message}</p>
//           )}
//           {errors.errorCreateJob && (
//             <p className="text-red-500">{errors?.errorCreateJob?.message}</p>
//           )}
//           {errorCreateJob?.message && (
//             <p className="text-red-500">{errorCreateJob?.message}</p>
//           )}
//         </div>
        
//         {loadingCreateJob && <BarLoader width={"100%"} color="#36d7b7" />}
        
//         <Button type="submit" variant="blue" size="lg" className="mt-2">
//           Submit
//         </Button>
//       </form>
//     </div>
//   );
// };

// export default PostJob;


// import { getCompanies } from "@/api/apiCompanies";
// import { addNewJob } from "@/api/apiJobs";
// import AddCompanyDrawer from "@/components/add-company-drawer";
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
// import { Textarea } from "@/components/ui/textarea";
// import useFetch from "@/hooks/use-fetch";
// import { useUser } from "@clerk/clerk-react";
// import { zodResolver } from "@hookform/resolvers/zod";
// import MDEditor from "@uiw/react-md-editor";
// import { State } from "country-state-city";
// import { useEffect } from "react";
// import { Controller, useForm } from "react-hook-form";
// import { Navigate, useNavigate } from "react-router-dom";
// import { BarLoader } from "react-spinners";
// import { z } from "zod";

// const schema = z.object({
//   title: z.string().min(1, { message: "Title is required" }),
//   description: z.string().min(1, { message: "Description is required" }),
//   location: z.string().min(1, { message: "Select a location" }),
//   company_id: z.string().min(1, { message: "Select or Add a new Company" }),
//   requirements: z.string().min(1, { message: "Requirements are required" }),
// });

// const PostJob = () => {
//   const { user, isLoaded } = useUser();
//   const navigate = useNavigate();

//   const {
//     register,
//     handleSubmit,
//     control,
//     formState: { errors },
//   } = useForm({
//     defaultValues: { location: "", company_id: "", requirements: "" },
//     resolver: zodResolver(schema),
//   });

//   const {
//     loading: loadingCreateJob,
//     error: errorCreateJob,
//     data: dataCreateJob,
//     fn: fnCreateJob,
//   } = useFetch(addNewJob);

//   const onSubmit = (data) => {
//     fnCreateJob({
//       ...data,
//       recruiter_id: user.id,
//       isOpen: true,
//     });
//   };

//   useEffect(() => {
//     if (dataCreateJob?.length > 0) navigate("/jobs");
//   }, [loadingCreateJob]);

//   const {
//     loading: loadingCompanies,
//     data: companies,
//     fn: fnCompanies,
//   } = useFetch(getCompanies);

//   useEffect(() => {
//     if (isLoaded) {
//       fnCompanies();
//     }
//     // eslint-disable-next-line react-hooks/exhaustive-deps
//   }, [isLoaded]);

//   if (!isLoaded || loadingCompanies) {
//     return <BarLoader className="mb-4" width={"100%"} color="#36d7b7" />;
//   }

//   if (user?.unsafeMetadata?.role !== "recruiter") {
//     return <Navigate to="/jobs" />;
//   }

//   return (
//     <div>
//       <h1 className="gradient-title font-extrabold text-5xl sm:text-7xl text-center pb-8">
//         Post a Job
//       </h1>
//       <form
//         onSubmit={handleSubmit(onSubmit)}
//         className="flex flex-col gap-4 p-4 pb-0"
//       >
//         <div className="border p-4 rounded-md">
//           <h2 className="font-semibold text-lg mb-2">Title</h2>
//           <Input placeholder="Job Title" {...register("title")} />
//           {errors.title && <p className="text-red-500">{errors.title.message}</p>}
//         </div>

//         <div className="border p-4 rounded-md">
//           <h2 className="font-semibold text-lg mb-2">Description</h2>
//           <Textarea placeholder="Job Description" {...register("description")} />
//           {errors.description && (
//             <p className="text-red-500">{errors.description.message}</p>
//           )}
//         </div>

//         <div className="border p-4 rounded-md">
//           <h2 className="font-semibold text-lg mb-2">Location</h2>
//           <Controller
//             name="location"
//             control={control}
//             render={({ field }) => (
//               <Select value={field.value} onValueChange={field.onChange}>
//                 <SelectTrigger>
//                   <SelectValue placeholder="Job Location" />
//                 </SelectTrigger>
//                 <SelectContent>
//                   <SelectGroup>
//                     {State.getStatesOfCountry("IN").map(({ name }) => (
//                       <SelectItem key={name} value={name}>
//                         {name}
//                       </SelectItem>
//                     ))}
//                   </SelectGroup>
//                 </SelectContent>
//               </Select>
//             )}
//           />
//           {errors.location && (
//             <p className="text-red-500">{errors.location.message}</p>
//           )}
//         </div>

//         <div className="border p-4 rounded-md">
//           <h2 className="font-semibold text-lg mb-2">Company</h2>
//           <div className="flex gap-4 items-center">
//             <Controller
//               name="company_id"
//               control={control}
//               render={({ field }) => (
//                 <Select value={field.value} onValueChange={field.onChange}>
//                   <SelectTrigger>
//                     <SelectValue placeholder="Company">
//                       {field.value
//                         ? companies?.find((com) => com.id === Number(field.value))
//                             ?.name
//                         : "Company"}
//                     </SelectValue>
//                   </SelectTrigger>
//                   <SelectContent>
//                     <SelectGroup>
//                       {companies?.map(({ name, id }) => (
//                         <SelectItem key={name} value={id}>
//                           {name}
//                         </SelectItem>
//                       ))}
//                     </SelectGroup>
//                   </SelectContent>
//                 </Select>
//               )}
//             />
//             <AddCompanyDrawer fetchCompanies={fnCompanies} />
//           </div>
//           {errors.company_id && (
//             <p className="text-red-500">{errors.company_id.message}</p>
//           )}
//         </div>

//         <div className="border p-4 rounded-md">
//           <h2 className="font-semibold text-lg mb-2">Requirements</h2>
//           <Controller
//             name="requirements"
//             control={control}
//             render={({ field }) => (
//               <MDEditor value={field.value} onChange={field.onChange} />
//             )}
//           />
//           {errors.requirements && (
//             <p className="text-red-500">{errors.requirements.message}</p>
//           )}
//           {errors.errorCreateJob && (
//             <p className="text-red-500">{errors?.errorCreateJob?.message}</p>
//           )}
//           {errorCreateJob?.message && (
//             <p className="text-red-500">{errorCreateJob?.message}</p>
//           )}
//         </div>
        
//         {loadingCreateJob && <BarLoader width={"100%"} color="#36d7b7" />}
        
//         <Button type="submit" variant="blue" size="lg" className="mt-2">
//           Submit
//         </Button>
//       </form>
//     </div>
//   );
// };

// export default PostJob;


import React, { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export default function JobPostingForm() {
  const [jobType, setJobType] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    // Here you would typically send the form data to your backend
    console.log('Form submitted');
  };

  return (
    <Card className="w-full max-w-2xl mx-auto">
      <CardHeader>
        <CardTitle>Post a New Job</CardTitle>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label htmlFor="jobTitle" className="block text-sm font-medium mb-1">Job Title</label>
            <Input id="jobTitle" placeholder="e.g. House Cleaning" required />
          </div>
          <div>
            <label htmlFor="jobType" className="block text-sm font-medium mb-1">Job Type</label>
            <Select onValueChange={(value) => setJobType(value)}>
              <SelectTrigger>
                <SelectValue placeholder="Select job type" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="fullTime">Full-Day</SelectItem>
                <SelectItem value="partTime">Part-time</SelectItem>
                <SelectItem value="contract">For-Week</SelectItem>
                <SelectItem value="freelance">Freelance</SelectItem>
              </SelectContent>
            </Select>
          </div>
          <div>
            <label htmlFor="location" className="block text-sm font-medium mb-1">Location</label>
            <Input id="location" placeholder="e.g. Delhi" required />
          </div>
          <div>
            <label htmlFor="salary" className="block text-sm font-medium mb-1">Pay Range</label>
            <Input id="salary" placeholder="e.g. ₹1000 - ₹5000" required />
          </div>
          <div>
            <label htmlFor="description" className="block text-sm font-medium mb-1">Work Description</label>
            <Textarea id="description" placeholder="Enter Work description..." required />
          </div>
          <div>
            <label htmlFor="requirements" className="block text-sm font-medium mb-1">Requirements</label>
            <Textarea id="requirements" placeholder="Enter work requirements..." required />
          </div>
          <Button type="submit" className="w-full">Post Job</Button>
        </form>
      </CardContent>
    </Card>
  );
}
