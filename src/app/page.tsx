import React from "react";
import Image from "next/image";
import image1 from "../../public/images/image1.jpg";
import logo from "../../public/images/logo.png";

const page = () => {
  return (
    <div className="flex flex-col w-full min-h-screen bg-gray-900 text-white p-0 m-0">
      <main className="flex-1 w-full">
        <section className="w-full py-12 md:py-24 lg:py-32 xl:py-48 text-white">
          <div className="container mx-auto px-4 md:px-6">
            <div className="grid gap-6 lg:grid-cols-[1fr_400px] lg:gap-12 xl:grid-cols-[1fr_600px]">
              <div className="flex flex-col justify-center space-y-4">
                <div className="space-y-2">
                  <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl">
                    Prepare for Technical Topics with Generative AI
                  </h1>
                  <p className="max-w-[600px] text-gray-300 md:text-xl">
                    VPrep is a smart teaching and preparation assistant that
                    uses cutting-edge AI technology to help you master complex
                    technical subjects.
                  </p>
                </div>
                <div className="flex flex-col gap-2 min-[400px]:flex-row">
                  <a
                    href="#"
                    className="bg-red-600 text-white p-2 rounded-lg hover:bg-red-500"
                  >
                    Get Started Now
                  </a>
                </div>
              </div>
              <div className="flex flex-col justify-center space-y-4">
                <img
                  src="https://i.postimg.cc/fyX6XDf9/Screenshot-2024-08-19-225804-removebg-preview.png"
                  alt="VPrep AI"
                  width={700}
                  height={700}
                  className="mx-auto aspect-auto object-cover rounded-xl sm:w-96 lg:order-last"
                />
              </div>
            </div>
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32 bg-gray-800 text-white">
          <div className="container mx-auto px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <div className="inline-block rounded-lg bg-gray-700 px-3 py-1 text-sm text-red-600">
                  Key Features
                </div>
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
                  Why Choose VPrep?
                </h2>
                <p className="max-w-[900px] text-gray-300 md:text-xl">
                  VPrep combines innovative AI teaching, comprehensive learning
                  modules, and robust assessments to ensure a complete and
                  effective learning experience.
                </p>
              </div>
            </div>
            <div className="mx-auto grid max-w-5xl items-center gap-6 py-12 lg:grid-cols-2 lg:gap-12">
              <div className="flex flex-col justify-center space-y-4">
                <ul className="grid gap-6">
                  <li>
                    <div className="grid gap-1">
                      <h3 className="text-xl font-bold">
                        Vassist - AI Teacher
                      </h3>
                      <p className="text-gray-400">
                        Engage with our 3D modeled AI teacher who guides you
                        through topics, asks questions, and adapts to your
                        learning needs.
                      </p>
                    </div>
                  </li>
                  <li>
                    <div className="grid gap-1">
                      <h3 className="text-xl font-bold">Learning Modules</h3>
                      <p className="text-gray-400">
                        Explore a wide range of learning modules designed to
                        enhance your understanding of complex subjects at your
                        own pace.
                      </p>
                    </div>
                  </li>
                  <li>
                    <div className="grid gap-1">
                      <h3 className="text-xl font-bold">
                        Quizzes and Assessments
                      </h3>
                      <p className="text-gray-400">
                        Test your knowledge and receive detailed assessments to
                        track your progress and identify areas for improvement.
                      </p>
                    </div>
                  </li>
                </ul>
              </div>
              <div className="flex flex-col justify-center space-y-4">
                <Image
                  src={image1}
                  width="550"
                  height="310"
                  alt="VPrep Features"
                  className="mx-auto aspect-auto object-cover rounded-xl sm:w-full"
                />
              </div>
            </div>
          </div>
        </section>

        <section className="w-full py-12 md:py-24 lg:py-32 bg-gray-900">
          <div className="container mx-auto grid items-center justify-center gap-4 px-4 text-center md:px-6 lg:gap-10">
            <div className="space-y-3">
              <div className="inline-block rounded-lg bg-gray-700 px-3 py-1 text-sm text-red-600">
                Testimonials
              </div>
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                What Our Users Say
              </h2>
              <p className="mx-auto max-w-[700px] text-gray-300 md:text-xl">
                Hear from the people who have used VPrep to excel in their
                technical studies.
              </p>
            </div>
            <div className="grid w-full grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3">
              <div className="p-6 space-y-4 bg-gray-800 rounded-lg">
                <div className="flex items-center gap-4">
                  <Image
                    src={image1}
                    width="48"
                    height="48"
                    alt="User 1"
                    className="w-12 h-12 bg-gray-700 rounded-full"
                  />
                  <div>
                    <p className="text-sm font-medium text-left">Aditi</p>
                    <p className="text-sm text-gray-400 text-left">
                      Software Engineer
                    </p>
                  </div>
                </div>
                <blockquote className="text-lg font-semibold">
                  &ldquo;VPrep transformed the way I study. The AI
                  recommendations are spot on!&rdquo;
                </blockquote>
              </div>
              <div className="p-6 space-y-4 bg-gray-800 rounded-lg">
                <div className="flex items-center gap-4">
                  <Image
                    src={image1}
                    width="48"
                    height="48"
                    alt="User 2"
                    className="w-12 h-12 bg-gray-700 rounded-full"
                  />
                  <div>
                    <p className="text-sm font-medium text-left">Rohit</p>
                    <p className="text-sm text-gray-400 text-left">
                      Data Scientist
                    </p>
                  </div>
                </div>
                <blockquote className="text-lg font-semibold">
                  &ldquo;I love how personalized the learning experience is.
                  It&apos;s like having a tutor available 24/7.&rdquo;
                </blockquote>
              </div>
              <div className="p-6 space-y-4 bg-gray-800 rounded-lg">
                <div className="flex items-center gap-4">
                  <Image
                    src={image1}
                    width="48"
                    height="48"
                    alt="User 3"
                    className="w-12 h-12 bg-gray-700 rounded-full"
                  />
                  <div>
                    <p className="text-sm font-medium text-left">Priya</p>
                    <p className="text-sm text-gray-400 text-left">Student</p>
                  </div>
                </div>
                <blockquote className="text-lg font-semibold">
                  &ldquo;The detailed explanations and practice problems helped
                  me ace my exams!&rdquo;
                </blockquote>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};

export default page;
