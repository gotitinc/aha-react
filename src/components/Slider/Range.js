import React, { forwardRef } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { Range as RangeBase } from 'rc-slider';

const propTypes = {
  variant: PropTypes.oneOf([
    'primary',
    'accent',
    'warning',
    'positive',
    'negative',
  ]),
};

function SliderRange({ variant, tipFormatter, tipProps, ...props }, ref) {
  return (
    <RangeBase
      ref={ref}
      {...props}
      prefixCls="Slider"
      className={classNames(
        'u-positionRelative u-widthFull u-paddingVerticalTiny u-marginBottomLarge',
        variant && `Slider--${variant}`
      )}
    />
  );
}

SliderRange.displayName = 'SliderRange';
SliderRange.propTypes = propTypes;
SliderRange.defaultProps = {};
export default forwardRef(SliderRange);
