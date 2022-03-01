import { useState } from "react";
import L from 'leaflet';
import { FeatureGroup, GeoJSON } from "react-leaflet";

const Layer = ({
  data,
  pointToLayer,
  children
}) => {

  const [hoveredFeature, setHoveredFeature] = useState(null);
  const [clickedFeature, setClickedFeature] = useState(null);

  const pointToLayerDefault = (feature, latlng) => {
    return L.circleMarker(latlng, null);
    // return L.marker(latlng, { icon: icon }); // Set a custom icon
  };

  return (
    <FeatureGroup>
      <GeoJSON
        key={`map_hovered_feature_${hoveredFeature}_clicked_feature_${clickedFeature}`}
        data={data}
        pointToLayer={pointToLayer || pointToLayerDefault}
      {children}
    </FeatureGroup>
  );
};

export default Layer;
