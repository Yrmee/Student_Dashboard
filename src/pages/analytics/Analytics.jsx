import React from 'react';
import "./analytics.css";
import studentsData from '../../studentData.json';
//import FeaturedInfo from '../../components/featuredInfo/FeaturedInfo';
import Chart from '../../components/chart/Chart';
import StudentChart from '../../components/studentChart/StudentChart';

/////////////////CHART OVER ALL STUDENTS/////////////////
// Groepeer studenten per project
const perProject = studentsData.reduce( (group, data) => {
    group[data.project] = group[data.project] ?? [];
    
    group[data.project].push({
        name: data.name,
        project: data.project,
        difficulty: data.difficulty,
        enjoyability: data.enjoyability,
    })   
    
    return group;
    
}, {})
//console.log(perProject)
    
// gemiddelde Leuk&Moeilijk uitrekenen op naam per student
const projectAverages = Object.keys(perProject).map( key => {
    const totalAmount = perProject[key].length; // totaal over 1 student
    
    const averageEnjoyability = perProject[key].reduce((a, b) => a + b.enjoyability, 0) / totalAmount;
    const averageDifficulty = perProject[key].reduce((a, b) => a + b.difficulty, 0) / totalAmount;
        
    return {
        project: key,
        difficulty: averageDifficulty,
        enjoyability: averageEnjoyability
    }
})

/////////////CHART PER STUDENT////////////////////////
// Data per student binnen harken
const dataPerStudent = studentsData.reduce( (group, data) => {
    group[data.name] = group[data.name] ?? [];

    group[data.name].push({
        name: data.name,
        project: data.project,
        difficulty: data.difficulty,
        enjoyability: data.enjoyability,
    })   

    return group;

}, {})
//console.log(dataPerStudent)

// gemiddelde Leuk&Moeilijk uitrekenen op naam per student
const studentProjectAverages = Object.keys(dataPerStudent).map( key => {
    const totalAmount = dataPerStudent[key].length; // totaal over 1 student

    const averageEnjoyability = dataPerStudent[key].reduce((a, b) => a + b.enjoyability, 0) / totalAmount;
    const averageDifficulty = dataPerStudent[key].reduce((a, b) => a + b.difficulty, 0) / totalAmount;
    
    return {
        name: key,
        difficulty: averageDifficulty,
        enjoyability: averageEnjoyability
    }
})


export default function Analytics() {


    return (
        <div className="analytics">
            <h1 className="analyticsTitle"> Student Analytics </h1>

            <div className="analyticsChart">
            <Chart 
                data={projectAverages}
                title="Student Analytics Overview"
                grid
            />
            </div>

            <div className="analyticsChart">
            <StudentChart 
                data={studentProjectAverages}
                title="Student Analytics Per Student"
                grid
            />
            </div>


            
            
        </div>
        
    );
}

/*
chart stuff with ReCharts Chart Component

    const dataDifficulty = studentsData.map ((item) => ({
        project: item.project,
        difficulty: item.difficulty,
    }))
    const dataEnjoyability = studentsData.map ((item) => ({
        project: item.project,
        enjoyability: item.enjoyability,
    }))

        <div className="analytics">
            <h1 className="analyticsTitle"> Student Analytics </h1>

            <div className="analyticsChart">
            <Chart 
                data={studentsData}
                title="Student Analytics Overview"
                grid
            />
            </div>

            <div className="analyticsChart">
            <Chart 
                data={dataDifficulty}
                title="Student Analytics Difficulty"
                grid
            />

            </div>

            <div className="analyticsChart">
            <Chart 
                data={dataEnjoyability}
                title="Student Analytics Enjoyability"
                grid
            />
            </div>

            
            
        </div>
*/