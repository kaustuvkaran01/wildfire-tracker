import React,{useState} from "react";
import GoogleMapReact from "google-map-react";

import LocationMarker from "./LocationMarker";
import LocationInfoBox from "./LocationInfoBox";
// import Icon from "@iconify/react";

const Map = ({ eventData, center, zoom }) => {

    const [locInfo,setLocInfo] = useState(null);

    const markers = eventData.map((ev)=>{
        if(ev.categories[0].id === 8){
            return <LocationMarker lat={ev.geometries[0].coordinates[1]} lng={ev.geometries[0].coordinates[0]} onClick={()=> setLocInfo({id:ev.id, title:ev.title, link:ev.link})}/>
        }
        return null;
    })
    // console.log(eventData);
  return (
    <div className="map">
      <GoogleMapReact
        bootstrapURLKeys={{ key: "AIzaSyDpe9SPMWbdI8CCBBXo3UooM7suGVBUQtM" }}
        defaultCenter={center}
        defaultZoom={zoom}
      >
        {markers}
        {/* <LocationMarker lat={center.lat} lng={center.lng} /> */}
      </GoogleMapReact>
      {locInfo && <LocationInfoBox info={locInfo} />}
    </div>
  );
}

Map.defaultProps = {
  center: {
    lat: 42.3265,
    lng: -122.8756,
  },
  zoom: 6,
};

export default Map;
