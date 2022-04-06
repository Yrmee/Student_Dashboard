import React, { useEffect, useState } from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
//import studentData from '../../studentData.json';
import './chart.css';

export default function Chart( {title, data, grid, dataKeys, className} ) {
    const [legends, setLegends] = useState(dataKeys)
    const toggleLegend = (legendKey, enabled) => {
        const legendGroup = legends;

        legendGroup[legendKey].enabled = enabled;

        setLegends({...legendGroup})
    }

    const renderLegend = () => {
        return (
            <ul>
                {
                    Object.keys(legends).map((key) => (
                        <li key={`item-${key}`}>
                            <input type="checkbox" checked={legends[key].enabled} onChange={(e) => toggleLegend(key, e.target.checked)} />
                            {key}
                        </li>
                    ))
                }
            </ul>
        );
    }

    return (
        <div className={className ?? "chart"}>
            <h3 className="chartTitle"> {title} </h3>
            <ResponsiveContainer width="100%" aspect={4 / 1}>
                <BarChart data={data}>
                    <XAxis xAxisId="0" dataKey="name"/>
                    <XAxis xAxisId="1" dataKey="project" allowDuplicatedCategory={false} />
                    <YAxis />
                    <Tooltip />
                    <Legend content={renderLegend} />
                    {grid && <CartesianGrid stroke="#e0dfdf" strokeDasharray="3 3"/>}
                    {legends && Object.keys(legends).filter(key => legends[key].enabled).map(key => (
                        <Bar key={key} dataKey={key} fill={legends[key].color}/>
                    ))}

                </BarChart>
            </ResponsiveContainer>
        </div>
    );
}

