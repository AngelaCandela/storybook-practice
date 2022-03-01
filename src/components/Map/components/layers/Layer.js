import { useState } from "react";
import L from 'leaflet';
import { FeatureGroup, GeoJSON } from "react-leaflet";

const Layer = ({
  data,
  pointToLayer,
  handleClick,
  handleHover,
  children
}) => {

  const [hoveredFeature, setHoveredFeature] = useState(null);
  const [clickedFeature, setClickedFeature] = useState(null);

  const pointToLayerDefault = (feature, latlng) => {
    return L.circleMarker(latlng, null);
    // return L.marker(latlng, { icon: icon }); // Set a custom icon

  const handleHoverDefault = (feature) => {
    setHoveredFeature(feature);
    console.log(`hovered feature: ${feature} from default`);
  };

  const handleClickDefault = (feature) => {
    setClickedFeature(feature);
    console.log(`clicked feature: ${feature} from default`);
  };
  };

  return (
    <FeatureGroup>
      <GeoJSON
        key={`map_hovered_feature_${hoveredFeature}_clicked_feature_${clickedFeature}`}
        data={data}
        pointToLayer={pointToLayer || pointToLayerDefault}
        eventHandlers={{
          click: (feature) => {
            handleClick ? handleClick(feature) : handleClickDefault(feature)
          },
          mouseover: (feature) => {
            handleHover ? handleHover(feature) : handleHoverDefault(feature)
          },
        }}
      />
      {children}
    </FeatureGroup>
  );
};

export default Layer;
