import { useParams } from "react-router-dom";
import ReactPlayer from "react-player";
import "./Trailer.css"

import React from 'react'
import { height } from "@fortawesome/free-solid-svg-icons/fa0";

const Trailer = () => {
    let params = useParams();
    var key =params.ytTrailerId;
  return (
    <div className="react-trailer-container">
    {(key!=null)?<ReactPlayer controls="true" playing="true" url ={`https://www.youtube.com/watch?v=${key}`}
    width='100%' height='100%'/>:null}
    </div>
  )
}

export default Trailer