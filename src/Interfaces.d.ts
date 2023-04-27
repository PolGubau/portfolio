export interface ITextByLanguage {
  English: string;
  Spanish: string;
  Catalan: string;
}

export interface IProject {
  id: number;
  path: string;
  title: string;
  year: number;
  category: ITextByLanguage;
  pointOfInterest: { x: number; y: number };
  textColor: string;
  backgroundColor: string;
  width: number;
  pathToImg: string;
  tags: string[];
  invisibleTags?: string[];
  madeFor?: ITextByLanguage;
  description: ITextByLanguage;
  githubLink?: string;
  figmaLink?: string;
  npmComand?: string;
  npmLink?: string;
  link: string;
  relevant: boolean;
}

export interface CardInterface {
  index?: number;
  allData?: Array<IProject>;
  project: IProject;
  mobile: boolean;
}

export interface HeaderTextInterface {
  title: string;
  description: string;
}
export interface FooterTextInterface {
  greeting: string;
  curriculum: string;
  email: string;
  linkedin: string;
  github: string;
  instagram: string;
}
export interface IErrorOnSearch {
  title: string;
  description: string;
  action: string;
}
export interface ILanguagesData {
  English: string;
  Spanish: string;
  Catalan: string;
}

export interface ICardText {
  madeFor: string;
  tags: string;
  description: string;
  githubLink: string;
  link: string;
  linkButton: string;
}
export interface InavTexts {
  web: string;
  design: string;
  placeholder: string;
}
export interface InavTextsLanguages {
  English: InavTexts;
  Spanish: InavTexts;
  Catalan: InavTexts;
}

export interface ICardDataLanguages {
  English: CardTextInterface;
  Spanish: CardTextInterface;
  Catalan: CardTextInterface;
}

export interface FooterDataInterface {
  English: FooterTextInterface;
  Spanish: FooterTextInterface;
  Catalan: FooterTextInterface;
}
export interface HeaderDataInterface {
  English: HeaderTextInterface;
  Spanish: HeaderTextInterface;
  Catalan: HeaderTextInterface;
}
export interface IErrorLanguages {
  English: IErrorOnSearch;
  Spanish: IErrorOnSearch;
  Catalan: IErrorOnSearch;
}
export interface ILanguagesDataLanguages {
  English: ILanguagesData;
  Spanish: ILanguagesData;
  Catalan: ILanguagesData;
}
