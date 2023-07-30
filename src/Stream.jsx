/* Code for live stream */


import React from "react";
import PropTypes from "prop-types";

export const YoutubeEmbed = ({ embedId }) => (
  <div className="video-responsive">
    <iframe
      width="853"
      height="480"
      src={`https://www.youtube.com/embed/${embedId}`}
      frameBorder="0"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
      allowFullScreen
      title="Embedded youtube"
    />
  </div>
);

YoutubeEmbed.propTypes = {
  embedId: PropTypes.string.isRequired
};

export const Stream=()=>{
    <>
    <h1>We are live!</h1>
     <div className = "livestream">
        <video
      controls
      loop
      autoplay
      muted
      src="weekend.mp4"
      width="670px"
      height="400px"
      poster=""></video>
    </div></>     
}