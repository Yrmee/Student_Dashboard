import React from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import './studentChart.css';

export default function StudentChart( {title, data, grid} ) {

    return (
        <div className="studentHomepageChart" >
            <h3 className="studentHomepageChartTitle"> {title} </h3>
            <ResponsiveContainer width="100%" aspect={4 / 1}>
                <BarChart data={data}>
                    <XAxis xAxisId="0" dataKey="name"/>
                    <XAxis xAxisId="1" dataKey="project" allowDuplicatedCategory={false} />
                    <YAxis />
                    <Tooltip />
                    <Legend />
                    {grid && <CartesianGrid stroke="#e0dfdf" strokeDasharray="3 3"/>}
                    <Bar dataKey="difficulty" fill="#3366cc"/>
                    <Bar dataKey="enjoyability" fill="#009999"/>
                </BarChart>
            </ResponsiveContainer>
        </div>
    );
}