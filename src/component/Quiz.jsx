import React, { useState } from "react";
import questionsData from "../data.json";
import { useNavigate, useParams } from "react-router-dom";

const Quiz = () => {
  const { id } = useParams();
  const [selectedOption, setSelectedOption] = useState("");
  const [disabled, setDisabled] = useState(false);
  const [message, setMessage] = useState("");
  const [messageType, setMessageType] = useState(""); // 'success' or 'error'
  const [correctAnswer, setCorrectAnswer] = useState(null);
  const questionById = questionsData.questions[id];
  const language = localStorage.getItem("lng");

  const navigate = useNavigate();
  const handleOptionChange = (option) => {
    setSelectedOption(option);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setDisabled(true);
    let isCorrect = false;

    if (language !== "arabic") {
      isCorrect = questionById.answer_en === selectedOption;
      setCorrectAnswer(questionById.answer_en);
    } else {
      isCorrect = questionById.answer_ar === selectedOption;
      setCorrectAnswer(questionById.answer_ar);
    }

    if (isCorrect) {
      setMessage("Correct! Well done.");
      setMessageType("success");
      setTimeout(() => {
        navigate("/");
      }, 1500);
    } else {
      setMessage("Incorrect! Try again.");
      setMessageType("error");
      setTimeout(() => {
        navigate("/");
      }, 1500);
    }
  };

  return (
    <>
      <div
        className="wrapper bg-II-img w-screen h-screen flex flex-col justify-center items-center "
        dir={language === "arabic" ? "rtl" : "ltr"}
      >
        {language !== "arabic" ? (
          <div className="container flex flex-col w-fit justify-center items-stretch p-10 rounded-2xl backdrop-blur-xl bg-white/30  shadow-2xl text-black">
            <div className="question">
              <h1 className="text-4xl font-bold ">
                {questionById.question_en}
              </h1>
            </div>

            <div className="answer-container mt-4 ">
              <form onSubmit={handleSubmit} className="flex flex-col gap-4">
                {questionById.optionsen.map((x, index) => (
                  <div key={index}>
                    <div
                      className={`flex items-center ps-4 border border-gray-200 rounded dark:border-gray-700 ${
                        selectedOption === x && disabled && correctAnswer === x
                          ? "bg-success border-color-transparent text-white"
                          : ""
                      } ${
                        selectedOption === x && disabled && correctAnswer !== x
                          ? "bg-error text-white"
                          : ""
                      }`}
                    >
                      <input
                        name={`option-${id}`}
                        id={`option-${index}`}
                        disabled={disabled}
                        type="radio"
                        value={x}
                        onChange={() => handleOptionChange(x)}
                        required
                        className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300  dark:focus:ring-blue-600  dark:bg-gray-700 dark:border-gray-600"
                      />
                      <label
                        htmlFor={`option-${index}`}
                        className={`w-full py-4 ms-2 text-xl font-medium ${
                          selectedOption === x &&
                          disabled &&
                          correctAnswer === x
                            ? " text-white"
                            : "text-gray-900"
                        } ${
                          selectedOption === x &&
                          disabled &&
                          correctAnswer !== x
                            ? " text-white"
                            : "text-gray-900"
                        } `}
                      >
                        {x}
                      </label>
                    </div>
                  </div>
                ))}
                <button
                  type="submit"
                  className="mt-8 px-6 py-3.5 text-base font-medium text-white bg-slate-950 hover:bg-slate-800 disabled:cursor-not-allowed disabled:bg-slate-800 focus:outline-none   rounded-lg text-center  "
                  disabled={disabled}
                >
                  Submit
                </button>
              </form>
            </div>
          </div>
        ) : (
          <div className="container flex flex-col max-w-xl justify-center items-stretch p-10 rounded-2xl backdrop-blur-xl bg-white/30  shadow-2xl text-black">
            <div className="question">
              <h1 className="text-4xl font-bold">{questionById.question_ar}</h1>
            </div>

            <div className="answer-container mt-4 ">
              <form onSubmit={handleSubmit} className="flex flex-col gap-4">
                {questionById.options_ar.map((x, index) => (
                  <div key={index}>
                    <div
                      className={`flex items-center ps-4 border border-gray-200 rounded dark:border-gray-700 ${
                        selectedOption === x && disabled && correctAnswer === x
                          ? "bg-success text-white"
                          : ""
                      } ${
                        selectedOption === x && disabled && correctAnswer !== x
                          ? "bg-error text-white"
                          : ""
                      }`}
                    >
                      <input
                        name={`option-${id}`}
                        id={`option-${index}`}
                        type="radio"
                        value={x}
                        required
                        disabled={disabled}
                        onChange={() => handleOptionChange(x)}
                        className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300  dark:focus:ring-blue-600 dark:ring-offset-gray-800  dark:bg-gray-700 dark:border-gray-600"
                      />
                      <label
                        htmlFor={`option-${index}`}
                        className={`w-full py-4 ms-2 text-xl font-medium ${
                          selectedOption === x &&
                          disabled &&
                          correctAnswer === x
                            ? " text-white"
                            : "text-gray-900"
                        } ${
                          selectedOption === x &&
                          disabled &&
                          correctAnswer !== x
                            ? " text-white"
                            : "text-gray-900"
                        } `}
                      >
                        {x}
                      </label>
                    </div>
                  </div>
                ))}
                <button
                  type="submit"
                  className="mt-8 px-6 py-3.5 text-base font-medium text-white bg-slate-950 hover:bg-slate-800 disabled:cursor-not-allowed disabled:bg-slate-800 focus:outline-none   rounded-lg text-center  "
                  disabled={disabled}
                >
                  Submit
                </button>
              </form>
            </div>
          </div>
        )}

        {message && (
          <div
            className={`mt-4 p-4 rounded-lg ${
              messageType === "success" ? "bg-green-500" : "bg-red-500"
            } text-white`}
          >
            {message}
          </div>
        )}
      </div>
    </>
  );
};

export default Quiz;
