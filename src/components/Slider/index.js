import React, { forwardRef } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import SliderBase from 'rc-slider';
import SliderRange from './Range';
import SliderHandle from './Handle';
import createSliderWithTooltip from './createSliderWithTooltip';

const propTypes = {
  /**
   * The Slider visual variant
   * @default 'primary'
   */
  variant: PropTypes.oneOf([
    'primary',
    'accent',
    'warning',
    'positive',
    'negative',
  ]),
  /** @private */
  vertical: PropTypes.bool,
};

function Slider ({ vertical, variant, ...props }, ref) {
  return (
    <SliderBase
      ref={ref}
      {...props}
      vertical={vertical}
      prefixCls="Slider"
      className={classNames(
        'u-positionRelative',
        vertical ? 'u-heightFull u-paddingHorizontalTiny' : 'u-widthFull u-paddingVerticalTiny u-marginBottomLarge',
        variant && `Slider--${variant}`
      )}
    />
  );
}

Slider.displayName = 'Slider';
Slider.propTypes = propTypes;
Slider.defaultProps = {};
Slider.Handle = SliderHandle;
Slider.Range = SliderRange;
Slider.createSliderWithTooltip = createSliderWithTooltip;
export default forwardRef(Slider);
