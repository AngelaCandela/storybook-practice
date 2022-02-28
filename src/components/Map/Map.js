import styled from 'styled-components';
import { MapContainer, LayersControl } from 'react-leaflet';
import BaseLayersFactory from './components/BaseLayersFactory';

import 'leaflet/dist/leaflet.css';

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

const Map = () => {
  return (
    <MapWrapper
      bounds={initBounds}
      zoom={8}
      scrollWheelZoom={false}>

      <LayersControl position="topleft">
        <BaseLayersFactory />
      </LayersControl>

    </MapWrapper>
  );
};

export default Map;
