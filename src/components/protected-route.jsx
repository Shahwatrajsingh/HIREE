// components/recruiter-route.jsx
import { Navigate } from "react-router-dom";
import { useUser } from "@clerk/clerk-react";

const RecruiterRoute = ({ children }) => {
  const { isLoaded, user } = useUser();

  if (!isLoaded) {
    return null;
  }

  if (user?.unsafeMetadata?.role !== "recruiter") {
    return <Navigate to="/jobs" />;
  }

  return children;
};

export default RecruiterRoute;