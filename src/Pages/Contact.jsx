import React from 'react'

const Contact = () => {
  return (
    <div className='contact'>
        <div className='logo'>
        <img src={require('../assets/foodTruck.png')} alt="Food Truck Logo" className='foodTruckLogo'/>
        </div>
        <div className='add1'>
            <h2>Contact Us</h2>
            <p>Lorem Ipsum Pvt Ltd.5/1, Magalton Road, Phartosh Gate near YTM Market, XYZ-343434</p>
            <p>example2020@gmail.com</p>
            <p>(904) 443-0343</p>
        </div>
        <div className='more'>
            <h2>More</h2>
            <p>About Us</p>
            <p>Products</p>
            <p>Career</p>
            <p>Contact Us</p>
        </div>
        <div className='socialCopy'>
            <div>
                <h2>Social Links</h2>
                <div className='icons'>
                    <i className="fa-brands fa-instagram"></i>
                    <i className="fa-brands fa-twitter"></i>
                    <i className="fa-brands fa-facebook-f"></i>
                </div>
            </div>
            <div className='copyright'>
                &copy; 2022 Food Truck Example
            </div>
        </div>
    </div>
  )
}

export default Contact