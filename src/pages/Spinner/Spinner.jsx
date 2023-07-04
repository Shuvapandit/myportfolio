import React from "react";
import { InfinitySpin } from "react-loader-spinner";

function Spinner() {
  return (
    <div className="flex justify-center items-center h-screen ">
      <div className="">
        <InfinitySpin width="200" color="#0000FF" />
      </div>
    </div>
  );
}

export default Spinner;
