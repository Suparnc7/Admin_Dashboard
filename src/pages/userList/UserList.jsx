import "./userList.css";
import { DataGrid } from '@mui/x-data-grid';
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';
import {UserRows} from "../../dummyData";
import { Link } from "react-router-dom";
import { useState } from "react";

export default function UserList() {
  const [data,setData]= useState(UserRows);
  const handleDelete = (id) => {
    setData(data.filter((item) => item.id !== id));
  };
  const columns = [
    { field: 'id', headerName: 'ID', width: 40 },
    { field: 'user', headerName: 'User', width: 150, renderCell: (params)=>{
      return(
        <div className="ListUser">
          <img className="ListUserImg" src={params.row.avatar} alt=""/>
          {params.row.username}
        </div>
      )
    }
  },
    { field: 'email', headerName: 'E-mail', width: 150 },
    { field: 'status', headerName: 'Status', width: 90,},
    { field: 'transaction', headerName: 'Transaction Amount', width:160},
    { field: 'action', headerName:'Action', width:100, 
      renderCell:(params)=>{
      return(
        <>
        <Link to ={"/user/"+ params.row.id}>
          <button className="ListUserEdit"> Edit </button>
        </Link>
        <DeleteOutlineIcon className="ListUserDelete"
          onClick={() => handleDelete(params.row.id)}
        />
        </>
      )
    }
  }
  ];

  return (
    <div className="userList">
      <DataGrid rows={data} disableSelectionOnClick columns={columns} pageSize={10} rowsPerPageOptions={[5]} checkboxSelection/>
    </div>
  )
}
