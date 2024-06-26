import { useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";

export const useOutsideClick = () => {
  const ref = useRef(null);

  const navigate = useNavigate();

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (ref.current && !ref.current.contains(event.target)) {
        navigate("/");
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [navigate]);
  return { ref };
};
