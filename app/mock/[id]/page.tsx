"use client";

import { use, useEffect, useMemo, useState } from "react";

import Navbar from "@/components/Navbar";
import QuestionCard from "@/components/QuestionCard";
import Timer from "@/components/Timer";

import { getMockTest } from "@/lib/getMockTest";
import { shuffleArray } from "@/lib/shuffleArray";

import { useRouter } from "next/navigation";

type Props = {
  params: Promise<{
    id: string;
  }>;
};

export default function MockPage({
  params,
}: Props) {

  // NEXT 16 FIX
  const { id } = use(params);

  const router = useRouter();

  // LOAD + SHUFFLE QUESTIONS
  const questions = useMemo(() => {

    return shuffleArray(
      getMockTest(Number(id))
    );

  }, [id]);

  // STATES
  const [current, setCurrent] =
    useState(0);

  const [answers, setAnswers] =
    useState<Record<number, string>>(
      {}
    );

  // CURRENT QUESTION
  const question =
    questions?.[current];

  // LOAD SAVED ANSWERS
  useEffect(() => {

    const saved =
      localStorage.getItem(
        `answers-${id}`
      );

    if (saved) {

      setAnswers(
        JSON.parse(saved)
      );

    }

  }, [id]);

  // AUTO SCROLL
  useEffect(() => {

    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });

  }, [current]);

  // SELECT ANSWER
  const handleSelect = (
    value: string
  ) => {

    if (!question) return;

    const updated = {
      ...answers,
      [question.id]: value,
    };

    setAnswers(updated);

    localStorage.setItem(
      `answers-${id}`,
      JSON.stringify(updated)
    );
  };

  // SUBMIT TEST
  const submitTest = () => {

    localStorage.setItem(
      `answers-${id}`,
      JSON.stringify(answers)
    );

    router.push(
      `/result/${id}`
    );
  };

  // LOADING
  if (!question) {

    return (
      <div className="min-h-screen bg-black text-white flex items-center justify-center">
        Loading...
      </div>
    );

  }

  return (
    <>
      <Navbar />

      <div className="max-w-7xl mx-auto px-4 md:px-6 py-10 grid lg:grid-cols-4 gap-10">

        {/* LEFT SECTION */}

        <div className="lg:col-span-3">

          {/* HEADER */}

          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-5 mb-8">

            <div>

              <h1 className="text-3xl md:text-4xl font-black">
                Mock Test {id}
              </h1>

              <p className="text-slate-400 mt-2">
                Question {current + 1} of{" "}
                {questions.length}
              </p>

            </div>

            <Timer />

          </div>

          {/* QUESTION */}

          <QuestionCard
            question={question}
            selected={
              answers[question.id]
            }
            onSelect={handleSelect}
          />

          {/* NAVIGATION */}

          <div className="flex justify-between mt-8 gap-4">

            <button
              disabled={current === 0}
              onClick={() =>
                setCurrent(current - 1)
              }
              className="
                bg-slate-800
                hover:bg-slate-700
                disabled:opacity-40
                px-6
                py-4
                rounded-2xl
                transition
              "
            >
              Previous
            </button>

            {current ===
            questions.length - 1 ? (

              <button
                onClick={submitTest}
                className="
                  gradient
                  px-8
                  py-4
                  rounded-2xl
                  font-bold
                "
              >
                Submit Test
              </button>

            ) : (

              <button
                onClick={() =>
                  setCurrent(current + 1)
                }
                className="
                  gradient
                  px-8
                  py-4
                  rounded-2xl
                  font-bold
                "
              >
                Next
              </button>

            )}

          </div>

        </div>

        {/* RIGHT SIDEBAR */}

        <div className="card p-6 h-fit sticky top-24">

          <h2 className="text-2xl font-bold">
            Questions
          </h2>

          <div className="grid grid-cols-5 gap-3 mt-6">

            {questions.map(
              (
                q: any,
                index: number
              ) => (

                <button
                  key={q.id}
                  onClick={() =>
                    setCurrent(index)
                  }
                  className={`
                    h-12
                    rounded-xl
                    font-bold
                    transition-all
                    duration-200

                    ${
                      current === index
                        ? "bg-blue-600 scale-110"
                        : answers[q.id]
                        ? "bg-green-600"
                        : "bg-slate-800 hover:bg-slate-700"
                    }
                  `}
                >
                  {index + 1}
                </button>

              )
            )}

          </div>

          {/* SUBMIT */}

          <button
            onClick={submitTest}
            className="
              gradient
              w-full
              mt-8
              py-4
              rounded-2xl
              font-bold
            "
          >
            Submit Test
          </button>

        </div>

      </div>
    </>
  );
}