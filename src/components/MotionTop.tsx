import { motion, useAnimation } from "framer-motion";
import { ReactNode, useEffect } from "react";

export const MotionTop = ({ children }: { children: ReactNode }) => {
  const controls = useAnimation();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 100 ) { // Change the scroll threshold (e.g., 100 pixels)
        controls.start({
          top: 0,
          opacity: 1,
        });
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [controls]);

  return (
    <motion.div
      initial={{ position: "relative", top: 3000, opacity: 0 }}
      animate={controls}
      transition={{ duration: 0.7, delay: 0.5 }} // Change animation duration and delay
    >
      {children}
    </motion.div>
  );
};
