import React, { useState } from "react";
import Slider from "rc-slider";
import "rc-slider/assets/index.css";

const AdhdTest = () => {
  const arrayOfQuestions = [
    {
      questionText: "I find it difficult finishing a task or project",
    },
    {
      questionText: "I find it difficult to organise myself or a task",
    },
    {
      questionText: "I find it difficult to remember appointments",
    },
    {
      questionText:
        "If a task or project requires a lot of thought I will often delay in getting it started",
    },
    {
      questionText:
        "I find it difficult to sit still and often fidget or squirm",
    },
    {
      questionText:
        "I find it difficult to remember appointmentsI would describe myself as being ‘on the go’ and feel compelled to do things, as if driven by a motor’",
    },
    {
      questionText: "I find it hard to remain focused in group settings",
    },
    {
      questionText:
        "My mind feels very cluttered and it is hard for me to concentrate on one thing at a time",
    },
    {
      questionText:
        "I make decisions quickly and fail to think through the consequences",
    },
    {
      questionText: "I am often irritable, with a short fuse",
    },
    {
      questionText:
        "I have mood swings, sometimes feeling quite high, other times low",
    },
    {
      questionText: "I often miss what is being said to me in conversations",
    },
  ];
  const answerOptions = [
    { answerText: "Never", addScore: 0 },
    { answerText: "Rarely", addScore: 1 },
    { answerText: "Sometimes", addScore: 2 },
    { answerText: "Often", addScore: 3 },
    { answerText: "Very Often", addScore: 4 },
  ];

  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [showScore, setShowScore] = useState(false);
  const [score, setScore] = useState(0);

  const handleAnswerOptionClick = (addScore) => {
    setScore(score + addScore);

    const nextQuestion = currentQuestion + 1;
    if (nextQuestion < arrayOfQuestions.length) {
      setCurrentQuestion(nextQuestion);
    } else {
      setShowScore(true);
    }
  };

  const showHanldeNumber = document.getElementsByClassName("rc-slider-handle");

  return (
    <div>
      <div className="bg-[#ACDCFE] py-16">
        <h1 className="text-[#0F141A] text-[40px] text-center font-[400]">
          ADHD Test
        </h1>
      </div>

      <div className="adhd-test-box md:h-[300px] w-[800px] flex flex-col justify-evenly items-center">
        {showScore ? (
          <div className="">
            Your results are highly consistent with ADHD <br />
            You scored: {score}
          </div>
        ) : (
          <>
            <h2 className="text-[40px]" style={{ color: "rgb(101, 101, 101)" }}>
              Question {currentQuestion + 1}
            </h2>
            <p className="max-w-[90%] text-center">
              {arrayOfQuestions[currentQuestion].questionText}?
            </p>
            <div className="flex flex-row flex-wrap items-center justify-center gap-5">
              {answerOptions.map((answerOption) => (
                <button
                  className="test-option-box"
                  onClick={() => handleAnswerOptionClick(answerOption.addScore)}
                  value={answerOption.addScore}
                >
                  {answerOption.answerText}
                </button>
              ))}
            </div>
          </>
        )}
      </div>
      <div className="mx-auto w-[700px]">
        <Slider
          value={currentQuestion}
          defaultValue={0}
          min={0}
          max={arrayOfQuestions.length - 1}
          trackStyle={{ backgroundColor: "#27627e", height: 10 }}
          railStyle={{ backgroundColor: "#dddddd", height: 10 }}
          handleStyle={{
            borderColor: "#27627e",
            height: 30,
            width: 30,
            marginLeft: 0,
            marginTop: -10,
            backgroundColor: "#27627e",
          }}
        />
      </div>
    </div>
  );
};

export default AdhdTest;
