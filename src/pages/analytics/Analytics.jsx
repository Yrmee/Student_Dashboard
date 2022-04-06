import React, { useEffect, useState } from 'react';
import "./analytics.css";
import studentsData from '../../studentData.json';
import Chart from '../../components/chart/Chart';
import StudentChart from '../../components/studentChart/StudentChart';

////////////Groupeer data////////////////////////
const groupDataByKey = (key, data) => {
    return data.reduce((group, data) => {
        const dataKey = data[key];

        group[dataKey] = group[data.project] ?? [];
        group[dataKey].push({
            name: data.name,
            project: data.project,
            difficulty: data.difficulty,
            enjoyability: data.enjoyability,
        })   
        
        return group;
    }, {})
}

// Reken averages uit voor alle groepen
const getAveragesForGroup = (data) => {
    return Object.keys(data).map( key => {
        const totalAmount = data[key].length; // totaal over 1 student
        
        const averageEnjoyability = data[key].reduce((a, b) => a + b.enjoyability, 0) / totalAmount;
        const averageDifficulty = data[key].reduce((a, b) => a + b.difficulty, 0) / totalAmount;
    
        return {
            project: key,
            difficulty: averageDifficulty,
            enjoyability: averageEnjoyability
        }
    })
}

    
// gemiddelde Leuk&Moeilijk uitrekenen op naam per student
const mainProjectAverages = (projectAverages) => {
    return projectAverages.reduce((group, data) => {
        const mainKey = data.project.split('-')[0].trim();
        group[mainKey] = group[mainKey] ?? [];
    
        group[mainKey].push({
            project: data.project,
            difficulty: data.difficulty,
            enjoyability: data.enjoyability,
        })   
        
        return group;
    }, {});
}

export default function Analytics() {
    const [groupProjects, setGroupProjects] = useState(true);
    const [chartData, setChartData] = useState()

    const [dataKeys, setDataKeys] = useState({
        "difficulty": {
            color: "#3366cc",
            enabled: true,
        },
        "enjoyability": {
            color: "#009999",
            enabled: true,
        },
    })

    const studentDataPerProject = groupDataByKey('project', studentsData)
    const studentDataPerName = groupDataByKey('name', studentsData)
    
    const averagesPerProject = getAveragesForGroup(studentDataPerProject)
    const averagesPerMainProject = getAveragesForGroup(mainProjectAverages(averagesPerProject));

    const averagesPerStudent = getAveragesForGroup(studentDataPerName)

    useEffect(() => {
        if (groupProjects) {
            setChartData(averagesPerMainProject)
        } else {
            setChartData(averagesPerProject)
        }

    }, [groupProjects])

    return (
        <div className="analytics">
            <div>
                <input type="checkbox" id="groupProjects" name="groupProjects" checked={groupProjects} onChange={(e) => setGroupProjects(e.target.checked)} />
                <label htmlFor="groupProjects">Group projects</label><br /><br />
            </div>
            <h1 className="analyticsTitle"> Student Analytics </h1>

            <div className="analyticsChart">
            <Chart 
                data={chartData}
                title="Student Analytics Overview"
                grid
                dataKeys={dataKeys}
            />
            </div>

            <div className="analyticsChart">
            <StudentChart 
                data={averagesPerStudent}
                title="Student Analytics Per Student"
                grid
            />
            </div>


            
            
        </div>
        
    );
}