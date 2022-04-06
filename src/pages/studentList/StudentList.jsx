import './studentList.css';
import { DataGrid } from '@mui/x-data-grid';
import { DeleteOutline } from '@mui/icons-material';
import { studentDetails } from '../../studentDetailsData';
import { Link } from 'react-router-dom';
import { useState } from 'react';

export default function StudentList() {

  const [data, setData] = useState(studentDetails);

  // function to delete single student from the list
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
            <img className="studentListImg" src={params.row.avatar} alt=''/>
          </div>
        )
      }},
    { field: 'firstName', headerName: 'First name', width: 130 },
    { field: 'lastName', headerName: 'Last name', width: 130 },
    { field: 'action', headerName: '', width: 150,
      renderCell: (params) => {
        return (
          <>
            <Link to={`/students/${params.row.id}`}>
              <button className="studentListEdit"> Details </button>
            </Link>
            <DeleteOutline 
              className="studentListDelete"
              onClick={ () => handleDelete(params.row.id)}
            />
          </>
        )
      }},
  ];

  return (
    <div className="studentList" style={{ height: 600, width: '100%' }}>
      <DataGrid
        getRowId={(row) => data.indexOf(row)}
        rows={data}
        disableSelectionOnClick
        columns={columns}
        pageSize={data.length}
        rowsPerPageOptions={[data.length]}
        checkboxSelection
      />
    </div>
  )
}

