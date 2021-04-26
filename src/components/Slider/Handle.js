import React from 'react';
import { Handle as HandleBase } from 'rc-slider';

function SliderHandle (props, ref) {
  return (
    <HandleBase
      ref={ref}
      {...props}
    />
  );
}
SliderHandle.displayName = 'SliderHandle';
SliderHandle.propTypes = {};
SliderHandle.defaultProps = {};
export default SliderHandle;
