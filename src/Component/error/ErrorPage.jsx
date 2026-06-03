import React from "react";
import { useNavigate } from "react-router-dom";

const ErrorPage = () => {
  const navigate = useNavigate();

  return (
    <div className="flex justify-center items-center h-screen">
      <div className="border border-black p-8 rounded-lg shadow-lg text-center">
        <h1 className="text-2xl font-bold mb-4">Failed to load posts</h1>

        <button
          className="border border-black px-5 py-2 rounded"
          onClick={() => navigate("/")}
        >
          Retry
        </button>
      </div>
    </div>
  );
};

export default ErrorPage;
