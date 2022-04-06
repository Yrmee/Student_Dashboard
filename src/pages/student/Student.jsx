import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { CalendarToday, LocationSearching, MailOutline, PermIdentity, PhoneAndroid } from "@mui/icons-material";
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

import './student.css';

// import Data
import { studentDetails } from '../../studentDetailsData';
import studentsData from '../../studentData.json';
import Chart from '../../components/chart/Chart';

// functie to get student-details by its id
const getStudentById = (id) => {
    return studentDetails.find(
        (student) => student.id === id);
}

// Data van grafiek hier zetten << = Object met nested array met objects.
const dataPerStudent = studentsData.reduce( (group, data, index) => {
    group[data.name] = group[data.name] ?? [];

    group[data.name].push({
        project: data.project,
        difficulty: data.difficulty,
        enjoyability: data.enjoyability,
    })   

    return group;
}, {})

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
    let studentData = dataPerStudent[studentInfo.firstName];

    console.log(studentData)

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


                    <Chart 
                        className="studentChartContainer"
                        data={studentData}
                        title={`Student Projects Chart of ${studentInfo.firstName} ${studentInfo.lastName}`}
                        grid
                        dataKeys={{
                            "difficulty": {
                                color: "#3366cc",
                                enabled: true,
                            },
                            "enjoyability": {
                                color: "#009999",
                                enabled: true,
                            },
                        }}
                    />

            </div>
        </div>
    )
}