import React from "react";
import {useHistory} from 'react-router-dom';
import "./Avatar.scss";
import {FaRegArrowAltCircleRight} from 'react-icons/fa';
// import avatarimg from "../../utils/image/apple-scanner.png"

function Avatar() {

  const history = useHistory();

  const handleOnClickLogOut = () =>{
    localStorage.removeItem('UserSignIn');
    // Back to home page
    history.push('/');
  }

  return (
    <div className="avatar">
      <div className="dropdown">
        <button
          className="btn dropdown-toggle"
          type="button"
          id="dropdownMenuButton1"
          data-bs-toggle="dropdown"
          aria-expanded="false"
        >
          <img
            src="https://s3.eu-central-1.amazonaws.com/bootstrapbaymisc/blog/24_days_bootstrap/fox.jpg"
            width={40}
            height={40}
            className="rounded-circle pr-1"
            alt="Avatar"
          />
          Hi,<span className="avatar-name">{localStorage.getItem("UserAdmin")? JSON.parse(localStorage.getItem("UserAdmin")).username:""}</span>
        </button>
        <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton1">
          {/* <li>
            <div className="dropdown-item">
              <span className="mx-1"><FaUserEdit /></span>
              Profile
            </div>
          </li> */}
          <li>
            <div className="dropdown-item" onClick={handleOnClickLogOut}>
              <span className="mx-1"><FaRegArrowAltCircleRight /></span>
              Log out
            </div>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Avatar;
