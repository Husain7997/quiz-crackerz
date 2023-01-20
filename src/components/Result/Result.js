import React from 'react';

const Result = ({ answer, correctAnswer, }) => {
    let score = 0;
    const computeAnswer = (answer, correctAnswer) => {

        if (answer === correctAnswer) {
            return (score + 1)
        };

    };
    function ShowAns() {

    }
    return (
        <div>
            <button onClick={ShowAns()}>
                Show correct Answer
            </button>
            <div className="score"> Your score is {score}correct answer ! ! !  </div>

        </div>
    );
};

export default Result;