import React, { useContext } from 'react';
import { LineChart, Line, CartesianGrid, XAxis, YAxis } from 'recharts';
import { ChartContext } from '../Item/Item';
const Start = () => {
    const value = useContext(ChartContext);

    const renderLineChart = (
        <LineChart width={600} height={300} data={value}>
            <Line type="monotone" dataKey='total' stroke="#8884d8" />
            <CartesianGrid stroke="#ccc" />
            <XAxis dataKey='name' />
            <YAxis />
        </LineChart>
    );
};
export default Start;