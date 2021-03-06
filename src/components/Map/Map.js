import styled from 'styled-components';
import { MapContainer, LayersControl } from 'react-leaflet';
import BaseLayersFactory from './components/layers/BaseLayersFactory';
import Layer from "./components/layers/Layer";
import CustomControl from "./components/controls/CustomControl.tsx";
import L from 'leaflet';
import icon from "./icons/icon";

import 'leaflet/dist/leaflet.css';

import layerData from "../../data/pointsLayerData.json";

// Style React Leaflet's MapContainer to take 100% of the page's size
const MapWrapper = styled(MapContainer)`
  width: 100vw;
  height: 100vh;
`;

// Define initial bounds
const initBounds = [
  [42.5993718217880613, 1.5937492475355806],
  [45.9312500000000341, 7.6656250000000341]
];

const pointToLayer = (feature, latlng) => {
  return L.marker(latlng, { icon: icon }); // Set a custom icon
};

const handleHover = (feature) => {
  console.log(`hovered feature: ${feature}`);
};

const handleClick = (feature) => {
  console.log(`clicked feature: ${feature}`);
};

const Map = () => {
  return (
    <MapWrapper
      bounds={initBounds}
      zoom={8}
      scrollWheelZoom={false}>

      <LayersControl position="topleft">
        <BaseLayersFactory />
      </LayersControl>

      <Layer
        data={layerData}
        pointToLayer={pointToLayer}
        handleHover={handleHover}
        handleClick={handleClick}
        useTooltip
        //tooltipContent="hola"
      />

      <CustomControl>Hola</CustomControl>
    </MapWrapper>
  );
};

export default Map;
