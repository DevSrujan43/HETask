import { useState } from "react"

const LoginForm = ( { Login ,error } ) => {

    const [det, setDet] = useState( {name: "", password: ""} )

    const submitHandler = e => {
        e.preventDefault();
        Login(det);
    }

    

    return (
        <>
      <form onSubmit = {submitHandler}>
          <div className="form-inn">
              <h2>Login</h2>
              {(error !== "") ? ( <div className = "error"> {error} </div>) : ""}
              <div className="form-grp">
                  <label htmlFor="name">Username:</label>
                  <input type="text" name = "name" id ="name" onChange = {e => setDet({...det, name: e.target.value})} value = {det.name}/>
              </div>
              <div className="form-grp">
                  <label htmlFor="password">Password:</label>
                  <input type="password" name="password" id="password"  onChange = {e => setDet({...det, password: e.target.value})} value = {det.password}/>
              </div>
              <input type="submit" value="Login" className = "btn" />
          </div>
      </form>
      </>
    )
}

export default LoginForm
