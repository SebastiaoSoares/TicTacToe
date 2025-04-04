import style from "./Spinner.module.css";
import { useState, useEffect } from "react";

function Spinner() {
  return <div className={style.loader}></div>;
}

export default function Loader({ children }) {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (document.readyState === "complete") {
      setLoading(false);
    } else {
      const handleLoad = () => setLoading(false);
      window.addEventListener("load", handleLoad);
      return () => window.removeEventListener("load", handleLoad);
    }
  }, []);

  return loading ? <Spinner /> : children;
}
