import { useCallback } from 'react';
import BaseLayer from './BaseLayer';

import baselayers from '../../../../data/baselayers.json';

const BaseLayersFactory = () => {

  const baselayersMaker = useCallback(
    () => baselayers.map((baselayer, index) =>
      <BaseLayer
        key={index}
        status={baselayer.default}
        label={baselayer.label}
        url={baselayer.url}
      />
    ), []
  );

  return baselayersMaker();
};

export default BaseLayersFactory;
