import questionsData from "../data.json";
import { Link } from "react-router-dom";

const EnglishQuiz = () => {
  const questionData = questionsData.questions;

  return (
    <>
      <div className="bg-II-img w-screen h-screen flex flex-col justify-center items-center gap-3">
        <h1 className="text-white font-extrabold text-4xl mb-6">
          Choose A Question
        </h1>
        <div className="wrapper max-w-screen-lg grid grid-cols-4 gap-4">
          {questionData.map((question, index) => (
            <button
              key={index}
              className="h-fit p-4 rounded-lg w-fit backdrop-blur-xl bg-white/50 shadow-2xl text-black text-lg hover:bg-white/60 "
            >
              <div className="question">
                <Link className="" to={`/quiz/${index}`}>
                  {question.id}
                </Link>
              </div>
            </button>
          ))}
        </div>
      </div>
    </>
  );
};

export default EnglishQuiz;
