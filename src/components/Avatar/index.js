import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

const propTypes = {
  /** The Avatar visual name, should be provide via an AssetPlugin with prefix "avatar" */
  name: PropTypes.string,
  /** Avatar size variants */
  size: PropTypes.oneOf([
    'extraSmall',
    'small',
    'medium',
    'large',
    'extraLarge',
    'extraLargePlus',
    'huge',
  ]),
  /** Providing a `src` will render an `<img>` element */
  src: PropTypes.string,
  /** Providing a `text` will render an `<div>` element */
  text: PropTypes.string,
  /** Providing a alt if `src` exits  */
  alt: PropTypes.string,
  /** Set the width of the avatar */
  width: PropTypes.number,
  /** Set the height of the avatar */
  height: PropTypes.number,
  /**
   * You can use a custom element type for this component.
   * @default div
   * */
  as: PropTypes.elementType,
};

const defaultProps = {
  size: 'medium',
  name: 'default',
  alt: 'Avatar',
};

const Avatar = React.forwardRef(({ className, size, name, src, alt, height, width, text, as: Component = 'div', ...props }, ref) => {
  // let nameOri = name;
  // if (src || text) {
  //   nameOri = false;
  // }
  const heightStyle = {
    width: width && width,
    height: height && height,
  };
  const mergeProps = {
    ref,
    style: { ...props.style, ...heightStyle },
    ...props,
  };
  return (
    <Component
      {...mergeProps}
      ref={ref}
      className={classNames(
        'Avatar u-positionRelative u-block u-paddingNone u-overflowHidden',
        size && `Avatar--${size}`,
        text && 'u-roundedCircle',
        className && className
      )}
    >
      {src && (
        <img src={src} alt={alt} className="u-maxWidthFull u-roundedCircle u-positionAbsolute u-borderNone u-positionFull u-widthFull u-heightFull" />
      )}
      {text && (
        <div className="u-lineHeightReset u-positionAbsolute u-positionCenter">{text}</div>
      )}
    </Component>
  );
});


Avatar.displayName = 'Avatar';
Avatar.defaultProps = defaultProps;
Avatar.propTypes = propTypes;
export default Avatar;
