import csClassesData from "./classes.json";
import {
  Class,
  ClassEmphasisCategorization,
  ProgramDependent,
} from "./definitions";

// Helper function to determine if a class is a core class for an emphasis
const isCoreClassForEmphasis = (
  programDependents: any[],
  emphasis: string
): boolean => {
  // Assuming core classes are identified by "Requirement 1"
  return programDependents.some((dependents: ProgramDependent[]) =>
    dependents.some(
      (dependent: ProgramDependent) =>
        dependent.name.includes(emphasis) &&
        dependent.requisiteName === "Requirement 1"
    )
  );
};

// Function to categorize classes into core or elective for each emphasis
const categorizeClasses = (csClass: any, emphasis: string) => {
  const coreOrElective = isCoreClassForEmphasis(
    csClass.programDependents,
    emphasis
  )
    ? "Core"
    : "Elective";
  return coreOrElective;
};

// Function to extract and categorize each CS class as an individual object
const extractAndCategorizeCSClasses = (csClasses: any) => {
  return csClasses.map((csClass: any) => {
    const emphasisCategorization = {
      ComputerScience: categorizeClasses(csClass, "Computer Science"),
      AnimationAndGames: categorizeClasses(csClass, "Animation and Games"),
      Bioinformatics: categorizeClasses(csClass, "Bioinformatics"),
      MachineLearning: categorizeClasses(csClass, "Machine Learning"),
      SoftwareEngineering: categorizeClasses(csClass, "Software Engineering"),
    };

    return {
      code: csClass.code,
      courseGroupId: csClass.courseGroupId,
      courseNumber: csClass.courseNumber,
      credits: csClass.credits,
      description: csClass.description,
      effectiveEndDate: csClass.effectiveEndDate,
      effectiveStartDate: csClass.effectiveStartDate,
      id: csClass.id,
      longName: csClass.longName,
      name: csClass.name,
      requisites: csClass.requisites,
      courseDependents: csClass.courseDependents,
      programDependents: csClass.programDependents,
      status: csClass.status,
      subjectCode: csClass.subjectCode,
      emphasisCategorization, // Include the categorization in the class object
    };
  });
};

// // Function to extract each CS class as an individual object
// const extractCSClasses = (csClasses: any) => {
//   return csClasses.map((csClass: any) => ({
//     //_id: csClass._id,
//     code: csClass.code,
//     // college: csClass.college,
//     courseGroupId: csClass.courseGroupId,
//     courseNumber: csClass.courseNumber,
//     credits: csClass.credits,
//     // customFields: csClass.customFields,
//     //departments: csClass.departments,
//     description: csClass.description,
//     effectiveEndDate: csClass.effectiveEndDate,
//     effectiveStartDate: csClass.effectiveStartDate,
//     id: csClass.id,
//     longName: csClass.longName,
//     name: csClass.name,
//     requisites: csClass.requisites,
//     courseDependents: csClass.courseDependents,
//     programDependents: csClass.programDependents,
//     // requestStatus: csClass.requestStatus,
//     status: csClass.status,
//     subjectCode: csClass.subjectCode,
//     // Add or remove properties based on what is relevant for your needs
//   }));
// };

// Assuming the data structure contains a 'data' field holding the classes
const individualCSClasses: Class[] = extractAndCategorizeCSClasses(
  csClassesData.data
);

const determineCategory = (classCode: string, emphasisName: string): string => {
  const coreClasses = [
    "C S 111",
    "C S 224",
    "C S 235",
    "C S 236",
    "C S 240",
    "C S 312",
    "C S 324",
    "C S 404",
  ];
  const electiveClasses = [];
  if (coreClasses.includes(classCode)) {
    return "Core";
  } else if (classCode === "C S 202") {
    if (emphasisName === "Software Engineering") {
      return "Core";
    } else if (
      emphasisName === "Animation and Games" ||
      emphasisName === "Machine Learning"
    ) {
      return "Not Applicable";
    } else {
      return "Elective";
    }
  }
  // Continue with other specific cases...

  // Default return value for unhandled cases
  return "Elective";
};

export const setEmphasisCategorization = (
  classObj: Class
): ClassEmphasisCategorization => {
  const classCode = classObj.code; // Adjust based on your actual property name

  return {
    ComputerScience: determineCategory(classCode, "Computer Science"),
    AnimationAndGames: determineCategory(classCode, "Animation and Games"),
    Bioinformatics: determineCategory(classCode, "Bioinformatics"),
    MachineLearning: determineCategory(classCode, "Machine Learning"),
    SoftwareEngineering: determineCategory(classCode, "Software Engineering"),
  };
};

export default individualCSClasses;
