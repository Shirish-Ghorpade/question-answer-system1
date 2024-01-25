import { useState } from "react";
import "./styles.css";

export default function App() {
  return (
    <div className="App">
      <FlashCards />
    </div>
  );
}

const questions = [
  {
    id: 3457,
    question: "What language is React based on?",
    answer: "JavaScript",
  },
  {
    id: 7336,
    question: "What are the building blocks of React apps?",
    answer: "Components",
  },
  {
    id: 8832,
    question: "What's the name of the syntax we use to describe a UI in React?",
    answer: "JSX",
  },
  {
    id: 1297,
    question: "How to pass data from parent to child components?",
    answer: "Props",
  },
  {
    id: 9103,
    question: "How to give components memory?",
    answer: "useState hook",
  },
  {
    id: 2002,
    question:
      "What do we call an input element that is completely synchronised with state?",
    answer: "Controlled element",
  },
];

function FlashCards() {
  const [selectedId, setSelectedId] = useState(null);
  function handleClick(id) {
    // ha logic aahe ---> jar me card var click kele tar tho card select honar
    // ja me tya card var 2 times click kele tar tho card unselect honar
    setSelectedId(id !== selectedId ? id : null);
  }
  return (
    <div className="flashcards">
      {/* map method ne me every time ek question object consider kela */}
      {/* tya question object la div madhun format karu map madhun every time 
      particular JSX code return kela */}
      {questions.map((question) => (
        // event handler function kadhi pn parameteres send kartana me () madhe karnar
        // but () use kela ki asa issue hoto ki react tho function name nahi call consider karto
        // so use this syntax: () => handleClick(question.id)
        <div
          key={question.id}
          onClick={() => handleClick(question.id)}
          className={question.id === selectedId ? "selected" : ""}
        >
          <p>
            {/* jar me tya card var click kele tar me handleclick event trigger 
            karnar and then tya handleClick madhe me setSelectedId ya setter function 
            ne selectedId chi value set karnar*/}
            {/* jar value set zali maje click zale and click zale maje show ans kar */}
            {question.id === selectedId ? question.answer : question.question}
          </p>
        </div>
      ))}
    </div>
  );
}
