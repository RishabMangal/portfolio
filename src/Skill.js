import React from 'react'

function Skill (props) {
  return (
    <div className='skill'>
      <div className='skillimgdiv' style={{ animation: `${props.animation}` }}>
        <img
          className='skillimg'
          src={props.skillimg}
          alt={props.name + ' logo'}
        ></img>
      </div>
      <div className='lead text-light font-weight-bold text-center p-2'>
        {props.name}<br></br>
        <p className='m-2 text-secondary font-weight-light'>{props.level}</p>
      </div>
    </div>
  )
}

export default Skill
