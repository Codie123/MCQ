import questionsData from "../data.json";
import { Link } from "react-router-dom";

const EnglishQuiz = () => {
  const questionData = questionsData.questions.slice(0, 10);
  console.log(questionData.length);
  const handleRightClick = (e) => {
    e.preventDefault();
  };

  return (
    <>
      <div
        onContextMenu={handleRightClick}
        className="bg-II-img w-screen h-screen flex flex-col justify-center items-center gap-3  bg-white "
      >
        <h1 className="text-white font-extrabold text-9xl mb-6">
          Choose A Question
        </h1>
        <div className=" max-w-screen-3xl w-full grid grid-cols-2 gap-14   backdrop-blur-2xl bg-white border rounded-xl border-gray-200 dark:border-gray-700 rounded-lg p-8 md:p-12 mb-8">
          {questionData.map((question, index) => (
            <Link key={index} className="" to={`/quiz/${index}`}>
              <button
                key={index}
                className="h-fit p-3 rounded-lg w-full backdrop-blur-xl text-gray-900 focus:outline-none bg-white  border border-gray-200 hover:bg-gray-200  hover:text-darkBlue focus:z-10 focus:ring-4 focus:ring-darkBlue  shadow-2xl "
              >
                <div className="question text-cuz4xl font-bold">
                  {question.id}
                </div>
              </button>
            </Link>
          ))}
        </div>
      </div>
    </>
  );
};

export default EnglishQuiz;
