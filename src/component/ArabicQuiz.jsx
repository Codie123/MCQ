import questionsData from "../data.json";
import { Link } from "react-router-dom";

const ArabicQuiz = () => {
  const questionData = questionsData.questions;

  return (
    <>
      <div
        className="bg-II-img font-rubik w-screen h-screen flex flex-col justify-center items-center gap-3  bg-white "
        dir={"rtl"}
      >
        <h1 className="text-white font-extrabold text-4xl mb-6">اختر سؤالا</h1>
        <div className=" max-w-screen-md w-full grid grid-cols-2 gap-4  backdrop-blur-2xl bg-white/30 border border-gray-200 dark:border-gray-700 rounded-lg p-8 md:p-12 mb-8">
          {questionData.map((question, index) => (
            <Link key={index} className="" to={`/quiz/${index}`}>
              <button
                key={index}
                className="h-fit p-3 rounded-lg w-full backdrop-blur-xl text-xl font-medium text-gray-900 focus:outline-none bg-white  border border-gray-200 hover:bg-gray-200 hover:text-darkBlue focus:z-10 focus:ring-4 focus:ring-darkBlue  shadow-2xl "
              >
                <div className="question text-2xl font-bold">
                  {question.id_ar}
                </div>
              </button>
            </Link>
          ))}
        </div>
      </div>
    </>
  );
};

export default ArabicQuiz;
