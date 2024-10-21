import { HoverEffect } from "../ui/card-hover-effect";
import Image from "next/image";
export function CardHoverEffectDemo() {
  return (
    <>
      <img
        src="https://i.postimg.cc/W1xxW0Cv/Image-1.png"
        alt=""
        className="bgimg2"
      />
      <img
        src="https://i.postimg.cc/L8Jr3xyD/Image-3.png"
        alt=""
        className="bgimg4"
      />
      <img
        src="https://i.postimg.cc/TY7zbzch/Image-4.png"
        alt=""
        className="bgimg5"
      />
      <div className="max-w-5xl mx-auto px-8">
        <HoverEffect items={projects} />
      </div>
    </>
  );
}

export const projects = [
  {
    title: "Attend Quizzes !! Join Using Unique Codes",
    description:
      "Challenge yourself with quizzes that not only test your knowledge but also help you retain information.",
    link: "/",
  },
  {
    title: "AI Powered TODO List",
    description:
      "Stay organized and on track with a to-do list that uses AI to help you prioritize tasks and manage your time effectively.",
    link: "https://todo-ai-using-next-js.vercel.app/",
  },
  {
    title: "Take Virtual Interview",
    description:
      "Prepare for success with virtual interviews that simulate real-world scenarios. Practice your skills in a supportive environment designed to boost your confidence and readiness.",
    link: "https://v-prep-interview-bot.vercel.app/",
  },
  {
    title: "Online Notes Taking Application",
    description:
      "Keep your notes organized and accessible with an online note-taking application that lets you create notes from anywhere.",
    link: "https://v-prep-static-notes-service.vercel.app/",
  },
];
