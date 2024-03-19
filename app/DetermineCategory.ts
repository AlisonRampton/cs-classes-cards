import { Class } from "./definitions";

export const determineCategory = (
  classObj: Class,
  emphasisName: string
): string => {
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
      //   console.log(
      //     `Class ${classObj.name}, Emphasis: ${emphasisName}, Code: ${classCode}`
      //   );
      //   console.log("Entering CSANM block with " + classCode);
      const coreAnimationAndGamesClasses = [
        "CSANM 150",
        "CSANM 250",
        "CSANM 342",
        "CSANM 352",
        "CSANM 354",
        "CSANM 450",
        "CSANM 452",
        "CSANM 459",
        "CSANM 460",
      ];

      if (coreAnimationAndGamesClasses.includes(classCode)) {
        return "Core";
      } else {
        return "Elective";
      }
    } else {
      //console.log(`Emphasis ${emphasisName}, class ${classCode} is not in ANM`);
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
  else {
    //default case
    return "Not Applicable";
  }
};
