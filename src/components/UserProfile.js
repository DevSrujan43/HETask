import React, {useState} from 'react'

const UserProfile = () => {
    const [imgData, setImgData] = useState(null);
  
    const onChangePicture = (e) => {
      if (e.target.files[0]) {
        const reader = new FileReader();
        reader.addEventListener("load", () => {
          setImgData(reader.result);
        });
        reader.readAsDataURL(e.target.files[0]);
      }
      e.target.value = null;
    };

    return (
      <div className="main">
        <h1>User Profile</h1>
        <div className="userInfo">
            <div className="profilePic">
                <h3>Choose a Profile picture</h3>
                <img className="displayPic" src={imgData} alt="" />
                <input className="inpPic" type="file" onChange={onChangePicture} />
            </div>
            <div className="user">
                <h3 className="det">Enter your Details:</h3>
                <div className="form">
                    <label className="label" htmlFor="name">Name</label>
                    <input type="text" name="name"/>
                    <label className="label" htmlFor="DOB">Date of birth</label>
                    <input type="date" name="DOB" />
                    <label className="label" htmlFor="religion">Religion</label>
                    <input type="text" name="religion"/>
                    <label className="label" htmlFor="height">Height(in cm)</label>
                    <input type="text" name="height"/>
                    <input type="submit" value="Submit" className= "submit"/>
                </div>
            </div>

        </div>
      </div>
    )
}

export default UserProfile
