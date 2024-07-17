import React from "react";
import questionsData from "../data.json";
import { Link } from "react-router-dom";

const ArabicQuiz = () => {
  const questionData = questionsData.questions;

  return (
    <>
      <div className="bg-II-img w-screen h-screen flex flex-col justify-center items-center gap-3">
        <h1 className="text-white font-bold text-4xl mb-6">اختر سؤالا</h1>
        <div className="wrapper max-w-screen-lg grid grid-cols-4 gap-4">
          {questionData.map((question, index) => (
            <button
              key={index}
              className="h-fit p-4 rounded-lg w-fit backdrop-blur-xl bg-white/30 shadow-2xl text-black hover:bg-white/50 "
            >
              <div className="question">
                <Link className="" to={`/quiz/${index}`}>
                  {question.id_ar}
                </Link>
              </div>
            </button>
          ))}
        </div>
      </div>
    </>
  );
};

export default ArabicQuiz;
