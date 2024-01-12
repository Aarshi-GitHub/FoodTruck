import React from 'react'

const LandingPage = () =>{
  return (
    <div className='landingPage'>
        <div className='landingPageHeading'>
        <img src={require('../assets/foodTruck.png')} alt="Food Truck Logo" className='foodTruckLogo'/>
        <h1>Discover the <span>Best</span> Food and Drinks</h1>
        <p>Naturally made Healthcare Products for the better care & support of your body</p>
        <button>Explore Now !</button>
        </div>
        <div className='landingPageImage'>
            <img src={require('../assets/pizza.png')} alt="Pizza" className="pizzaImg"/>
            <img className='frame' src={require('../assets/frame.png')} alt='frame'></img>
            <button className="getInTouch">Get In Touch</button>
        </div>
    </div>
  )
}

export default LandingPage;