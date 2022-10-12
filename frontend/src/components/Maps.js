import React from "react";
import GoogleMapReact from "google-map-react";
import styled from "styled-components";

const Wrapper = styled.main`
  width: 100%;
  height: 100%;
`;

const TextComponent = ({ text }) => <div>{text}</div>;

export default function GoogleMaps({ lat, lng }) {
  const defaultProps = {
    center: {
      lat: lat,
      lng: lng,
    },
    zoom: 11,
  };

  return (
    <Wrapper>
      <GoogleMapReact
        bootstrapURLKeys={{ key: "AIzaSyBxntcWB7sIVHC2xMTPT6yucOuLGjJcCbU" }}
        defaultCenter={defaultProps.center}
        defaultZoom={defaultProps.zoom}
      >
        <TextComponent lat={lat} lng={lng} text="Last Known Position" />
      </GoogleMapReact>
    </Wrapper>
  );
}
