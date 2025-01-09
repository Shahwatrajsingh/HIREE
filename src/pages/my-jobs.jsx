// import CreatedApplications from "@/components/created-applications";
// import CreatedJobs from "@/components/created-jobs";
// import { useUser } from "@clerk/clerk-react";
// import { BarLoader } from "react-spinners";

// const MyJobs = () => {
//   const { user, isLoaded } = useUser();

//   if (!isLoaded) {
//     return <BarLoader className="mb-4" width={"100%"} color="#36d7b7" />;
//   }

//   return (
//     <div>
//       <h1 className="gradient-title font-extrabold text-5xl sm:text-7xl text-center pb-8">
//         {user?.unsafeMetadata?.role === "candidate"
//           ? "My Applications"
//           : "My Jobs"
      
//           }
//       </h1>
//       {user?.unsafeMetadata?.role === "candidate" ? (
//         <CreatedApplications />
//       ) : (
//         <CreatedJobs />
//       )}
//     </div>
//   );
// };

// export default MyJobs;

import React, { useState } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Loader2 } from 'lucide-react';

const MyJobs = () => {
  const [isLoaded, setIsLoaded] = useState(true);
  const [user, setUser] = useState({
    unsafeMetadata: {
      role: 'candidate'
    }
  });

  // Simple loader implementation
  const LoadingSpinner = () => (
    <div className="w-full flex justify-center p-4">
      <Loader2 className="h-8 w-8 animate-spin text-blue-500" />
    </div>
  );

  // Implementation of CreatedApplications
  const CreatedApplications = () => (
    <div className="space-y-4 max-w-4xl mx-auto">
      <Card>
        <CardContent className="p-6">
          <h3 className="text-lg font-semibold">HOUSE CLEANING</h3>
          <p className="text-gray-600">Applied: Jan 9, 2025</p>
          <p className="text-blue-600">Pay: Rs.5000 (Pending)</p>
          <p className="text-green-600">Status: Accepted</p>
        </CardContent>
      </Card>
      <Card>
        <CardContent className="p-6">
          <h3 className="text-lg font-semibold">Garden Cleaning</h3>
          <p className="text-gray-600">Applied: Jan 8, 2025</p>
          <p className="text-red-600">Status: Rejected</p>
        </CardContent>
      </Card>
    </div>
  );

  // Implementation of CreatedJobs
  const CreatedJobs = () => (
    <div className="space-y-4 max-w-4xl mx-auto">
      <Card>
        <CardContent className="p-6">
          <h3 className="text-lg font-semibold">Senior Frontend Developer</h3>
          <p className="text-gray-600">Posted: Jan 7, 2025</p>
          <p className="text-blue-600">Applications: 12</p>
        </CardContent>
      </Card>
      <Card>
        <CardContent className="p-6">
          <h3 className="text-lg font-semibold">Product Manager</h3>
          <p className="text-gray-600">Posted: Jan 9, 2025</p>
          <p className="text-blue-600">Applications: 5</p>
        </CardContent>
      </Card>
    </div>
  );

  if (!isLoaded) {
    return <LoadingSpinner />;
  }

  return (
    <div>
      <h1 className="gradient-title font-extrabold text-5xl sm:text-7xl text-center pb-8">
        {user?.unsafeMetadata?.role === "candidate"
          ? "My Applications"
          : "My Jobs"
        }
      </h1>
      {user?.unsafeMetadata?.role === "candidate" && (
        <Card className="mb-8 max-w-md mx-auto">
          <CardContent className="p-6">
            <p className="text-center text-lg font-medium">
              JOBS YOU HAVE BEEN APPLIED
            </p>
          </CardContent>
        </Card>
      )}
      {user?.unsafeMetadata?.role === "candidate" ? (
        <CreatedApplications />
      ) : (
        <CreatedJobs />
      )}

      {/* Demo toggle button */}
        {/* <div className="mt-8 flex justify-center">
          <button
            onClick={() => setUser(prev => ({
              unsafeMetadata: {
                role: prev.unsafeMetadata.role === 'candidate' ? 'employer' : 'candidate'
              }
            }))}
            className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 transition-colors"
          >
            Switch Role (Demo)
          </button>
        </div> */}
    </div>
  );
};

export default MyJobs;