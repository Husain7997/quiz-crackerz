import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Item from '../Item/Item';
import './Home.css'


const Home = () => {
    const quizes = useLoaderData();
    const quizesArry = quizes.data
    return (
        <div className='home'>
            {
                quizesArry.map(quiz => <Item key={quiz.id} quiz={quiz}></Item>)
            }
        </div>
    );
};

export default Home;