import React from "react";
import "./login.css";

function Login() {
  return(
    <div> 
      <h1>Log In</h1>  
      <div className="orange">

        <form action="/action_page.php">

          <h3 className="text">Username</h3>

          <input type="text"/>
      
          <h3 className="text">Password</h3>
          <input type="text"/>
      
          <h3 for="country" className="text">Country</h3>
          <select id="country" name="country">
            <option value="canada">Canada</option>
            <option value="usa">USA</option>
            <option value="australia">Australia</option>
          </select>
        
          <input type="submit" value="Submit"/>
        </form>

      </div>

    </div>  
      
    );
}

export default Login;