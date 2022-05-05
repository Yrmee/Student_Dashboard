import { useState } from 'react';
import { Link } from 'react-router-dom';
import { DataGrid } from '@mui/x-data-grid';
import { DeleteOutline } from '@mui/icons-material';
import Tooltip from '@mui/material/Tooltip';

import { studentDetails } from '../../studentDetailsData';
import './studentList.css';


export default function StudentList() {

  const [data, setData] = useState(studentDetails);

// delete single student from the list
  const handleDelete = (id) => {
    const foo = data.filter(item => item.id !== id);
    setData(foo)
  } 

  const columns = [
    { field: 'id', headerName: '#', width: 50 },
    { field: 'student', headerName: '', width: 70,
      renderCell: (params) => {
        return (
          <div className="studentListStudent">
            <img className="studentListImg" src={params.row.avatar} alt='avatar'/>
          </div>
        )
      }},
    { field: 'firstName', headerName: 'First name', width: 100 },
    { field: 'lastName', headerName: 'Last name', width: 130 },
    { field: 'action', headerName: '', width: 130,
      renderCell: (params) => {
        return (
          <>
            <Link to={`/students/${params.row.firstName}`}>
              <button className="studentListDetailsBtn"> Details </button>
            </Link>

            <Tooltip title="Delete">
                <DeleteOutline 
                  className="studentListDeleteBtn"
                  onClick={ () => handleDelete(params.row.id)}
                />
            </Tooltip>
          </>
        )
      }},
  ];

  return (
    <div className="student">
      <div className="studentListTitleContainer">
        <h1 className="studentListTitle">Student List</h1>
      </div>

      <div className="studentListContainer">
        <div className="studentList" style={{ height: 600, width: '100%' }}>
          <DataGrid
            getRowId={(row) => data.indexOf(row)}
            rows={data}
            disableSelectionOnClick
            columns={columns}
            pageSize={data.length}
            rowsPerPageOptions={[data.length]}
          />
        </div>
      </div>

    </div>
  )
}

