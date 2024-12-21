import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const Logout = () => {
  const navigate = useNavigate();

  useEffect(() => {
    // Simulate logout logic here (e.g., clear user session, tokens, etc.)
    // After logout, navigate to the Background page with a success message
    const timer = setTimeout(() => {
      navigate("/", { state: { message: "Logout successful!" } });
    }, 2000); // Redirect after 2 seconds

    return () => clearTimeout(timer); // Cleanup the timer on unmount
  }, [navigate]);

  return (
    <div className="flex items-center justify-center h-screen">
      <h2 className="text-xl font-bold">Logging out...</h2>
    </div>
  );
};

export default Logout;
