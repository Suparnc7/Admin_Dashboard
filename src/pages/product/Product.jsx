import "./product.css"
import {Link} from "react-router-dom"
import Chart from "..//../components/chart/Chart"
import {productdata} from "..//..//dummyData"
import PublishIcon from '@mui/icons-material/Publish';

function Product() {
  return (
    <div className="product">
        <div className="productTitleContainer">
            <h1 className="productTitle"> Product </h1>
            <Link to = "/newProduct">
                <button className="productAddButton"> Create </button>
            </Link>
        </div>
        <div className="productTop">
            <div className="productTopLeft">
                <Chart data={productdata} dataKey="Sales" title="Sales Performance"/>
            </div>
            <div className="productTopRight">
                <div className="productInfoTop">
                    <img 
                        src="https://images.pexels.com/photos/2047905/pexels-photo-2047905.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" 
                        alt="" 
                        className="productInfoImg" />
                        <span className="productName"> Mac Book Pro</span>
                </div>
                <div className="productInfoBottom">
                    <div className="productInfoItem">
                        <span className="productInfoKey"> ID : </span>
                        <span className="productInfoValue"> 123 </span>
                    </div>
                    <div className="productInfoItem">
                        <span className="productInfoKey"> Sales : </span>
                        <span className="productInfoValue"> 32123 </span>
                    </div>
                    <div className="productInfoItem">
                        <span className="productInfoKey"> Active : </span>
                        <span className="productInfoValue"> Yes </span>
                    </div>
                    <div className="productInfoItem">
                        <span className="productInfoKey"> In Stock : </span>
                        <span className="productInfoValue"> Yes </span>
                    </div>
                </div>
            </div>
        </div>
        <div className="productBottom">
            <form className="productForm">
                <div className="productFormLeft">
                    <label type= "text"> Product Name </label>
                    <input type="text" placeholder="product name"/>
                    <label> In Stock </label>
                    <select name="inStock" id="idStock">
                        <option value="yes"> Yes </option>
                        <option value="no"> No </option>
                    </select>
                    <label> Active </label>
                    <select name="active" id="active">
                        <option value="yes"> Yes </option>
                        <option value="no"> No </option>
                    </select>
                </div>
                <div className="productFormRight">
                    <div className="productUpload">
                        <img src="https://images.pexels.com/photos/3602258/pexels-photo-3602258.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" 
                            alt="" className="productUploadImg" 
                        />
                        <label for="file"><PublishIcon/></label>  
                        <input type="file" id="file"/>
                    </div>
                    <button className="productButton"> Update </button>
                </div>
            </form>
        </div>
    </div>
  )
}

export default Product