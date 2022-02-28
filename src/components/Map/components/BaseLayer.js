import { LayersControl, TileLayer } from 'react-leaflet';

const BaseLayer = ({ status, label, url }) => {
  return(
    <LayersControl.BaseLayer checked={status} name={label}>
      <TileLayer url={url} zIndex={0}/>
    </LayersControl.BaseLayer>
  );
};

export default BaseLayer;
