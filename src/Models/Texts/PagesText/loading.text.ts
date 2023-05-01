export interface INotFound {
  text: string;
}
interface ILoadingText {
  English: INotFound;
  Spanish: INotFound;
  Catalan: INotFound;
  Deutsch: INotFound;
}
const loadingText: ILoadingText = {
  English: {
    text: `Loading...`,
  },
  Spanish: {
    text: `Cargando... `,
  },
  Catalan: {
    text: `Carregant...`,
  },
  Deutsch: {
    text: `Wird geladen...`,
  },
};

export default loadingText;
