export const actualYear = new Date().getFullYear();

export interface IDataBlobs {
  id: number;
  placed: "left" | "right" | "center";
  upperTitle?: string;
  title: string;
  description: string;
  date: string;
  style: {
    color: string;
    height: string;
    marginTop: string;
    width: string;
  };
}

export const dataBlobs: IDataBlobs[] = [
  {
    id: -1,
    placed: "right",
    upperTitle: "Istituto",
    title: "Tecnico Superiore",
    description: "lorem lorem lorem",
    date: "2018-2019",
    style: {
      color: "#0059ff",
      height: "200px",
      marginTop: "165px",
      width: "60%",
    },
  },
  {
    id: 1,
    placed: "right",
    upperTitle: "Istituto",

    title: "Tecnico Superiore",
    description: "lorem lorem lorem",
    date: "2018-2019",
    style: {
      color: "#fff700",
      height: "150px",
      width: "54%",
      marginTop: "0px",
    },
  },
  {
    id: 2,
    placed: "left",
    title: "LCI Barcelona",
    description: "lorem lorem lorem",
    date: "2019-2020",
    style: {
      color: "#6f00ff",
      height: "190px",
      width: "49%",
      marginTop: "10px",
    },
  },
  {
    id: 3,
    placed: "right",
    upperTitle: "Universitat",
    title: "Autònoma de Barcelona",
    description: "lorem lorem lorem",
    date: "2020-2024",
    style: {
      color: "#ff0051",
      height: "180px",
      width: "53%",
      marginTop: "0px",
    },
  },
  {
    id: 4,
    placed: "left",
    title: "Linnaeus Universitet",
    description: "lorem lorem lorem",
    date: "2022-2023",
    style: {
      color: "#00eaff",
      height: "130px",
      width: "51%",
      marginTop: "25px",
    },
  },
  {
    id: 5,
    placed: "left",
    title: "NUWE",
    description: "lorem lorem lorem",
    date: `2021-${actualYear}`,
    style: {
      color: "#22ff00",
      height: "150px",
      width: "50%",
      marginTop: "100px",
    },
  },
  {
    id: 6,
    placed: "right",
    title: "Almato Iberia",
    description: "lorem lorem lorem",
    date: `2022-${actualYear}`,
    style: {
      color: "#22ffff",
      height: "220px",
      width: "60%",
      marginTop: "70px",
    },
  },
];
