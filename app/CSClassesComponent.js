import React, { useState, useEffect } from "react";
import individualCSClasses from "./ParseJson";
import renderCSClassDetails from "./renderCSClassDetails";
import ClassCard from "./class_card";

export const CSClassesComponent = () => {
  const [csClasses, setCsClasses] = useState([]);
  const [csClassCount, setCsClassCount] = useState(0);
  const [firstCSClass, setFirstCSClass] = useState(null);

  useEffect(() => {
    // Since individualCSClasses is already the parsed data,
    // we can directly use it to perform operations like counting
    setCsClassCount(individualCSClasses.length);
    setFirstCSClass(individualCSClasses[0]);
  }, []);

  //     <p>Code: {firstCSClass.code}</p>
  //   <p>Description: {firstCSClass.description}</p>
  //        renderCSClassDetails(firstCSClass);

  return (
    <div style={{ textAlign: "left", marginLeft: "20px" }}>
      <h1>Computer Science Classes Count</h1>
      <p>Total CS Classes: {csClassCount}</p>

      <h1>Computer Science Class 1</h1>
      <ClassCard classObj={firstCSClass} />
      {firstCSClass ? (
        renderCSClassDetails(firstCSClass)
      ) : (
        <p>No CS class found.</p>
      )}
    </div>
  );
  {
    /* Optionally display the classes or more details */
  }
};

export default CSClassesComponent;
