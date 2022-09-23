import React from "react";
import style from "../styles/Questions.module.css";
import { FaSearch } from "react-icons/fa";

const Questions = () => {
  return (
    <div className={style.mainContainer}>
      <div className="questions" aria-label="questions">
        <span className={style.customer} aria-label="questions">
          <b> Customer questions & answers </b>
        </span>
      </div>
      <div className={style.search} aria-label="search">
        <input
          typeof="text"
          id={style.searchBox}
          placeholder="Have a question? Search for answers"
          aria-label="search here"
        />
        <FaSearch id={style.search} />
      </div>
      <div className={style.questionExamples}>
        <div className={style.typicalQuestion} aria-label="typical questions">
          Typical questions asked about products:
        </div>
        <div className={style.exampleQuestions} aria-label="question">
          - Is the item durable?
        </div>
        <div className={style.exampleQuestions} aria-label="question">
          - Is this item easy to use?
        </div>
        <div className={style.exampleQuestions} aria-label="question">
          - What are the dimensions of this item
        </div>
      </div>
    </div>
  );
};
export default Questions;
