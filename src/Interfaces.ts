export interface ProyectoInterface {
  id: number;
  path: string;
  title: string;
  year: number;
  category: { English: string; Spanish: string; Catalan: string };
  pointOfInterest: { x: number; y: number };
  textColor: string;
  backgroundColor: string;
  width: number;
  pathToImg: string;
  tags: string[];
  invisibleTags?: string[];
  madeFor?: { English: string; Spanish: string; Catalan: string };
  description: { English: string; Spanish: string; Catalan: string };
  githubLink: string;
  link: string;
}

export interface CartInterface {
  index?: number;
  allData?: Array<ProyectoInterface>;
  project: ProyectoInterface;
  ids: any;
  lang: string;
  isSelected: boolean;
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
