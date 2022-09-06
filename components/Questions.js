import React from "react";
import style from "../styles/Questions.module.css";

const Questions = () => {




return (
    <div className={style.mainContainer}>
        <div className="questions">
            <span className={style.customer}><b> Customer questions & answers </b></span>
           
        </div>
        <div className={style.search}>
         <input typeof={style.searchBox} placeholder="Have a question? Search for answers"></input>
         </div>
         <div className={style.questionExamples}>
            <div className={style.typicalQuestion}>Typical questions asked about products:</div>
            <div className={style.exampleQuestions}>- Is the item durable?</div>
            <div className={style.exampleQuestions}>- Is this item easy to use?</div>
            <div className={style.exampleQuestions}>- What are the dimensions of this item</div>
         </div>
    </div>

    )
    
};
    export default Questions;