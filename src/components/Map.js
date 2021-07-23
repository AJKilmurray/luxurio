import { GoogleMap, LoadScript } from "@react-google-maps/api";

function FooterMap() {
  const centerPosition = {
    lat: 51.48932195650937,
    lng: -0.009285893630808744,
  };

  return (
    <LoadScript googleMapsApiKey="AIzaSyBIBJvlHw7qytHR-vQ0KHhiROhw3GUxJpM">
      <GoogleMap zoom={8} center={centerPosition} id="map" />
    </LoadScript>
  );
}

export default FooterMap;
