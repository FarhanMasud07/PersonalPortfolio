import React from 'react'
import {Link} from "react-router-dom";
export default function nav() {
    return (
        <div style={{display:'flex',height:'70px', alignItems:'center', justifyContent: 'center'}}>
          <Link style={{paddingRight:'15px',color:'white',textDecoration:'None',cursor:'pointer'}} to="/">Home</Link>
          <Link style={{paddingRight:'15px',color:'white',textDecoration:'None',cursor:'pointer'}} to="/Resume">Resume</Link>
          <Link style={{color:'white',textDecoration:'None',cursor:'pointer'}} to="/Portfolio">Portfolio</Link>
        </div>
    )
}
