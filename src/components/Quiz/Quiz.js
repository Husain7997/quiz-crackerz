import React from 'react';
import { useLoaderData } from 'react-router-dom';
import QuizInfo from '../QuizInfo/QuizInfo';
import './Quiz.css'

const Quiz = () => {
    const datas = useLoaderData();
    console.log(datas)
    const { id, logo, name, questions, total } = datas.data;
    console.log(name)

    return (
        <div className='quiz'>
            <h2>{name}</h2>
            <h2>{total}</h2>

            {
                questions.map(data => <QuizInfo key={data.id} data={data}></QuizInfo>)
            }

        </div>
    );
};

export default Quiz;