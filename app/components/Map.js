"use client";
import React, { useContext, useState } from "react";
// import { Context } from "../store/appContext";
import GoogleMapReact from "google-map-react";

export const Map = () => {

  let lat = 25.727264069277847;
  let lng = -80.2627160981497;

  const [city, setCity] = useState({
    center: { lat: lat, lng: lng },
  });


  return (
    <div>
      <div className="map">
        <GoogleMapReact
          // Put the google API key here!!
          bootstrapURLKeys={{ key: "AIzaSyDOhqYOYIXvrk8lt2HQQLI8cS1O8FnZt9I" }}
          center={city.center}
          defaultZoom={14}
        >
        </GoogleMapReact>
      </div>
    </div>
  );
};
