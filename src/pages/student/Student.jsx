import React from 'react';
import { useParams, Link } from 'react-router-dom';
import Brightness1Icon from '@mui/icons-material/Brightness1';
import { CalendarToday, LocationSearching, MailOutline, PermIdentity, PhoneAndroid } from "@mui/icons-material";

import './student.css';

// import Data
import { studentDetails } from '../../studentDetailsData';
import studentsData from '../../studentData.json';
import Chart from '../../components/chart/Chart';

// Note: Error in console for line: 39.1 (cannot reading 'firstName' - Trying to set the error page in router/path )


// get studentDetails by ID
const getStudentById = (firstName) => {
    return studentDetails.find(
        (student) => student.firstName === firstName);
}

// get studentsData 
const dataPerStudent = studentsData.reduce( (group, data) => {
    group[data.name] = group[data.name] ?? [];

    group[data.name].push({
        project: data.project,
        difficulty: data.difficulty,
        enjoyability: data.enjoyability,
    })   

    return group;
}, {})


export default function Student() {
    const params = useParams(); 
    let studentInfo = getStudentById(params.firstName);
    let studentData = dataPerStudent[studentInfo.firstName];

    //console.log(studentData)

    return (
        <div className="student"> 

            <Link to="/studentlist">
            <button className="studentGoBackButton"> Go Back </button>
            </Link>
            
            <div className="studentTitleContainer"> 
                <h1 className="studentTitle">Student Profile </h1>
                <button className="studentContactButton"> Contact </button>
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
                            <span className="studentProfileInfoTitle"> Studentnumber: {studentInfo.id}</span>
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
                    <Chart 
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

                    <ul className="analyticsChartLegend">
                        <li className="legendListItem"> <Brightness1Icon fontSize="Medium" className="legendDifficultyIcon" /> Difficulty </li>
                        <li className="legendListItem"> <Brightness1Icon fontSize="Medium" className="legendEnjoyabilityIcon"/> Enjoyability</li>
                    </ul>
                </div>

            </div>
        </div>
    )
}