import React from "react";

const Error = ({title}) => {
  return (
    <div className="flex justify-center items-center mx-auto pl-7 md:pl-0">
      <h1 className="font-bold text-2xl text-white mt-2 animate-pulse">
      {title || 'Something Went Wrong Please Try Again'} 
      </h1>
    </div>
  );
};

export default Error;
