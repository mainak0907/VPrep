import { HoverEffect } from "../ui/card-hover-effect";

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
    title: "Learn From Modules",
    description:
      "Dive into interactive modules designed to make learning engaging and effective. Master new skills at your own pace with insightful content tailored to your learning journey.",
    link: "/",
  },
  {
    title: "Attend Quizzes & Earn $",
    description:
      "Challenge yourself with quizzes that not only test your knowledge but also reward your effort. Earn rewards as you progress, turning learning into an exciting opportunity.",
    link: "/",
  },
  {
    title: "Book Class with VAssist",
    description:
      "Schedule your learning sessions effortlessly with Prepia. Choose from a variety of classes tailored to your interests and needs, ensuring a personalized learning experience.",
    link: "/vassist",
  },
  {
    title: "Take Virtual Interview",
    description:
      "Prepare for success with virtual interviews that simulate real-world scenarios. Practice your skills in a supportive environment designed to boost your confidence and readiness.",
    link: "/",
  },
];
