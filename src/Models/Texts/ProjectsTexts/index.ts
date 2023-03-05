import { IProject } from "src/Interfaces";
import { afternoonsText } from "./afternoons.text";
import { askaquestText } from "./askaquest.text";
import { cvCreatorText } from "./cvCreator.text";
import { habitsText } from "./habits.text";
import { memoText } from "./memo.text";
import { nuweText } from "./nuwe.text";
import { rispotText } from "./rispot.text";
import { skatlaText } from "./skatla.text";
import { stickiesText } from "./stickies.text";
import { thoseColorsText } from "./thoseColors.text";
import { uabMediaText } from "./uabMedia.text";
import { unbrushedText } from "./unbrushed.text";

export * from "./afternoons.text";
export * from "./askaquest.text";
export * from "./cvCreator.text";
export * from "./habits.text";
export * from "./memo.text";
export * from "./nuwe.text";
export * from "./rispot.text";
export * from "./skatla.text";
export * from "./stickies.text";
export * from "./thoseColors.text";
export * from "./uabMedia.text";
export * from "./unbrushed.text";

export const allProjects: IProject[] = [
  habitsText,
  stickiesText,
  nuweText,
  askaquestText,
  afternoonsText,
  cvCreatorText,
  uabMediaText,
  unbrushedText,
  rispotText,
  skatlaText,
  memoText,
  thoseColorsText,
];
