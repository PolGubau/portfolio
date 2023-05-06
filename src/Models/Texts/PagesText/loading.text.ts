export interface INotFound {
  text: string;
}
interface ILoadingText {
  en: INotFound;
  es: INotFound;
  ca: INotFound;
  de: INotFound;
}
const loadingText: ILoadingText = {
  en: {
    text: `Loading...`,
  },
  es: {
    text: `Cargando... `,
  },
  ca: {
    text: `Carregant...`,
  },
  de: {
    text: `Wird geladen...`,
  },
};

export default loadingText;
