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

// Assuming the data structure contains a 'data' field holding the classes
const individualCSClasses: Class[] = extractAndCategorizeCSClasses(
  csClassesData.data
);

const determineCategory = (classObj: Class, emphasisName: string): string => {
  const classCode = classObj.code;

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
  const electiveClasses = [
    "C S 450",
    "C S 453",
    "C S 513",
    "C S 575",
    "C S 580",
  ];
  if (coreClasses.includes(classCode)) {
    return "Core";
  } else if (electiveClasses.includes(classCode)) {
    return "Elective";
  } else if (classCode.startsWith("CSANM")) {
    if (emphasisName === "Animation and Games") {
      if (classCode === "CSANM 150") {
        return "Core";
      } else if (classCode === "CSANM 250") {
        return "Core";
      } else if (classCode === "CSANM 342") {
        return "Core";
      } else if (classCode === "CSANM 352") {
        return "Core";
      } else if (classCode === "CSANM 354") {
        return "Core";
      } else if (classCode === "CSANM 450") {
        return "Core";
      } else if (classCode === "CSANM 452") {
        return "Core";
      } else if (classCode === "CSANM 459") {
        return "Core";
      } else if (classCode === "CSANM 460") {
        return "Core";
      } else {
        return "Elective";
      }
    } else {
      return "Not Applicable";
    }
  } else if (classCode === "C S 180") {
    if (emphasisName === "Machine Learning") {
      return "Core";
    } else if (emphasisName === "Computer Science") {
      return "Elective";
    } else {
      return "Not Applicable";
    }
  } else if (classCode === "C S 202") {
    if (emphasisName === "Software Engineering") {
      return "Core";
    } else if (
      emphasisName === "Animation and Games" ||
      emphasisName === "Machine Learning" ||
      emphasisName === "Bioinformatics"
    ) {
      return "Not Applicable";
    } else {
      //vanilla cs
      return "Elective";
    }
  } else if (classCode === "C S 203") {
    if (emphasisName === "Software Engineering") {
      return "Core";
    } else if (
      emphasisName === "Animation and Games" ||
      emphasisName === "Machine Learning" ||
      emphasisName === "Bioinformatics"
    ) {
      return "Not Applicable";
    } else {
      //vanilla cs
      return "Elective";
    }
  } else if (classCode === "C S 204") {
    if (emphasisName === "Software Engineering") {
      return "Core";
    } else if (
      emphasisName === "Animation and Games" ||
      emphasisName === "Machine Learning" ||
      emphasisName === "Bioinformatics"
    ) {
      return "Not Applicable";
    } else {
      //vanilla cs
      return "Elective";
    }
  } else if (classCode === "C S 252") {
    if (emphasisName === "Computer Science") {
      return "Core";
    } else if (
      emphasisName === "Animation and Games" ||
      emphasisName === "Software Engineering"
    ) {
      return "Elective";
    } else {
      return "Not Applicable";
    }
  } else if (classCode === "C S 256") {
    if (emphasisName === "Machine Learning") {
      return "Not Applicable";
    } else {
      //everything but ML
      return "Elective";
    }
  } else if (classCode === "C S 260") {
    if (
      emphasisName === "Software Engineering" ||
      emphasisName === "Computer Science"
    ) {
      return "Core";
    } else if (emphasisName === "Machine Learning") {
      return "Not Applicable";
    } else {
      return "Elective";
    }
  } else if (classCode === "C S 329") {
    if (emphasisName === "Software Engineering") {
      return "Core";
    } else if (emphasisName === "Machine Learning") {
      return "Not Applicable";
    } else {
      return "Elective";
    }
  } else if (classCode === "C S 330") {
    if (emphasisName === "Machine Learning") {
      return "Not Applicable";
    } else {
      return "Elective";
    }
  } else if (classCode === "C S 345") {
    if (emphasisName === "Machine Learning") {
      return "Not Applicable";
    } else {
      return "Elective";
    }
  } else if (classCode === "C S 355") {
    if (emphasisName === "Machine Learning") {
      return "Not Applicable";
    } else if (emphasisName === "Animation and Games") {
      return "Core";
    } else {
      return "Elective";
    }
  } else if (classCode === "C S 356") {
    if (emphasisName === "Machine Learning") {
      return "Not Applicable";
    } else {
      return "Elective";
    }
  } else if (classCode === "C S 401r") {
    if (emphasisName === "Machine Learning") {
      return "Not Applicable";
    } else {
      return "Elective";
    }
  } else if (classCode === "C S 405") {
    if (
      emphasisName === "Computer Science" ||
      emphasisName === "Bioinformatics"
    ) {
      return "Elective";
    } else {
      return "Not Applicable";
    }
  } else if (classCode === "C S 412") {
    if (emphasisName === "Machine Learning") {
      return "Core";
    } else {
      return "Elective";
    }
  } else if (classCode === "C S 428") {
    if (
      emphasisName === "Machine Learning" ||
      emphasisName === "Software Engineering"
    ) {
      return "Not Applicable";
    } else {
      return "Elective";
    }
  } else if (classCode === "C S 431") {
    if (
      emphasisName === "Machine Learning" ||
      emphasisName === "Software Engineering"
    ) {
      return "Not Applicable";
    } else {
      return "Elective";
    }
  } //cs 450 is elective for all
  else if (classCode === "C S 452") {
    if (emphasisName === "Software Engineering") {
      return "Core";
    } else {
      return "Elective";
    }
  } // cs 453 is elective for all
  else if (classCode === "C S 455") {
    if (emphasisName === "Machine Learning") {
      return "Not Applicable";
    } else if (emphasisName === "Animation and Games") {
      return "Core";
    } else {
      return "Elective";
    }
  } else if (classCode === "C S 456") {
    if (emphasisName === "Machine Learning") {
      return "Not Applicable";
    } else {
      return "Elective";
    }
  } else if (classCode === "C S 460") {
    if (emphasisName === "Machine Learning") {
      return "Not Applicable";
    } else {
      return "Elective";
    }
  } else if (classCode === "C S 462") {
    if (emphasisName === "Machine Learning") {
      return "Not Applicable";
    } else {
      return "Elective";
    }
  } else if (classCode === "C S 465") {
    if (emphasisName === "Machine Learning") {
      return "Not Applicable";
    } else {
      return "Elective";
    }
  } else if (classCode === "C S 466") {
    if (emphasisName === "Machine Learning") {
      return "Not Applicable";
    } else {
      return "Elective";
    }
  } else if (classCode === "C S 470") {
    if (emphasisName === "Machine Learning") {
      return "Core";
    } else {
      return "Elective";
    }
  } else if (classCode === "C S 471") {
    if (emphasisName === "Machine Learning") {
      return "Core";
    } else {
      return "Elective";
    }
  } else if (classCode === "C S 472") {
    if (emphasisName === "Machine Learning") {
      return "Core";
    } else {
      return "Elective";
    }
  } else if (classCode === "C S 474") {
    if (emphasisName === "Machine Learning") {
      return "Core";
    } else {
      return "Elective";
    }
  } else if (classCode === "C S 479") {
    if (emphasisName === "Machine Learning") {
      return "Core";
    } else {
      return "Elective";
    }
  } else if (classCode === "C S 480") {
    if (
      emphasisName === "Machine Learning" ||
      emphasisName === "Animation and Games"
    ) {
      return "Not Applicable";
    } else if (emphasisName === "Software Engineering") {
      return "Core";
    } else {
      return "Elective";
    }
  } else if (classCode === "C S 481") {
    if (
      emphasisName === "Machine Learning" ||
      emphasisName === "Animation and Games"
    ) {
      return "Not Applicable";
    } else if (emphasisName === "Software Engineering") {
      return "Core";
    } else {
      return "Elective";
    }
  } else if (classCode === "C S 482") {
    if (emphasisName === "Machine Learning") {
      return "Core";
    } else if (
      emphasisName === "Bioinformatics" ||
      emphasisName === "Computer Science"
    ) {
      return "Elective";
    } else {
      return "Not Applicable";
    }
  } else if (classCode === "C S 483") {
    if (emphasisName === "Machine Learning") {
      return "Core";
    } else if (
      emphasisName === "Bioinformatics" ||
      emphasisName === "Computer Science"
    ) {
      return "Elective";
    } else {
      return "Not Applicable";
    }
  } else if (classCode === "C S 486") {
    if (emphasisName === "Machine Learning") {
      return "Not Applicable";
    } else {
      return "Elective";
    }
  } else if (classCode === "C S 493r") {
    if (
      emphasisName === "Machine Learning" ||
      emphasisName === "Animation and Games"
    ) {
      return "Not Applicable";
    } else {
      return "Elective";
    }
  } else if (classCode === "C S 494") {
    if (emphasisName === "Computer Science") {
      return "Elective";
    } else {
      return "Not Applicable";
    }
  } else if (classCode === "C S 495") {
    if (emphasisName === "Computer Science") {
      return "Elective";
    } else {
      return "Not Applicable";
    }
  } else if (classCode === "C S 497r") {
    if (emphasisName === "Animation and Games") {
      return "Not Applicable";
    } else if (emphasisName === "Machine Learning") {
      return "Core";
    } else {
      return "Elective";
    }
  } else if (classCode === "C S 498r") {
    if (emphasisName === "Machine Learning") {
      return "Not Applicable";
    } else {
      return "Elective";
    }
  } else if (classCode === "C S 500") {
    if (emphasisName === "Animation and Games") {
      return "Elective";
    } else {
      return "Not Applicable";
    }
  } else if (classCode === "C S 501r") {
    if (
      emphasisName === "Machine Learning" ||
      emphasisName === "Bioinformatics"
    ) {
      return "Not Applicable";
    } else {
      return "Elective";
    }
  } //cs 513, 575, 580 are elective for each

  return "Elective";
};

export const setEmphasisCategorization = (classObj: Class): EnhancedClass => {
  const emphasisNames = [
    "Computer Science",
    "Animation and Games",
    "Bioinformatics",
    "Machine Learning",
    "Software Engineering",
  ];
  let categorization: ClassEmphasisCategorization = {
    ComputerScience: "Not Applicable",
    AnimationAndGames: "Not Applicable",
    Bioinformatics: "Not Applicable",
    MachineLearning: "Not Applicable",
    SoftwareEngineering: "Not Applicable",
  };

  emphasisNames.forEach((emphasisName) => {
    const category = determineCategory(classObj, emphasisName);

    if (emphasisName === "Computer Science") {
      classObj.emphasisCategorization.ComputerScience = category;
    } else if (emphasisName === "Animation and Games") {
      classObj.emphasisCategorization.AnimationAndGames = category;
    } else if (emphasisName === "Bioinformatics") {
      classObj.emphasisCategorization.Bioinformatics = category;
    } else if (emphasisName === "Machine Learning") {
      classObj.emphasisCategorization.MachineLearning = category;
    } else if (emphasisName === "Software Engineering") {
      classObj.emphasisCategorization.SoftwareEngineering = category;
    }
  });

  classObj.emphasisCategorization = categorization;

  return {
    ...classObj,
    emphasisCategorization: categorization,
  };
};

export type EnhancedClass = Class & {
  emphasisCategorization: ClassEmphasisCategorization;
};

export default individualCSClasses;
