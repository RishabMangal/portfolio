import React from 'react'
import music from './logo/music.png'
import painting from './logo/painting2.png'
import gaming from './logo/gaming.png'
import movie from './logo/movie.png'
import cooking from './logo/cooking.png'
import photography from './logo/photography.png'
import './resume.css'
import Hobby from './Hobby'
function Hobbies() {
    return (
        <div>
            <div id="hobbies">
                <h2 className="display-4 text-center m-0 p-3 card" style={{ border: "2px solid #f1f1f1" }}>Hobbies</h2>
                <div className="hobbies m-0">
                    <Hobby icon={music} hobby="Music"></Hobby>
                    <Hobby icon={movie} hobby="Movies"></Hobby>
                    <Hobby icon={gaming} hobby="Gaming"></Hobby>
                    <Hobby icon={painting} hobby="Painting"></Hobby>
                    <Hobby icon={photography} hobby="Photography"></Hobby>
                    <Hobby icon={cooking} hobby="Cooking"></Hobby>
                </div>
            </div>

        </div>
    )
}

export default Hobbies
