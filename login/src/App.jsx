import React from "react";
import "./App.css";

function App() {
  return (
    <div>
      <h1 className="title">Sign Up Form</h1>

      <div className="container">
        <form>

          {/* Basic Information */}
          <input placeholder="First Name" />
          <input placeholder="Last Name" />
          <input type="email" placeholder="Email" />
          <input type="tel" placeholder="Phone Number" />
          <input type="date" />

          {/* Address */}
          <textarea placeholder="Full Address"></textarea>

          {/* City */}
          <select>
            <option value="">Choose City</option>
            <option value="Dhaka">Dhaka</option>
            <option value="Rangpur">Rangpur</option>
            <option value="Chittagong">Chittagong</option>
          </select>

                 



          {/* Social Links */}
          <input type="url" placeholder="Facebook Profile Link" />
          <input type="url" placeholder="LinkedIn Profile Link" />
          <input type="url" placeholder="GitHub Profile Link" />
          <input type="url" placeholder="Personal Website (Optional)" />

          {/* Password */}
          <input type="password" placeholder="Password" />
          <input type="password" placeholder="Confirm Password" />

          {/* Agreement */}
          <h3>I agree to the Terms & Conditions</h3>
          <div className="checkbox-group">
            <label>
              <input type="checkbox" /> 
            </label>
          </div>

          <button type="submit">Submit</button>
        </form>
      </div>
    </div>
  );
}

export default App;