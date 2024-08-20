import { useAITeacher } from "@/hooks/useAITeacher";
import { useState } from "react";

export const TypingBox = () => {
  const askAI = useAITeacher((state) => state.askAI);
  const loading = useAITeacher((state) => state.loading);
  const [question, setQuestion] = useState("");

  const ask = () => {
    askAI(question);
    setQuestion("");
  };

  return (
    <div className="z-10 max-w-[600px] flex space-y-6 flex-col bg-gradient-to-tr from-slate-300/40 via-gray-500/40 to-slate-700/40 p-6 backdrop-blur-md rounded-xl border border-slate-200/30 shadow-lg shadow-slate-800/50">
      <div>
        <h2 className="text-black dark:text-white font-bold text-xl">
          Hola, Ask me anything about Web Development, Programming Languages, Data Structures & Algorithms, and AI with Machine Learning
        </h2>
        <p className="text-black/70 dark:text-white/70">
          Type any topic you want to learn more about.
        </p>
      </div>

      {loading ? (
        <div className="flex justify-center items-center">
          <span className="relative flex h-4 w-4">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-white opacity-75"></span>
            <span className="relative inline-flex rounded-full h-4 w-4 bg-white"></span>
          </span>
        </div>
      ) : (
        <div className="gap-3 flex">
          <input
            className="focus:outline focus:outline-white/80 flex-grow bg-slate-800/70 p-3 px-5 rounded-full text-white placeholder:text-white/50 shadow-inner shadow-slate-900/60"
            placeholder="Ask your queries..."
            value={question}
            onChange={(e) => setQuestion(e.target.value)}
            onKeyDown={(e) => {
              if (e.key === "Enter") {
                ask();
              }
            }}
          />
          <button
            className="bg-slate-100/20 p-2 px-6 rounded-full text-white hover:bg-slate-100/30 transition-all duration-300"
            onClick={ask}
          >
            Ask
          </button>
        </div>
      )}
    </div>
  );
};
