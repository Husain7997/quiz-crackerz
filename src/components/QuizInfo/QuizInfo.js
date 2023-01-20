import React, { useState } from 'react';
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
import Result from '../Result/Result';
// import Result from '../Result/Result';
import Option from '../Result/Result';
import './QuizInfo.css'

const QuizInfo = ({ data }) => {

    const { correctAnswer, options, id, question, total } = data;
    const [answer, setAnswer] = useState(options);
    console.log(answer);

    return (

        <div className="questionBox">
            <div className="question">{question}</div>
            {answer.map((options, index) => (
                <button
                    key={index}
                    className="answerBtn"
                    onClick={() => {
                        setAnswer();
                        <Result answer={answer} correctAnswer={correctAnswer} key={id} total={total}></Result>
                    }}> {options}
                </button>
            ))}

            <Result></Result>
        </div>

    );
};
export default QuizInfo;