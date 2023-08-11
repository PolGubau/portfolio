import { Link } from "react-router-dom";

const isALink = (href: string | undefined, value: string) => {
  if (href) {
    return <Link to={href}>{value}</Link>;
  }
  return value;
};

interface Props {
  size: number | undefined;
  href?: string;
  text: string;
}

export const textSizer: React.FC<Props> = ({ size, href, text }) => {
  switch (size) {
    case 1:
      return <h1>{isALink(href, text)}</h1>;
    case 2:
      return <h2>{isALink(href, text)}</h2>;
    case 3:
      return <h3>{isALink(href, text)}</h3>;
    case 4:
      return <h4>{isALink(href, text)}</h4>;
    case 5:
      return <h5>{isALink(href, text)}</h5>;
    case 6:
      return <h6>{isALink(href, text)}</h6>;
    default:
      return <p>{isALink(href, text)}</p>;
  }
};
