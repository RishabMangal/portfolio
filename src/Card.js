import React from 'react'

function Card (props) {
  return (
    <div>
      <div className='row card-container'>
        <div className="col-sm-2"></div>
        <div
          className='card col-sm-4'
          style={{
            backgroundImage: `url(${props.profilePics})`,
            backgroundSize: 'cover',
            minHeight: '30vh',
            animation: 'slideright 2s',
            backgroundPosition: "center",
            filter:"grayscale(100%)"
          }}
        ></div>
        <div className='card container-fluid col-sm-4 main-card-body '>
          <ul className='' style={{padding:"2%",paddingTop: "8%",paddingBottom:"7%",margin:0}}>
            <li className='text-dark text-center lead font-weight-bold'>
              Rishab Mangal
            </li>
            <li className='text-secondary font-weight-bold text-center'>
              Software Engineer
            </li>
            <li className='text-dark'>Phone:</li>
            <li className='text-secondary' style={{ paddingTop: '0px' }}>
              9928799243
            </li>
            <li className='text-dark'>Email:</li>
            <li className='text-secondary'>rishabhmangal1@gmail.com</li>
            <li className='text-dark'>Address:</li>
            <li className='text-secondary'>Ganga Hostel | MNIT Japiur | Rajasthan | India</li>
            <li className='text-dark'>Birthday:</li>
            <li className='text-secondary'>20th Oct 1999</li>
          </ul>
        </div>
        <div className="col-sm-2"></div>
        <div className="col-sm-2"></div>
        <div className='container-fluid card-footerr col-sm-8'>
          <a href='mailto:rishabhmangal1@gmail.com?subject=Awesome App'>
            <i className='fas fa-envelope px-3 mr-auto'></i>
          </a>
          <a href='https://www.linkedin.com/in/rishab-m-00b60a103/'>
            <i className='fab fa-linkedin px-3 mr-auto'></i>
          </a>
          <a href='https://api.whatsapp.com/send?phone=+919928799243&text=Hello'>
            <i className='fab fa-whatsapp px-3 mr-auto'></i>
          </a>
          <a href='https://www.facebook.com/rishabh.mangal.77'>
            <i className='fab fa-facebook-square px-3 mr-auto'></i>
          </a>
          <a href='https://www.instagram.com/rishabhmangal1/'>
            <i className='fab fa-instagram px-3 mr-auto'></i>
          </a>
          <a href='https://github.com/RishabMangal'>
            <i className='fab fa-github px-3 mr-auto'></i>
          </a>
          <a href='https://www.github.com'>
            <i className='fab fa-google-plus px-3 mr-auto'></i>
          </a>
        </div>
        <div className="col-sm-2"></div>
      </div>
    </div>
  )
}

export default Card
