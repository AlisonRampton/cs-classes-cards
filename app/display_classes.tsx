import React, { useState } from "react";
import Card from "./card";
import Button from "./button";
import individualCSClasses from "./ParseJson";
import { Emphasis } from "./definitions";
import ClassCard from "./class_card";

const TabbedClasses: React.FC = () => {
  const classes = individualCSClasses.sort(
    (a, b) =>
      Number(a.courseNumber.substring(0, 3)) -
      Number(b.courseNumber.substring(0, 3))
  );

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

  // const testClasses = classes[8].programDependents[0].filter(
  //   (program) => program.name === "Computer Science: Software Engineering"
  // );

  const [selectedTopCategory, setSelectedTopCategory] =
    useState<Emphasis | null>(null);
  const [selectedSubCategory, setSelectedSubCategory] = useState<string>("");

  const handleTopCategoryChange = (category: Emphasis) => {
    setSelectedTopCategory(category);
    setSelectedSubCategory("");
    // window.location.hash = category.displayName;
    // history.pushState(null, "", "#" + category.displayName);
    var buttons = document.getElementsByClassName("top-button");
    for (var i = 0; i < buttons.length; i++) {
      buttons[i].className =
        "top-button m-1 rounded-xl dark:ring-pink-950 ring-pink-300";
    }
    document.getElementById(category.displayName)!.className =
      "top-button m-1 rounded-xl ring-4 dark:ring-pink-950 ring-pink-300";
    console.log("Category is now %s", category.displayName);
    console.log(topCategoryClasses);
  };

  const handleSubCategoryChange = (subcategory: string | undefined) => {
    subcategory ? setSelectedSubCategory(subcategory) : null;
  };

  const topCategoryClasses = selectedTopCategory
    ? classes.filter(
        (classObj) =>
          classObj.programDependents.length != 0 &&
          // classObj.programDependents.filter(
          //   (program) => program.name === selectedTopCategory.catalogName
          classObj.programDependents[0].some(
            (program) => program.name === selectedTopCategory.catalogName
          )
      )
    : [];

  // const categories = [...emphases];

  const subcategories = selectedTopCategory
    ? [
        ...new Set(
          topCategoryClasses.map(
            (classObj) =>
              classObj.programDependents[0].find(
                (program) => program.name === selectedTopCategory.catalogName
              )?.requisiteName
          )
        ),
      ]
        .filter(function (element) {
          return element !== undefined;
        })
        .sort((a, b) =>
          a
            ? b
              ? parseFloat(a.substring(12)) - parseFloat(b.substring(12))
              : 0
            : 0
        )
    : [];

  const filteredClasses = selectedSubCategory
    ? topCategoryClasses.filter(
        (classObj) =>
          classObj.programDependents[0].find(
            (program) => program.name === selectedTopCategory?.catalogName
          )?.requisiteName === selectedSubCategory
      )
    : topCategoryClasses;

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
              className="bg-pink-600 hover:bg-pink-500 active:bg-pink-300"
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
              className="bg-teal-600 hover:bg-teal-500 active:bg-teal-300"
            />
          </button>
        ))}
      </div>
      <div className="quote-cards">
        {filteredClasses.map((classObj, index) => (
          <div key={index}>
            <ClassCard classObj={classObj} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default TabbedClasses;
