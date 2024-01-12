import React from 'react'

const AboutUs = () => {
  return (
    <div className='aboutUs'>
        <div className='aboutUs-container'>
            <img src={require('../assets/aboutUs.png')} alt="About us" className='aboutPic'/>
            <div className='aboutText'>
                <h1>About Us</h1>
                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. t has survived not only five centuries.</p>
                <button>Read More</button>
            </div>
        </div>
    </div>
  )
}

export default AboutUs