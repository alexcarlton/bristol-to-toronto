import { useEffect } from "react";

function useScript({ src, id, onLoad }) {
  useEffect(() => {
    const existingScript = document.getElementById(id);

    if (existingScript) {
      return;
    }

    const script = document.createElement("script");

    script.src = src;
    script.id = id;
    script.async = true;
    script.defer = true;

    document.body.appendChild(script);

    script.onload = () => {
      onLoad();
    };

    script.onreadystatechange = () => {
      if (this.readyState === "complete") {
        onLoad();
      }
    };
  }, []);
}

export { useScript };
