import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { emptyStates } from '../../constants';
import createBlock from '../../utils/createBlock';

const propTypes = {
  /** The EmptyState visual name */
  name: PropTypes.oneOf([
    'general',
    'session',
    'notification',
    'searchResult',
    'inbox',
  ]),
  /** Scalable Vector Graphics (*.svg) or Bitmap (*.png) */
  fileType: PropTypes.oneOf([
    'svg',
    'png',
  ]),
  /** Providing a `src` will render an `<img>` element */
  src: PropTypes.string,
  /** Providing a alt if `src` exits  */
  alt: PropTypes.string,
  /** Set the width of the logo */
  width: PropTypes.number,
  /** Set the height of the logo */
  height: PropTypes.number,
};
const defaultProps = {
  fileType: 'svg',
  name: 'general',
  width: 240,
};
const EmptyState = React.forwardRef(({ className, children, name, src, fileType, alt, height, width, as: Component = 'div', ...props }, ref) => {
  let nameOri = name;
  let typeOri;
  if (nameOri) {
    typeOri = fileType || 'svg';
  }
  if (src) {
    nameOri = false;
  }

  return (
    <Component
      {...props}
      ref={ref}
      className={classNames(
        'EmptyState',
        'u-inlineBlock u-textCenter',
        className && className
      )}
    >
      {nameOri && (
        <img width={width} height={height} src={emptyStates[nameOri][typeOri]} alt={emptyStates[nameOri].title} className="u-maxWidthFull" />
      )}
      {src && (
        <img width={width} height={height} src={src} alt={alt} className="u-maxWidthFull" />
      )}
      {children}
    </Component>
  );
});

const Heading = createBlock('EmptyState-heading u-marginTopSmall u-text600 u-fontMedium u-textLight');
const Description = createBlock('EmptyState-description u-marginBottomSmall u-textLight');

EmptyState.Heading = Heading;
EmptyState.Description = Description;
EmptyState.displayName = 'EmptyState';
EmptyState.defaultProps = defaultProps;
EmptyState.propTypes = propTypes;
export default EmptyState;
