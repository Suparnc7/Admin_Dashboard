import "./user.css";
import PermIdentityIcon from '@mui/icons-material/PermIdentity';
import CalendarTodayIcon from '@mui/icons-material/CalendarToday';
import PhoneAndroidIcon from '@mui/icons-material/PhoneAndroid';
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import LocationSearchingIcon from '@mui/icons-material/LocationSearching';
import PublishIcon from '@mui/icons-material/Publish';
import { Link } from "react-router-dom";

export default function User() {
  return (
    <div className="user">
        <div className="userTitleContainer">
            <h1 className="userTitle"> Edit User </h1>
            <Link to = "/newUser"> 
              <button className="userAddButton"> Create </button>
            </Link>
        </div>
        <div className="userContaier">
          <div className="userShow">
            <div className="userShowTop">
              <img src="https://images.pexels.com/photos/691668/pexels-photo-691668.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" 
                alt="" className="userShowImg" 
              />
              <div className="userShowTopTitle">
                <span className="userShowusername">Sansa Stark</span>
                <span className="userShowjobtitle">Queen in The North</span>
              </div>
            </div>
            <div className="userShowButton">
              <span className="userShowTitle"> Account Details </span>
              <div className="userShowInfo">
                <PermIdentityIcon className="userShowIcon"/>
                <span className="userShowInfoTitle"> SansaStark54</span>
              </div>
              <div className="userShowInfo">
                <CalendarTodayIcon className="userShowIcon"/>
                <span className="userShowInfoTitle"> 21 February 1996 </span>
              </div>
              <span className="userShowTitle"> Contact Details </span>
              <div className="userShowInfo">
                <PhoneAndroidIcon className="userShowIcon"/>
                <span className="userShowInfoTitle"> 4347787752</span>
              </div>
              <div className="userShowInfo">
                <MailOutlineIcon className="userShowIcon"/>
                <span className="userShowInfoTitle"> sansastark54@gmail.com</span>
              </div>
              <div className="userShowInfo">
                <LocationSearchingIcon className="userShowIcon"/>
                <span className="userShowInfoTitle"> Winterfell, North </span>
              </div>
            </div>
          </div>
          <div className="userUpdate">
            <span className="userUpdateTitle">Edit</span>
            <form className="userUpdateForm">
              <div className="userUpdateRight">
                <div className="userUpdateItem">
                  <label>Username</label>
                  <input 
                    type ="text" 
                    placeholder="SansaStark54" 
                    className="userUpdateInput"
                  />
                </div>
                <div className="userUpdateItem">
                  <label>Full Name</label>
                  <input 
                    type ="text" 
                    placeholder="Sansa Stark" 
                    className="userUpdateInput"
                  />
                </div>
                <div className="userUpdateItem">
                  <label>Email</label>
                  <input 
                    type ="text" 
                    placeholder="sansastark54@gmil.com" 
                    className="userUpdateInput"
                  />
                </div>
                <div className="userUpdateItem">
                  <label>Phone Number</label>
                  <input 
                    type ="text" 
                    placeholder="4347787752" 
                    className="userUpdateInput"
                  />
                </div>
                <div className="userUpdateItem"> 
                  <label> Address </label>
                  <input 
                    type ="text" 
                    placeholder="Winterfell, North"
                    className="userUpdateInput"
                  />
                </div>
              </div>
              <div className="userUpdateLeft">
                <div className="userUpdateUpload">
                  <img src="https://images.pexels.com/photos/3307862/pexels-photo-3307862.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" 
                    alt="" className="userUpdateImg" 
                  />
                  <label for="file"><PublishIcon/></label>
                  <input type="file" id = "file" />
                </div>
              </div>
            </form>
          </div>          
        </div>
    </div>
  )
}

