import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

function useAOS(duration = 1000) {
  useEffect(() => {
    AOS.init({
      duration,
      once: false,
    });

    const timeout = setTimeout(() => {
      AOS.refresh();
    }, 500);

    return () => clearTimeout(timeout); // clean up on unmount
  }, [duration]);
}

export default useAOS;
