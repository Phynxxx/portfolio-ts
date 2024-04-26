import { useRef } from "react";
import { motion, useTransform, useScroll } from "framer-motion";
import { DisplayCard } from "./Card";
import TypewriterEffectSmoothDisplay from "./Typewriter";

const HorizontalScrollCarousel = () => {
    const targetRef = useRef<HTMLDivElement | null>(null);
    const { scrollYProgress } = useScroll({
      target: targetRef,
    });
  
    const x = useTransform(scrollYProgress, [0, 1], ["1%", "-60%"]);
  
    return (
      <section ref={targetRef} id="skills" className="relative h-[300vh] scroll-smooth">
        <div className="sticky top-0 flex h-screen items-center bg-gradient-to-b from-transparent via-black to-black overflow-hidden ease-in-out">
          <motion.div style={{ x }} className="flex gap-4">
            <DisplayCard text="Python" />
            <DisplayCard text="React" />
            <DisplayCard text="Next" />
            <DisplayCard text="C" />
            <DisplayCard text="Java" />
            <TypewriterEffectSmoothDisplay />
          </motion.div>
        </div>
      </section>
    );
  };

export default HorizontalScrollCarousel;
