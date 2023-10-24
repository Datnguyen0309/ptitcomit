import { motion, useAnimation } from "framer-motion";
import { ReactNode, useEffect } from "react";

export const MotionLeft = ({ children }: { children: ReactNode }) => {
  const controls = useAnimation();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 100) { // Change the scroll threshold (e.g., 100 pixels)
        controls.start({
          right:0,
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
      initial={{ position: "relative", right: 3000, opacity: 1 }}
      animate={controls }
      transition={{ duration: 1, delay: 0.8 }} // Change animation duration and delay
    >
      {children}
    </motion.div>
  );
};
