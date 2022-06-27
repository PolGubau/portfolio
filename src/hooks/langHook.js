export default function langHook() {
  let lang = window.localStorage.getItem("language");
  return lang;
}
