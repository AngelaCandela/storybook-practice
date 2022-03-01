import L from 'leaflet';

import marker from '../../../assets/icons/hydro.png';
import markerShadow from '../../../assets/icons/marker-shadow.png';

const icon = new L.Icon({
  iconUrl: marker,
  iconSize: [25, 33],
  popupAnchor: [0, -15],
  shadowUrl: markerShadow,
  shadowAnchor: [16, 35]
});

export default icon;
