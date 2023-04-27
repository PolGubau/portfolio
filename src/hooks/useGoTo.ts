import { useNavigate } from "react-router-dom";

export const useGoTo = () => {
  const navigate = useNavigate();

  const goThere = (path: string) => {
    navigate(path);
  };

  return {
    goThere,
  };
};

export default useGoTo;
