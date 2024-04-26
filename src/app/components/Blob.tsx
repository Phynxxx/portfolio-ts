"use client";
import { useEffect, RefObject, useState, useRef } from "react";
import { motion} from "framer-motion";


export function useFollowPointer(ref: RefObject<HTMLElement>) {
    const [point, setPoint] = useState({ x: 0, y: 0 });
  
    useEffect(() => {
      if (!ref.current) return;
  
      const handlePointerMove = ({ clientX, clientY }: MouseEvent) => {
        const element = ref.current!;
  
        const x = clientX - element.offsetLeft - element.offsetWidth / 2;
        const y = clientY - element.offsetTop - element.offsetHeight / 2;
        setPoint({ x, y });
      };
  
      window.addEventListener("pointermove", handlePointerMove);
  
      return () => window.removeEventListener("pointermove", handlePointerMove);
    }, []);
  
    return point;
  }
  export default function Blob() {
    const ref = useRef(null);
    const { x, y } = useFollowPointer(ref);
  
  
    return (
    <div className="relative blur-[200px] h-[] w-full">
      <motion.div
       ref={ref}
       className="box"
       animate={{ x, y}}
       transition={{
         type: "spring",
         damping: 50,
         stiffness: 50,
       }}
        style={{
          x: x,
          y: y,
          position: "fixed",
          width: "500px",
          height: "500px",
          borderRadius: "50%",
          background: "linear-gradient(to right, aquamarine, mediumpurple)",
        }}
      />
    
    </div>
  );
}


