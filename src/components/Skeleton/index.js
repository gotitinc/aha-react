import React, { forwardRef } from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types';

const propTypes = {
  /** The Skeleton visual variant */
  variant: PropTypes.oneOf([
    'text',
    'circle',
  ]),
  /** Set the width of the skeleton */
  width: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number,
  ]),
  /** Set the height of the skeleton */
  height: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number,
  ]),
  /** Set the duration of the animation skeleton */
  duration: PropTypes.number,
};

const variantClass = {
  text: '',
  circle: 'u-roundedCircle',
};
const defaultProps = {
  height: 16,
  variant: 'text',
  duration: 2000,
};


function Skeleton({ variant, width, height, duration, style, as: Component = 'div', ...props }, ref) {
  const heightStyle = {
    width: width && width,
    height: height && height,
    animationDuration: `${duration}ms`,
  };
  const mergeProps = {
    ref,
    style: { ...style, ...heightStyle },
    ...props,
  };
  return (
    <Component
      {...mergeProps}
      className={classNames(
        'Skeleton',
        variant && variantClass[variant],
        'u-flex u-positionRelative u-pointerEventsNone u-shadowNone u-backgroundLighter u-overflowHidden'
      )}
    />
  );
}

Skeleton.displayName = 'Skeleton';
Skeleton.propTypes = propTypes;
Skeleton.defaultProps = defaultProps;
export default forwardRef(Skeleton);
