import { useInView } from "react-intersection-observer";
import { useAnimation } from "framer-motion";

export const useScroll = () => {
  const controls = useAnimation();
  const [element, view] = useInView({ triggerOnce: true, threshold: 0.3 });
  if (view) {
    controls.start("show");
  } else {
    controls.start("hidden");
  }
  return [element, controls];
};

export const scrollTo = (elem) => {
  elem.current.scrollIntoView({ behavior: "smooth" });
};

//Determines if the page has scrolled at all
export const scrollFunction = () => {
  if (window.pageYOffset) {
    setOffsetTop(true);
    console.log("true");
  } else {
    setOffsetTop(false);
    console.log("false");
  }
};

//Below code necessary to run function on scroll

// const [offsetTop, setOffsetTop] = useState(false);
// window.onscroll = function () {
//   scrollFunction();
// };

//
