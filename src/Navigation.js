
import Nav from "react-bootstrap/Nav";

import React, { useState, useEffect } from "react";
import './index.css'

function NavigationBar() {
 
  
  return (
    <div className="button">
    
        <Nav.Link className="items" href="/PrivacyNotice/ar" >
        Arabic
        </Nav.Link>
      

  </div>
  );
}

export default NavigationBar