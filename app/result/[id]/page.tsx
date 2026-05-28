"use client";

import { use } from "react";

import Navbar from "@/components/Navbar";

import { getMockTest } from "@/lib/getMockTest";

type Props = {
  params: Promise<{
    id: string;
  }>;
};

export default function ResultPage({
  params,
}: Props) {

  // NEXT 16 FIX
  const { id } = use(params);

  // FIX 1
  const questions =
    getMockTest(Number(id)) || [];

  // FIX 2
  const answers =
    typeof window !== "undefined"
      ? JSON.parse(
          localStorage.getItem(
            `answers-${id}`
          ) || "{}"
        )
      : {};

  let correct = 0;

  // FIX 3
  questions.forEach((q: any) => {

    if (
      answers[q.id] ===
      q.correctAnswer
    ) {

      correct++;

    }

  });

  const wrong =
    questions.length - correct;

  const percentage =
    questions.length > 0
      ? (
          (correct /
            questions.length) *
          100
        ).toFixed(1)
      : 0;

  return (
    <>
      <Navbar />

      <div className="min-h-screen bg-black text-white px-4 py-10">

        <div className="max-w-4xl mx-auto">

          {/* HEADER */}

          <div className="text-center mb-10">

            <h1 className="text-5xl font-black mb-4">
              Test Result
            </h1>

            <p className="text-slate-400 text-lg">
              Mock Test {id}
            </p>

          </div>

          {/* SCORE CARDS */}

          <div className="grid md:grid-cols-3 gap-6 mb-10">

            <div className="bg-slate-900 border border-slate-800 rounded-3xl p-8 text-center">

              <h2 className="text-slate-400 mb-3">
                Correct
              </h2>

              <p className="text-5xl font-black text-green-400">
                {correct}
              </p>

            </div>

            <div className="bg-slate-900 border border-slate-800 rounded-3xl p-8 text-center">

              <h2 className="text-slate-400 mb-3">
                Wrong
              </h2>

              <p className="text-5xl font-black text-red-400">
                {wrong}
              </p>

            </div>

            <div className="bg-slate-900 border border-slate-800 rounded-3xl p-8 text-center">

              <h2 className="text-slate-400 mb-3">
                Percentage
              </h2>

              <p className="text-5xl font-black text-blue-400">
                {percentage}%
              </p>

            </div>

          </div>

          {/* QUESTION REVIEW */}

          <div className="space-y-6">

            {questions.map((q: any) => {

              const userAnswer =
                answers[q.id];

              const isCorrect =
                userAnswer ===
                q.correctAnswer;

              return (

                <div
                  key={q.id}
                  className="
                    bg-slate-900
                    border
                    border-slate-800
                    rounded-2xl
                    p-6
                  "
                >

                  <h2 className="text-xl font-bold mb-5">

                    {q.id}. {q.question}

                  </h2>

                  <div className="space-y-3">

                    {q.options.map(
                      (
                        option: string,
                        index: number
                      ) => {

                        const isUser =
                          userAnswer === option;

                        const isRight =
                          q.correctAnswer === option;

                        return (

                          <div
                            key={index}
                            className={`
                              p-4
                              rounded-xl
                              border

                              ${
                                isRight
                                  ? "bg-green-600/20 border-green-500"
                                  : isUser
                                  ? "bg-red-600/20 border-red-500"
                                  : "bg-slate-800 border-slate-700"
                              }
                            `}
                          >

                            <span className="font-bold mr-2">

                              {String.fromCharCode(
                                65 + index
                              )}
                              .

                            </span>

                            {option}

                          </div>

                        );

                      }
                    )}

                  </div>

                  <div className="mt-5">

                    <p className="text-sm text-slate-300">

                      Your Answer:{" "}

                      <span
                        className={
                          isCorrect
                            ? "text-green-400 font-bold"
                            : "text-red-400 font-bold"
                        }
                      >
                        {userAnswer ||
                          "Not Attempted"}
                      </span>

                    </p>

                    <p className="text-sm text-green-400 mt-2">

                      Correct Answer:{" "}

                      {q.correctAnswer}

                    </p>

                    <p className="text-sm text-slate-400 mt-3">

                      {q.explanation}

                    </p>

                  </div>

                </div>

              );

            })}

          </div>

        </div>

      </div>
    </>
  );
}