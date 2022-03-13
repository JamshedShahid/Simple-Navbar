import React from 'react'
import Img from "./images/img.png"
import "./NAvbar.css"
import { BsSearch } from "react-icons/bs";

const Navbar = () => {
  return (
    <div className='container-fluid MAin flexx pt-2'>
        <div className='maiDiv'>
        <div className='d-flex mainDiv' >
            <h2 className='heading-h2 pl-2'>
                Replika
            </h2>
            <div className='w-50 cmd d-flex'>
                <input type="search"   placeholder='Search'  className="pl-2 input-group form-control "  /><button className='button'><BsSearch/></button>
               
            </div>
            <div>
                
            </div>

            <div>
               <img src={Img} alt="" width={130} />
            </div>
        </div>



        </div>
      
    </div>
  )
}

export default Navbar
