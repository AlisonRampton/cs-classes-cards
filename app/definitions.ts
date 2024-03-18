export type Emphasis = {
  displayName: string;
  catalogName: string;
};

export type Credits = {
  creditHours: {
    min: number;
    value: number;
    operator: string;
  };
  lectureHours: {
    value: number;
    operator: string;
  };
  labHours: {
    value: number;
    operator: string;
  };
};

export type Rule = {
  condition: string;
  value: {
    condition: string;
    values: {
      logic: string;
      value: string[];
    }[];
    id?: string;
  };
  name: string;
  id: string;
};

export type Requisite = {
  name: string;
  type: string;
  showInCatalog: boolean;
  rules: Rule[];
};

export type ProgramDependent = {
  _id: string;
  condition: string;
  courseDependencyId: string;
  programId: string;
  requisiteName: string;
  requisiteType: string;
  showInCatalog: boolean;
  type: string;
  name: string;
  code: string;
  longName: string;
  programGroupId: string;
};

export type CourseDependent = {
  _id: string;
  condition: string;
  courseDependencyId: string;
  courseId: string;
  requisiteName: string;
  requisiteType: string;
  showInCatalog: boolean;
  type: string;
  name: string;
  code: string;
  subjectCode: string;
  courseNumber: string;
  longName: string;
  programGroupId: string;
};

export type Class = {
  id: string;
  code: string;
  courseGroupID: string;
  credits: Credits;
  description: string;
  effectiveEndDate: string;
  effectiveStartDate: string;
  longName: string;
  name: string;
  requisites: { requisitesSimple: Requisite[] };
  status: string;
  subjectCode: string;
  courseNumber: string;
  // career: string; // is this anything? has different values, but not sure what it means
  courseDependents: CourseDependent[][];
  programDependents: ProgramDependent[][];
  emphasisCategorization: ClassEmphasisCategorization;
};

export type ClassEmphasisCategorization = {
  ComputerScience: string;
  AnimationAndGames: string;
  Bioinformatics: string;
  MachineLearning: string;
  SoftwareEngineering: string;
  [key: string]: string; // Adding an index signature
};
