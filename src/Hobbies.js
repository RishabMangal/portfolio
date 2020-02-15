import React from 'react'
import music from './logo/music.png'
import painting from './logo/painting2.png'
import gaming from './logo/gaming.png'
import movie from './logo/movie.png'
import cooking from './logo/cooking.png'
import photography from './logo/photography.png'
import './resume.css'
function Hobbies() {
    return (
        <div>
            <div id="hobbies">
                <h2 className="display-4 text-center m-0 p-3 card" style={{ border: "2px solid #f1f1f1" }}>Hobbies</h2>
                <div className="hobbies m-0">
                    <div className="card-body hobby ">
                        <img className="hobbyimg" src={music} alt="music"></img>
                        <p className="lead">Music</p>
                    </div>
                    <div className="card-body hobby ">
                        <img className="hobbyimg" src={movie} alt="music"></img>
                        <p className="lead">Movies</p>
                    </div>
                    <div className="card-body hobby ">
                        <img className="hobbyimg" src={gaming} alt="music"></img>
                        <p className="lead">Gaming</p>
                    </div>
                    <div className="card-body hobby ">
                        <img className="hobbyimg" src={painting} alt="music"></img>
                        <p className="lead">Painting</p>
                    </div>
                    <div className="card-body hobby ">
                        <img className="hobbyimg" src={cooking} alt="music"></img>
                        <p className="lead">Cooking</p>
                    </div>
                    <div className="card-body hobby ">
                        <img className="hobbyimg" src={photography} alt="music"></img>
                        <p className="lead">Photography</p>
                    </div>

                </div>
            </div>

        </div>
    )
}

export default Hobbies
