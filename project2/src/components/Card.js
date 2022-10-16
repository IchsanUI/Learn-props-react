import React from "react";
import logoLocation from "../assets/location.png"

function Card(props) {
    return ( 
        <div className="Card">
            <img src={props.data.imageUrl} className="imageWorld" alt=""/>
            <div className="Desc">
                <img src={logoLocation} className="imageLocation" alt=""/>
                <span className="Country">{props.data.location}</span>
                <a href={props.data.googleMapsUrl} className="View" >View On Google Maps</a>
                <h2>{props.data.title}</h2>
                <span className="desc--date">{props.data.startDate} - {props.data.endDate}</span>
                <p>{props.data.description}</p>
            </div>

        </div>
     );
}

export default Card;