"use client";
import Blob from "./components/Blob";
import HorizontalScrollCarousel from "./components/HorizontalCarousel";
import { MacbookScroll } from "./components/MacbookScroll";
import  HeroHighlightDisplay from "./components/Highlight";
import AnimatedPinDisplay from "./components/ProjectCard";
import BubbleDisplay from "./components/BubbleText";
import { GoogleGeminiEffectDisplay } from "./components/Gemini";
import FloatingNavDisplay from "./components/Navbar";


export default function Page() {
  return (
    <>
      <Blob/>
      <HeroHighlightDisplay/>
      <FloatingNavDisplay/>
        
        <MacbookScroll
          title={<></>}
          src={`/github.png`}
          showGradient={false}
        /> 
      <HorizontalScrollCarousel />
      <BubbleDisplay/>
      <div className="flex flex-auto overscroll-x-contain">  
      <AnimatedPinDisplay
        title={"github.com/Takshashakti/CrowdFlow"}
        href={"https://github.com/Takshashakti/CrowdFlow"}
        cardName={"Crowdflow"}
        cardDescription={"Crowdflow is a project that aims to help people report water related issues to the government."}
      />
      <AnimatedPinDisplay
        title={"github.com/Phynxxx/Text-Summarizer"}
        href={"https://github.com/Phynxxx/Text-Summarizer"}
        cardName={"Text-Summarizer"}
        cardDescription={"This Python script provides a simple text summarization function using Spacy, and word frequency analysis."}
      />
      <AnimatedPinDisplay
        title={"github.com/Phynxxx/Flappy-Bird"}
        href={"https://github.com/Phynxxx/Flappy-Bird"}
        cardName={"Flappy-Bird"}
        cardDescription={"Clone of the very popylar game Flappy Bird made using Pygame."}
      />
      </div>
      <GoogleGeminiEffectDisplay/>
      
    </>
    
  );
}
