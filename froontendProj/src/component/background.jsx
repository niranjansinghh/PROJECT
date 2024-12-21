import React, { useEffect, useState } from "react";
import { BackgroundLines } from "../components/ui/background-lines";
import { Link, useLocation } from "react-router-dom";

export function BackgroundLinesDemo() {
  const location = useLocation();
  const message = location.state?.message; // Get the message from the state
  const [showMessage, setShowMessage] = useState(false); // State to control message visibility

  useEffect(() => {
    if (message) {
      setShowMessage(true); // Show the message
      const timer = setTimeout(() => {
        setShowMessage(false); // Hide the message after 2 seconds
      }, 2000);

      return () => clearTimeout(timer); // Cleanup the timer on unmount
    }
  }, [message]);

  return (
    <>
      <BackgroundLines className="flex items-center justify-center w-full flex-col px-4 bg-gradient-to-b from-gray-900 to-gray-400">
        {showMessage && (
          <div className="bg-green-500 text-white p-2 rounded mb-4">
            {message}
          </div>
        )}
        <h2 className="bg-clip-text text-transparent text-center bg-gradient-to-b from-neutral-900 to-neutral-700 dark:from-neutral-600 dark:to-white text-2xl md:text-4xl lg:text-7xl font-sans py-2 md:py-10 relative z-20 font-bold tracking-tight">
          Sanjana Airlines, <br /> Sajana Textiles.
        </h2>
        <p className="max-w-xl mx-auto text-sm md:text-lg text-neutral-700 dark:text-neutral-400 text-center">
          Get the best advices from our experts, including expert artists,
          painters, marathon enthusiasts and RDX, totally free.
        </p>
        <div className="flex space-x-4 mt-4">
          <Link
            to="/login"
            className="bg-blue-500 text-white px-4 py-2 rounded z-20"
          >
            Login
          </Link>
          <Link
            to="/signup"
            className="bg-green-500 text-white px-4 py-2 rounded z-20"
          >
            Signup
          </Link>
        </div>
      </BackgroundLines>
    </>
  );
}
