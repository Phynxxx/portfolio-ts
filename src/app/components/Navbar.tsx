"use client";
import React, { useState} from "react";
import {
  motion,
  AnimatePresence,
  useScroll,
  useMotionValueEvent,
} from "framer-motion";
import { cn } from "@/utils/cn";
import Link from "next/link";
import { IconHome, IconMessage, IconUser } from "@tabler/icons-react";


export const FloatingNav = ({
  navItems,
  className,
}: {
  navItems: {
    name: string;
    link: string;
    icon?: JSX.Element;
  }[];
  className?: string;
}) => {
  const { scrollYProgress } = useScroll();

  const [visible, setVisible] = useState(false);

  useMotionValueEvent(scrollYProgress, "change", (current) => {
    // Check if current is not undefined and is a number
    if (typeof current === "number") {
      let direction = current! - scrollYProgress.getPrevious()!;

      if (scrollYProgress.get() < 0.05) {
        setVisible(false);
      } else {
        if (direction < 0) {
          setVisible(true);
        } else {
          setVisible(false);
        }
      }
    }
  });

  return (
    <AnimatePresence mode="wait">
      <motion.div
        initial={{
          opacity: 1,
          y: -100,
        }}
        animate={{
          y: visible ? 0 : -100,
          opacity: visible ? 1 : 0,
        }}
        transition={{
          duration: 0.2,
        }}
        className={cn(
          "flex max-w-fit fixed top-10 inset-x-0 mx-auto border  border-white/[0.2] rounded-full bg-black  shadow-[0px_2px_3px_-1px_rgba(0,0,0,0.1),0px_1px_0px_0px_rgba(25,28,33,0.02),0px_0px_0px_1px_rgba(25,28,33,0.08)] z-[5000] pr-8 pl-8 py-2  items-center justify-center space-x-4",
          className
        )}
      >
        {navItems.map((navItem: any, idx: number) => (
          <Link
            key={`link=${idx}`}
            href={navItem.link}
            className={cn(
              "relative text-neutral-50 items-center flex space-x-1  hover:text-neutral-300 scroll-smooth cursor-pointer transition duration-150"
            )}
          >
            <span className="block sm:hidden">{navItem.icon}</span>
            <span className="hidden sm:block text-sm">{navItem.name}</span>
          </Link>
        ))}
        
      </motion.div>
    </AnimatePresence>
  );
};
export default function FloatingNavDisplay() {
    
    const navItems = [
      {
        name: "Home",
        link: "#home",
        icon: <IconHome className="h-4 w-4 text-white duration-150 scroll-smooth"  />,
        
      },
      {
        name: "Skills",
        link: "#skills",
        icon: <IconUser className="h-4 w-4 text-white duration-150 scroll-smooth" />,
      },
      {
        name: "Projects",
        link: "#projects",
        icon: <IconUser className="h-4 w-4 text-white duration-150 scroll-smooth" />,
      },
      {
        name: "Contact",
        link: "#contact",
        icon: ( 
          <IconMessage className="h-4 w-4 text-white duration-150 scroll-smooth" />
        ),
      },
    ];
    return (
      <div className="relative  w-full">
        <FloatingNav navItems={navItems} />
       
      </div>
    );
  }
  