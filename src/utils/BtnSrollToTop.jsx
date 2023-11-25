import { useEffect, useRef, useState } from "react";
import { FcCollapse } from "react-icons/fc";

export default function BtnSrollToTop() {
  const [isVisible, setIsVisible] = useState(false);
  const prevScrollPos = useRef(0);

  useEffect(() => {
    const toggleVisibility = () => {
      const currentScrollPos = window.pageYOffset;

      // Button is displayed after scrolling for 500 pixels
      if (currentScrollPos > 500 && currentScrollPos > prevScrollPos.current) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }

      prevScrollPos.current = currentScrollPos;
    };

    window.addEventListener("scroll", toggleVisibility);

    return () => window.removeEventListener("scroll", toggleVisibility);
  }, [isVisible]);


  return (
    <div
      onClick={() => window.scrollTo({ top: 0 })}
      className={isVisible ? 'fixed bottom-[50px] right-5 TopZIndex bg-inherit p-1 border-2 border-primary_Color cursor-pointer scale-100 Transition300 opacity-1' : "Transition300 scale-0 opacity-0"}>
      <FcCollapse className="text-[25px]" />
    </div>
  )
}
