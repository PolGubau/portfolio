import icons, { Icon } from "src/Models/iconsData";

export const getIcon = (name: string) => {
  const icon = icons.find(
    (icon: Icon) => icon.name.toLowerCase() === name.toLowerCase()
  );
  if (icon) {
    return icon.icon;
  }
  return <em> {name} </em>;
};
