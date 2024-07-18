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
          <div className="container flex flex-col gap-8 max-w-screen-md justify-center items-stretch p-10 rounded-2xl backdrop-blur-2xl bg-white/30  shadow-2xl text-white">
            <div className="question">
              <h1 className="text-4xl font-semibold ">
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
                        className={`w-full py-4 ms-2 text-xl text-white font-light ${
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
          <div className="container font-rubik flex flex-col gap-8 max-w-screen-md justify-center items-stretch p-10 rounded-2xl backdrop-blur-2xl bg-white/30  shadow-2xl text-white">
            <div className="question">
              <h1 className="text-4xl font-normal">
                {questionById.question_ar}
              </h1>
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
                        className={`w-full py-4 ms-2 text-xl text-white font-light ${
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
          <div className=" absolute backdrop-blur-xl bg-white/40 w-screen h-fit flex flex-col items-center justify-center h-screen">
            <div
              className={`h-96 rounded-lg  z-20 ${
                messageType === "success" ? "bg-transparent" : "bg-transparent"
              } text-white`}
            >
              {messageType === "success" ? (
                <svg
                  version="1.1"
                  id="Layer_1"
                  xmlns="http://www.w3.org/2000/svg"
                  xmlns:xlink="http://www.w3.org/1999/xlink"
                  xml:space="preserve"
                >
                  <path
                    class="circle"
                    stroke="#1C9943"
                    stroke-width="10"
                    fill="#fff"
                    fill-opacity="0"
                    stroke-miterlimit="10"
                    d="M150,47.9c18.4,0,35.4,4.6,51,13.8s28,21.6,37.2,37.2s13.8,32.6,13.8,51s-4.6,35.4-13.8,51s-21.6,28-37.2,37.2
s-32.6,13.8-51,13.8s-35.4-4.6-51-13.8s-28-21.6-37.2-37.2s-13.8-32.6-13.8-51s4.6-35.4,13.8-51s21.6-28,37.2-37.2
S131.7,47.9,150,47.9z M150,238.7c16.2,0,31-4,"
                  />

                  <path
                    class="tick"
                    cx="0"
                    cy="0"
                    r="1"
                    opacity="1"
                    fill="#1C9943"
                    stroke=""
                    stroke-width="10"
                    d="M208.4,118.6c0.8-0.8,1.2-1.9,1.2-3.3c0-1.4-0.4-2.6-1.2-3.7l-3.7-3.3c-0.8-1.1-1.9-1.6-3.3-1.6
s-2.6,0.4-3.7,1.2l-67,67l-28.4-28.8c-1.1-0.8-2.3-1.2-3.7-1.2c-1.4,0-2.5,0.4-3.3,1.2l-3.7,3.3c-0.8,1.1-1.2,2.3-1.2,3.7
s0.4,2.5,1.2,3.3l35.4,35.8c1.1,1.1,2.3,1.6,3.7,1.6c1.4,0,2.5-0.5,3.3-1.6L208.4,118.6z"
                  />
                </svg>
              ) : (
                <svg
                  version="1.1"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 130.2 130.2"
                >
                  <circle
                    class="path circle"
                    fill="none"
                    stroke="#D06079"
                    stroke-width="6"
                    stroke-miterlimit="10"
                    cx="65.1"
                    cy="65.1"
                    r="62.1"
                  />
                  <line
                    class="path line"
                    fill="none"
                    stroke="#D06079"
                    stroke-width="6"
                    stroke-linecap="round"
                    stroke-miterlimit="10"
                    x1="34.4"
                    y1="37.9"
                    x2="95.8"
                    y2="92.3"
                  />
                  <line
                    class="path line"
                    fill="none"
                    stroke="#D06079"
                    stroke-width="6"
                    stroke-linecap="round"
                    stroke-miterlimit="10"
                    x1="95.8"
                    y1="38"
                    x2="34.4"
                    y2="92.2"
                  />
                </svg>
              )}
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default Quiz;
