import React from "react";

function Main(props) {
  return (
    <div className="main">
      <div className="main-items">
        <img src={props.item.coverImg} />
        <div className="main-text">
          <div className="country">
            <img src="../../images/location.png" />
            <p>{props.item.country}</p>
            <a href={props.item.maps}>View of Google Maps</a>
          </div>

          <h1>{props.item.location}</h1>
          <p>
            <strong>{props.item.date}</strong>
          </p>
          <p className="description">{props.item.description}</p>
        </div>
      </div>

      <hr />
    </div>
  );
}

export default Main;
