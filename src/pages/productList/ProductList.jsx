import { DataGrid } from '@mui/x-data-grid';
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';
import {ProductRows} from "../../dummyData";
import { Link } from "react-router-dom";
import { useState } from "react";
import "./productList.css"


function ProductList() {

    const [data,setData]= useState(ProductRows);
    const handleDelete = (id) => {
      setData(data.filter((item) => item.id !== id));
    };    

    const columns = [
        { field: 'id', headerName: 'ID', width: 40 },
        { field: 'product', headerName: 'Product', width: 250, renderCell: (params)=>{
          return(
            <div className="productListItem">
              <img className="productListImg" src={params.row.img} alt=""/>
              {params.row.name}
            </div>
          )
        }
      },
        { field: 'stock', headerName: 'Stock', width: 150 },
        { field: 'status', headerName: 'Status', width: 90,},
        { field: 'price', headerName: 'Product Price', width:160},
        { field: 'action', headerName:'Action', width:100, 
          renderCell:(params)=>{
          return(
            <>
            <Link to ={"/product/"+ params.row.id}>
              <button className="productListEdit"> Edit </button>
            </Link>
            <DeleteOutlineIcon className="productListDelete"
              onClick={() => handleDelete(params.row.id)}
            />
            </>
          )
        }
      }
      ];

    return (
    <div className='productList'>
        <DataGrid 
            rows={data} 
            disableSelectionOnClick 
            columns={columns} 
            pageSize={10} 
            rowsPerPageOptions={[5]} 
            checkboxSelection/>
    </div>
  )
}

export default ProductList