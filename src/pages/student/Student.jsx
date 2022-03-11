import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { CalendarToday, LocationSearching, MailOutline, PermIdentity, PhoneAndroid } from "@mui/icons-material";
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

import './student.css';

// import Data
import { studentDetails } from '../../studentDetailsData';
import studentsData from '../../studentData.json';

// functie to get student-details by its id
const getStudentById = (id) => {
    return studentDetails.find(
        (student) => student.id === id);
}

// Data van grafiek hier zetten << = Object met nested array met objects.
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
console.log(dataPerStudent)

// Hier probeer ik Object Deconstructuring...
const { Evelyn: { 0: { name, project, difficulty, enjoyability } } } = dataPerStudent;
console.log(name, project, difficulty, enjoyability); // output: Evelyn SCRUM 3 4 




/*
for (const key of Object.keys(dataPerStudent)) {
    console.log(`${key} => ${dataPerStudent[key]}`);
}
console.log(Object.keys(dataPerStudent).map(key => (
    dataPerStudent[key].project
)))

for (const [key, value] of Object.entries(dataPerStudent)) {
    console.log(`${key} => ${value}`);
}

console.log(Object.entries(dataPerStudent)) // (10)x [Array(2) ['Evelyn', Array(56)] ... ]  
    const objEntries = Object.entries(dataPerStudent);
    console.log(Object.fromEntries(objEntries)) // zelfde output als die hele group[data.name] etc

console.log(Object.values(dataPerStudent)) // (10)x [Array(56), Array(56), .... ]
console.log(Object.keys(dataPerStudent)) //  (10) ['Evelyn', 'Aranka', 'Floris', 'Hector', 'Martina', 'Maurits', 'Rahima', 'Sandra', 'Wietske', 'Storm']
*/


/*
const studentProjectAverages = Object.keys(dataPerStudent).map( key => {
    const totalAmount = dataPerStudent[key].length; // totaal over 1 student

    const averageEnjoyability = dataPerStudent[key].reduce((a, b) => a + b.enjoyability, 0) / totalAmount;
    const averageDifficulty = dataPerStudent[key].reduce((a, b) => a + b.difficulty, 0) / totalAmount;
    
    return {
        project: key,
        difficulty: averageDifficulty,
        enjoyability: averageEnjoyability
    }
})
console.log(studentProjectAverages)
*/

export default function Student() {
    const params = useParams(); 
    let studentInfo = getStudentById(parseInt(params.id, 10))

    return (
        <div className="student"> 

            <Link to="/studentlist">
            <button className="studentGoBackButton"> Go Back </button>
            </Link>
            
            <div className="studentTitleContainer"> 
                <h1 className="studentTitle">Student Profile </h1>
                <button className="studentAddButton"> Contact </button>
            </div>
            
            <div className="studentContainer">
                <div className="studentProfile"> 
                    <div className="studentProfileTop"> 
                        <img src={studentInfo.avatar} alt="" className="studentProfileImg"/>
                        <div className="studentProfileTopTitle">
                            <span className="studentProfileUsername"> {studentInfo.firstName} {studentInfo.lastName}</span>
                            <span className="studentProfileStudentTitle"> {studentInfo.job}</span>
                        </div>
                    </div>
                    <div className="studentProfileBottom"> 
                        <span className="studentProfileTitle"> Account Details </span>
                        
                        <div className="studentProfileInfo">
                            <PermIdentity className="studentProfileIcon" />
                            <span className="studentProfileInfoTitle"> Student id: {studentInfo.id}</span>
                        </div>

                        <div className="studentProfileInfo">
                            <CalendarToday className="studentProfileIcon" />
                            <span className="studentProfileInfoTitle"> {studentInfo.dateOfBirth} </span>
                        </div>

                        <span className="studentProfileTitle"> Contact Details </span>

                        <div className="studentProfileInfo">
                            <PhoneAndroid className="studentProfileIcon" />
                            <span className="studentProfileInfoTitle"> {studentInfo.phone} </span>
                        </div>

                        <div className="studentProfileInfo">
                            <MailOutline className="studentProfileIcon" />
                            <span className="studentProfileInfoTitle"> {studentInfo.email} </span>
                        </div>

                        <div className="studentProfileInfo">
                            <LocationSearching className="studentProfileIcon" />
                            <span className="studentProfileInfoTitle"> {studentInfo.location} </span>
                        </div>

                    </div>
                </div>

                <div className="studentChartContainer"> 
                    <h3 className="studentChartTitle"> Student Projects Chart of {studentInfo.firstName} {studentInfo.lastName}</h3>
                    <div className="studentChart">
                        <ResponsiveContainer width="100%" aspect={4 / 1}>
                            <BarChart >
                                <XAxis xAxisId="0" dataKey="name"/>
                                <XAxis xAxisId="1" dataKey="project" allowDuplicatedCategory={false} />
                                <YAxis />
                                <Tooltip />
                                <Legend />
                                <CartesianGrid stroke="#e0dfdf" strokeDasharray="3 3"/>
                                <Bar dataKey="difficulty" fill="#3366cc"/>
                                <Bar dataKey="enjoyability" fill="#009999"/>
                            </BarChart>
                        </ResponsiveContainer>

                    </div>
                </div>
            </div>
        </div>
    )
}