import { React, useState } from "react";
import questionsData from "../data.json";
import { useNavigate, useParams } from "react-router-dom";
import { DotLottieReact } from "@lottiefiles/dotlottie-react";

const Quiz = () => {
  const { id } = useParams();
  const [selectedOption, setSelectedOption] = useState("");
  const [disabled, setDisabled] = useState(false);
  const [message, setMessage] = useState("");
  const [messageType, setMessageType] = useState(""); // 'success' or 'error'

  const questionById = questionsData.questions[id];

  const navigate = useNavigate();

  const handleOptionChange = (option) => {
    setSelectedOption(option);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setDisabled(true);
    let isCorrect = false;

    isCorrect = questionById.answer === selectedOption;

    if (isCorrect) {
      setMessage("Correct! Well done.");
      setMessageType("success");

      setTimeout(() => {
        navigate("/");
      }, 1800);
    } else {
      setMessage("Incorrect! Try again.");
      setMessageType("error");
      setTimeout(() => {
        navigate("/");
      }, 1800);
    }
  };
  const handleRightClick = (e) => {
    e.preventDefault();
  };
  return (
    <>
      <div
        onContextMenu={handleRightClick}
        className="wrapper bg-II-img w-screen h-screen flex flex-col justify-center items-center "
      >
        <div className="container flex flex-col gap-16 max-w-screen-3xl justify-center items-stretch p-10 rounded-2xl backdrop-blur-2xl bg-white  shadow-2xl text-white">
          <div className="question">
            <h1 className="text-8xl font-semibold leading-relaxed text-darkBlue">
              {questionById.question}
            </h1>
          </div>

          <div className="answer-container mt-4 ">
            <form onSubmit={handleSubmit} className="flex flex-col gap-8">
              {questionById.options.map((x, index) => (
                <div key={index}>
                  <div className={`flex items-center ps-4 `}>
                    <input
                      name={`option-${id}`}
                      id={`option-${index}`}
                      disabled={disabled}
                      type="radio"
                      value={x}
                      onChange={() => handleOptionChange(x)}
                      required
                      className="hidden peer"
                    />
                    <label
                      htmlFor={`option-${index}`}
                      className={`
                           w-full
                           tracking-normal
                            py-8 px-8 ms-2
                             text-7xl
                              text-darkBlue
                               font-thin
                                cursor-pointer 
                                border-2 
                                border-gray-950  
                                rounded-lg 
                                bg-white 
                                peer-checked:border-transparent
                                peer-checked:text-white
                                peer-checked:bg-cyan_cuz
                                hover:text-white
                                hover:bg-cyan_cuz 
                                hover:border-tintgreen40
                         `}
                    >
                      {x}
                    </label>
                  </div>
                </div>
              ))}

              <button
                type="submit"
                className="mt-16 px-8 py-8 uppercase  text-7xl font-medium text-white bg-darkBlue hover:bg-tintgreen80 disabled:cursor-not-allowed disabled:bg-slate-800 focus:outline   rounded-lg text-center  "
                disabled={disabled}
              >
                Submit
              </button>
            </form>
          </div>
        </div>

        {message && (
          <div className=" absolute backdrop-blur-xl bg-white/40 w-screen h-fit flex flex-col items-center justify-center h-screen">
            <div
              className={`h-96 rounded-lg  z-20 ${
                messageType === "success" ? "bg-transparent" : "bg-transparent"
              } text-white`}
            >
              {messageType === "success" ? (
                <DotLottieReact
                  src="/success_animation.lottie
                  "
                  autoplay
                />
              ) : (
                <DotLottieReact src="/error_animation.lottie" loop autoplay />
              )}

              {/* {messageType === "success" ? (
                <svg
                  version="1.1"
                  id="Layer_1"
                  xmlns="http://www.w3.org/2000/svg"
                  xmlnsXlink="http://www.w3.org/1999/xlink"
                  xmlSpace="preserve"
                >
                  <path
                    className="circle"
                    stroke="#1C9943"
                    strokeWidth="10"
                    fill="#fff"
                    fillOpacity="0"
                    strokeMiterlimit="10"
                    d="M150,47.9c18.4,0,35.4,4.6,51,13.8s28,21.6,37.2,37.2s13.8,32.6,13.8,51s-4.6,35.4-13.8,51s-21.6,28-37.2,37.2
                      s-32.6,13.8-51,13.8s-35.4-4.6-51-13.8s-28-21.6-37.2-37.2s-13.8-32.6-13.8-51s4.6-35.4,13.8-51s21.6-28,37.2-37.2
                      S131.7,47.9,150,47.9z M150,238.7c16.2,0,31-4,"
                  />

                  <path
                    className="tick"
                    cx="0"
                    cy="0"
                    r="1"
                    opacity="1"
                    fill="#1C9943"
                    stroke=""
                    strokeWidth="10"
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
                    className="path circle"
                    fill="none"
                    stroke="#D06079"
                    strokeWidth="6"
                    strokeMiterlimit="10"
                    cx="65.1"
                    cy="65.1"
                    r="62.1"
                  />
                  <line
                    className="path line"
                    fill="none"
                    stroke="#D06079"
                    strokeWidth="6"
                    strokeLinecap="round"
                    strokeMiterlimit="10"
                    x1="34.4"
                    y1="37.9"
                    x2="95.8"
                    y2="92.3"
                  />
                  <line
                    className="path line"
                    fill="none"
                    stroke="#D06079"
                    strokeWidth="6"
                    strokeLinecap="round"
                    strokeMiterlimit="10"
                    x1="95.8"
                    y1="38"
                    x2="34.4"
                    y2="92.2"
                  />
                </svg>
              )} */}
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default Quiz;
