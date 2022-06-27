export default function langHook() {
  let lang = window.localStorage.getItem("language");
  console.log("Hook: ", lang);
  return lang;
}
