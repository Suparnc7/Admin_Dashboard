import "./newUser.css"

function NewUser() {
  return (
    <div className="newUser">
        <h1 className="newUserTitle"> New User </h1>
        <form action="" className="newUserForm">
            <div className="newUserItem">
                <label> Username </label>
                <input type="text" placeholder="Jon" />
            </div>
            <div className="newUserItem">
                <label> Full Name </label>
                <input type="text" placeholder="Jon snow" />
            </div>
            <div className="newUserItem">
                <label> E-mail </label>
                <input type="text" placeholder="jonsnowbw@gmail.com" />
            </div>
            <div className="newUserItem">
                <label> Password </label>
                <input type="text" placeholder="password"/>
            </div>
            <div className="newUserItem">
                <label> Phone Number </label>
                <input type="text" placeholder="8827382901"/>
            </div>
            <div className="newUserItem">
                <label> Address </label>
                <input type="text" placeholder="The Wall, North"/>
            </div>
            <div className="newUserItem">
                <label> Gender </label>
                <div className="newUserGender">
                    <input type="radio" placeholder="gender" id="male" value="male"/>
                    <label for = "male"> Male </label>
                    <input type="radio" placeholder="gender" id="female" value="female"/>
                    <label for = "female"> Female </label>
                    <input type="radio" placeholder="gender" id="other" value="other"/>
                    <label for = "other"> Other </label>
                </div>
            </div>
            <div className="newUserItem">
                <label> Active </label>
                <select className="newUserSelect" name="active" id="active">
                    <option value="yes"> Yes </option>
                    <option value="no"> No </option>
                </select>
            </div>
            <button className="newUserButton"> Create </button>
        </form>
    </div>
  )
}

export default NewUser