import React from "react";
import "./card.css"

function SongItem(props) {
    const {name, album, preview_url, iconHandler, songHandler } = props

      
    return (
        <div className="col-md-4 col-lg-3 col-sm-6 mt-2 mb-2" id="song">
            <div className="card">
                <div className="card-body">
                <div className="img">
                        <img src={album ? album.images[1].url : "#"} alt="no image" className="card-img-top rounded-circle"/>
                </div>
                <div className="details">
                    <h6 className="name"> {name} </h6>
                </div>
                <div className="icon" onClick={() => songHandler(preview_url)}>
                    { iconHandler( preview_url ) }
                </div>
                </div>
                
                
            </div>
        </div>
    )
}

export default SongItem