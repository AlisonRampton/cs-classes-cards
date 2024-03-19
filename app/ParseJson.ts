import { determineCategory } from "./DetermineCategory";
import csClassesData from "./classes.json";
import { Class, ClassEmphasisCategorization } from "./definitions";

// Function to extract and categorize each CS class as an individual object
const extractAndCategorizeCSClasses = (csClasses: any[]): EnhancedClass[] => {
  return csClasses.map((csClass) => {
    // Directly use determineCategory to set emphasis categorization for each class
    const emphasisCategorization: ClassEmphasisCategorization = {
      ComputerScience: determineCategory(csClass, "Computer Science"),
      AnimationAndGames: determineCategory(csClass, "Animation and Games"),
      Bioinformatics: determineCategory(csClass, "Bioinformatics"),
      MachineLearning: determineCategory(csClass, "Machine Learning"),
      SoftwareEngineering: determineCategory(csClass, "Software Engineering"),
    };

    // Return the enhanced class object with the added emphasis categorization
    return {
      ...csClass,
      emphasisCategorization,
    };
  });
};

// Assuming the data structure contains a 'data' field holding the classes
export const individualCSClasses: EnhancedClass[] =
  extractAndCategorizeCSClasses(csClassesData.data);

export type EnhancedClass = Class & {
  emphasisCategorization: ClassEmphasisCategorization;
};

const formatEmphasisKey = (
  emphasisName: string
): keyof ClassEmphasisCategorization => {
  let key = emphasisName.replace("Computer Science: ", "").replace(/ /g, "");

  // Convert the first letter to uppercase to match the key format
  key = key.charAt(0).toUpperCase() + key.slice(1);

  return key as keyof ClassEmphasisCategorization;
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
    console.log("hello3~");
    const category = determineCategory(classObj, emphasisName);
    const formattedKey = formatEmphasisKey(emphasisName);
    console.log("hello2~");
    categorization[formattedKey] = category;

    if (emphasisName === "Computer Science") {
      classObj.emphasisCategorization[formattedKey] = category;
    } else if (emphasisName === "Animation and Games") {
      classObj.emphasisCategorization[formattedKey] = category;
    } else if (emphasisName === "Bioinformatics") {
      classObj.emphasisCategorization[formattedKey] = category;
    } else if (emphasisName === "Machine Learning") {
      classObj.emphasisCategorization[formattedKey] = category;
    } else if (emphasisName === "Software Engineering") {
      classObj.emphasisCategorization[formattedKey] = category;
    }
    console.log("hello1~");
  });
  console.log("hello~");
  emphasisNames.forEach((emphasisName) => {
    console.log(`Class: ${classObj.code}`);
    Object.entries(classObj.emphasisCategorization).forEach(
      ([emphasisName, category]) => {
        console.log(`Emphasis: ${emphasisName}, Category: ${category}`);
      }
    );
  });

  classObj.emphasisCategorization = categorization;

  return {
    ...classObj,
    emphasisCategorization: categorization,
  };
};
