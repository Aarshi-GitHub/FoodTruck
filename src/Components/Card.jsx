import React from 'react'

const Card = (props) => {
    console.log(props.pic);
  return (
    <div className='card'>
        <img src={require(`../${props.pic}`)} alt={props.pic} />
        <h2>{props.title}</h2>
        <p>{props.description}</p>
        <button>Read More</button>
    </div>
  )
}

export default Card;