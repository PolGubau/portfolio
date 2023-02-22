import { atom } from "recoil";

const initialValue = {
  show: false,
};
export const OptionsAtom = atom({
  key: "OptionsAtom",
  default: initialValue,
});
