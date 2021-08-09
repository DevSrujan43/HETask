import {useState} from "react"
import "./styles/App.css"
import LoginForm from "./components/LoginForm";
import UserProfile from "./components/UserProfile";


function App() {

  const adminUser = {
    name: "admin" ,
    password: "admin123"
  }

  const [user, setUser] = useState( {name: "" , password: ""} )
  const [error, setError] = useState("");

  const Login = det => {
    // console.log(det);
    if(det.name === adminUser.name && det.password === adminUser.password)
    {
      setUser({
        name: det.name,
        password: det.password
      });
    } else {
      setError("Enter the correct details please")
    }
   
  }

  const Logout = () => {
    console.log("logout");
    setUser( {name : "", password: "" } )
  }
  
  const fImage = require("./images/task1.png").default

  return (
    <div className="App">
     {(user.name !== "" && user.password !== "") ? ( 
       <div className ="box">
       <button className = "btn1" onClick = {Logout}> Logout </button>
       <UserProfile />
       </div>
      ) : (
        <div className="box1">
          <img className ="fImg" src={fImage} alt="" />
          <LoginForm Login = {Login} error = {error} />
       </div>
     )
    }
    </div>
  );
}

export default App;
