import React, { useEffect, useState } from "react";
import Button from "./button";
import {
  individualCSClasses,
  EnhancedClass,
  setEmphasisCategorization,
} from "./ParseJson";
import { Emphasis, Subcategory } from "./definitions";
import ClassCard from "./class_card";

const TabbedClasses: React.FC = () => {
  const [classes, setClasses] = useState<EnhancedClass[]>([]);
  const [displayClasses, setDisplayClasses] = useState<EnhancedClass[]>([]); // Classes to be displayed based on filters
  const [selectedTopCategory, setSelectedTopCategory] =
    useState<Emphasis | null>(null);
  const [selectedSubCategory, setSelectedSubCategory] =
    useState<Subcategory | null>(null);

  useEffect(() => {
    // Categorize and then sort the classes
    const categorizedClasses = individualCSClasses
      .map(setEmphasisCategorization)
      .sort((a, b) => {
        // Extract course numbers and convert them to integers for comparison
        const courseNumberA = parseInt(a.courseNumber, 10);
        const courseNumberB = parseInt(b.courseNumber, 10);

        return courseNumberA - courseNumberB;
      });
    setDisplayClasses(categorizedClasses);
    setClasses(categorizedClasses);

    const defaultCategory = emphases.find(
      (emphasis) => emphasis.displayName === "Computer Science"
    );
    // if (defaultCategory) {
    //   handleTopCategoryChange(defaultCategory);
    // }

    const defaultSubCategory = subcategories.find(
      (subcategory) => subcategory.displayName === "Core"
    );
    // if (defaultSubCategory) {
    //   handleSubCategoryChange(defaultSubCategory);
    // }

    if (defaultCategory && defaultSubCategory) {
      setSelectedTopCategory(defaultCategory);
      setSelectedSubCategory(defaultSubCategory);
      // Now filter the classes based on the default top category and subcategory
      const emphasisKey = formatEmphasisKey(defaultCategory.catalogName);
      const filteredClasses = categorizedClasses.filter(
        (classObj) =>
          classObj.emphasisCategorization[emphasisKey] ===
          defaultSubCategory.displayName
      );
      setDisplayClasses(filteredClasses);
    }
  }, []);

  const emphases: Emphasis[] = [
    { displayName: "Computer Science", catalogName: "Computer Science" },
    {
      displayName: "Animation and Games",
      catalogName: "Computer Science: Animation and Games",
    },
    {
      displayName: "Bioinformatics",
      catalogName: "Computer Science: Bioinformatics",
    },
    {
      displayName: "Machine Learning",
      catalogName: "Computer Science: Machine Learning",
    },
    {
      displayName: "Software Engineering",
      catalogName: "Computer Science: Software Engineering",
    },
  ];

  const handleTopCategoryChange = (emphasis: Emphasis) => {
    setSelectedTopCategory(emphasis);
    //setSelectedSubCategory(subcategories);

    // Filter based on the selected top category
    const emphasisKey = formatEmphasisKey(emphasis.catalogName);
    const filteredClasses = classes.filter(
      (classObj) =>
        classObj.emphasisCategorization[emphasisKey] !== "Not Applicable"
    );
    setDisplayClasses(filteredClasses);
  };

  const handleSubCategoryChange = (subcategory: Subcategory) => {
    setSelectedSubCategory(subcategory);

    if (!selectedTopCategory) return; // Ensure there's a selected top category

    // Filter based on both the top category and the subcategory (Core/Elective)
    const emphasisKey = formatEmphasisKey(selectedTopCategory.catalogName);
    const filteredClasses = classes.filter(
      (classObj) =>
        classObj.emphasisCategorization[emphasisKey] === subcategory.displayName
    );
    setDisplayClasses(filteredClasses); // Update classes to display
  };

  const subcategories: Subcategory[] = [
    {
      displayName: "Core",
    },
    {
      displayName: "Elective",
    },
  ];

  const formatEmphasisKey = (catalogName: string) => {
    return catalogName.replace("Computer Science: ", "").replace(/ /g, "");
  };

  return (
    <div className="flex flex-col items-center justify-between p-8">
      <h5 className="text-3xl pb-10">BYU CS Courses</h5>
      {/* <span>Select a Program:</span> */}
      <div className="tabs w-full grid grid-flow-col grid-rows-3 sm:grid-rows-2 lg:grid-rows-none bg-slate-500 rounded-xl m-2 p-2 bg-opacity-60">
        {emphases.map((emphasis, index) => (
          <button
            key={index}
            id={emphasis.displayName}
            onClick={() => handleTopCategoryChange(emphasis)}
            className={`col-auto top-button m-1 rounded-xl transition-all duration-300 ease-in-out  ${
              selectedTopCategory?.displayName === emphasis.displayName
                ? "ring-2 shadow-inner dark:shadow-slate-800 shadow-slate-500 ring-highlight-color"
                : ""
            }`}
          >
            <Button text={emphasis.displayName} className="emphasis-color" />
          </button>
        ))}
      </div>
      <div className="subtabs grid grid-cols-2 w-full m-2 p-2 bg-slate-500 rounded-xl bg-opacity-60">
        {subcategories.map((subcategory, index) => (
          <button
            key={index}
            id={subcategory.displayName}
            onClick={() => handleSubCategoryChange(subcategory)}
            className={`m-1 rounded-xl transition-all duration-300 ease-in-out ${
              //focus-within:ring
              //dark:ring-teal-950
              selectedSubCategory?.displayName === subcategory.displayName
                ? "ring-2 shadow-inner dark:shadow-slate-800 shadow-slate-500 ring-highlight-color"
                : ""
            }`}
          >
            <Button
              text={subcategory.displayName ? subcategory.displayName : ""}
              className="core-elect-color" // hover:bg-teal-500 active:bg-teal-300
            />
          </button>
        ))}
      </div>
      <div className="quote-cards">
        {displayClasses.map((classObj, index) => (
          <div key={index}>
            <ClassCard classObj={classObj} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default TabbedClasses;
