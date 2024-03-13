import csClassesData from "./classes.json";
import { Class } from "./definitions";

// Function to extract each CS class as an individual object
const extractCSClasses = (csClasses: any) => {
  return csClasses.map((csClass: any) => ({
    //_id: csClass._id,
    code: csClass.code,
    // college: csClass.college,
    courseGroupId: csClass.courseGroupId,
    courseNumber: csClass.courseNumber,
    credits: csClass.credits,
    // customFields: csClass.customFields,
    //departments: csClass.departments,
    description: csClass.description,
    effectiveEndDate: csClass.effectiveEndDate,
    effectiveStartDate: csClass.effectiveStartDate,
    id: csClass.id,
    longName: csClass.longName,
    name: csClass.name,
    requisites: csClass.requisites,
    courseDependents: csClass.courseDependents,
    programDependents: csClass.programDependents,
    // requestStatus: csClass.requestStatus,
    status: csClass.status,
    subjectCode: csClass.subjectCode,
    // Add or remove properties based on what is relevant for your needs
  }));
};

// Assuming the data structure contains a 'data' field holding the classes
const individualCSClasses: Class[] = extractCSClasses(csClassesData.data);

export default individualCSClasses;
