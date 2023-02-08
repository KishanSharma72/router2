import React from "react";


function Contact() {
  function Submit(){
    alert("Message seccessfully submitted")
  }
  return (
    <>
    <div className="tom">
      <div className="containar">
        <div>
          <h1>Contact us</h1>
        </div>
        <div>
          <label>Name</label><br />
          <input type="text" required />
          <br />
          <br />
        </div>
        <div>
          <label>Email</label><br />
          <input type="text" required />
          <br />
          <br />
        </div>
        <div>
          <label>Phone Number</label><br />
          <input type="text" required />
          <br />
          <br />
        </div>
        <div>
          <label>Country</label>
          <select>
            <option value="Choose your Option">India</option>
            <option value="Choose your Option">Nepal</option>
            <option value="Choose your Option">Bhutan</option>
            <option value="Choose your Option">ShriLanka</option>
          </select><br/><br/>
        </div>
        
        <div>
          <label>Message</label><br />
          <textarea type="text"/>
          <br />
          <br />
        </div>
        
        <div>
          <button onClick={Submit}>Send Message</button>
        </div>
      </div>
      </div>
      
    </>
  );
}
export default Contact;
