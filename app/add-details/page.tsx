import React from "react";
import AddForm from "./addform";
const AddDetails = () => {
  return (
    <div>
      <h1 className="text-center font-semibold text-[40px]">
        Add New{" "}
        <span className="bg-clip-text text-transparent bg-gradient-to-r from-red-500 to-orange-500">
          Vehicle
        </span>
      </h1>

      <AddForm />
    </div>
  );
};

export default AddDetails;
