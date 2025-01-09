import { useUser } from "@clerk/clerk-react";
import { useEffect } from "react";
import { BarLoader } from "react-spinners";
import JobCard from "@/components/job-card";

const SavedJobs = () => {
  const { isLoaded } = useUser();

  const savedJobs = [
    {
      id: "1",
      job: {
        title: "Furniture Assembly Specialist",
        company: { name: "Woodworks Pvt. Ltd." },
        location: "Delhi, NCR",
        pay: "₹1,000 - ₹1,500 per day",
        description: "Assembling wooden furniture such as chairs, tables, and cabinets with precision.",
      },
    },
    {
      id: "2",
      job: {
        title: "Carpentry Assistant",
        company: { name: "Craftsmen & Co." },
        location: "CP, Delhi NCR",
        pay: "₹800 - ₹1,200 per day",
        description: "Assisting senior carpenters in cutting, sanding, and assembling wooden structures.",
      },
    },
    {
      id: "3",
      job: {
        title: "Custom Cabinet Maker",
        company: { name: "Elegant Interiors" },
        location: "Shastri Nagar, Delhi NCR",
        pay: "₹1,500 - ₹2,000 per day",
        description: "Crafting custom cabinets and shelves as per client specifications.",
      },
    },
  ];

  if (!isLoaded) {
    return <BarLoader className="mb-4" width={"100%"} color="#36d7b7" />;
  }

  return (
    <div>
      <h1 className="gradient-title font-extrabold text-6xl sm:text-7xl text-center pb-8">
        Saved Jobs
      </h1>
      <div className="mt-8 grid md:grid-cols-2 lg:grid-cols-3 gap-4">
        {savedJobs.length ? (
          savedJobs.map((saved) => (
            <JobCard key={saved.id} job={saved.job} savedInit={true} />
          ))
        ) : (
          <div>No Saved Jobs 👀</div>
        )}
      </div>
    </div>
  );
};

export default SavedJobs;
