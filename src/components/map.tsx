import { useRef, useState } from "react";
// import Link from "next/link";
// import { Image } from "cloudinary-react";
import ReactMapGL, { Marker, Popup, ViewState } from "react-map-gl";
import "mapbox-gl/dist/mapbox-gl.css";
// import { useLocalState } from "src/utils/useLocalState";
// import { HousesQuery_houses } from "src/generated/HousesQuery";
// import { SearchBox } from "./searchBox";

const Map = () => {
  const mapRef = useRef<ReactMapGL | null>(null);
  const [viewport, setViewport] = useState<ViewState>({
    latitude: 43,
    longitude: -79,
    zoom: 10,
  });
  return (
    <div className="text-black relative">
      <ReactMapGL
        {...viewport}
        width="100%"
        height="calc(100vh - 64px)"
        mapboxApiAccessToken={process.env.NEXT_PUBLIC_MAPBOX_API_TOKEN}
        onViewportChange={(nextViewportState) => setViewport(nextViewportState)}
        ref={(instance) => (mapRef.current = instance)}
        mapStyle="mapbox://styles/themuneebh/ckvf6m6na1tuk14l2eszckhba"
        minZoom={5}
        maxZoom={15}
      />
    </div>
  );
};

export default Map;
