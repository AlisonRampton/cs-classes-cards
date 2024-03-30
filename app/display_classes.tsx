import React, { useEffect, useState } from "react";
import Button from "./button";
import {
  individualCSClasses,
  EnhancedClass,
  setEmphasisCategorization,
} from "./ParseJson";
import { Emphasis } from "./definitions";
import ClassCard from "./class_card";

const TabbedClasses: React.FC = () => {
  const [classes, setClasses] = useState<EnhancedClass[]>([]);
  const [displayClasses, setDisplayClasses] = useState<EnhancedClass[]>([]); // Classes to be displayed based on filters
  const [selectedTopCategory, setSelectedTopCategory] =
    useState<Emphasis | null>(null);
  const [selectedSubCategory, setSelectedSubCategory] = useState<string>("");

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
    if (defaultCategory) {
      handleTopCategoryChange(defaultCategory);
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

  const handleTopCategoryChange = (category: Emphasis) => {
    setSelectedTopCategory(category);
    setSelectedSubCategory("");

    // Filter based on the selected top category
    const emphasisKey = formatEmphasisKey(category.catalogName);
    const filteredClasses = classes.filter(
      (classObj) =>
        classObj.emphasisCategorization[emphasisKey] !== "Not Applicable"
    );
    setDisplayClasses(filteredClasses);
  };

  const handleSubCategoryChange = (subcategory: string | undefined) => {
    setSelectedSubCategory(subcategory || "");

    if (!selectedTopCategory) return; // Ensure there's a selected top category

    // Filter based on both the top category and the subcategory (Core/Elective)
    const emphasisKey = formatEmphasisKey(selectedTopCategory.catalogName);
    const filteredClasses = classes.filter(
      (classObj) => classObj.emphasisCategorization[emphasisKey] === subcategory
    );
    setDisplayClasses(filteredClasses); // Update classes to display
  };

  const subcategories = ["Core", "Elective"];

  const formatEmphasisKey = (catalogName: string) => {
    return catalogName.replace("Computer Science: ", "").replace(/ /g, "");
  };

  return (
    <div className="flex flex-col items-center justify-between p-8">
      <h5 className="text-3xl pb-10">BYU CS Courses</h5>
      <span>Program:</span>
      <div className="tabs flex flex-wrap justify-center">
        {emphases.map((emphasis, index) => (
          <button
            key={index}
            id={emphasis.displayName}
            onClick={() => handleTopCategoryChange(emphasis)}
            className="top-button m-1 rounded-xl dark:ring-pink-950 ring-pink-300"
          >
            <Button
              text={emphasis.displayName}
              className="emphasis-color" // hover:emphasis-color-hover active:emphasis-color-active
            />
          </button>
        ))}
      </div>
      <div className="subtabs flex flex-wrap justify-center">
        {subcategories.map((subcategory, index) => (
          <button
            key={index}
            onClick={() => handleSubCategoryChange(subcategory)}
            className="m-1 rounded-xl focus-within:ring-4 dark:ring-teal-950 ring-teal-300"
          >
            <Button
              text={subcategory ? subcategory : ""}
              className="core-elect-color hover:bg-teal-500 active:bg-teal-300"
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
