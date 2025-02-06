//show this page if we hit the wroung or undefined route
import React from "react";

const pageNotFound = () => {
  return (
    <div className="h-screen w-screen  flex items-center justify-center">
      <h1 className="font-bold text-blue-600 text-2xl">Page not found...</h1>
    </div>
  );
};

export default pageNotFound;
