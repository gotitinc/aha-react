import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { PluginType } from '../../constants/common';
import Plugins from '../../plugins';

const propTypes = {
  /** The icon visual name, should be provide via an AssetPlugin with prefix "icon" */
  // eslint-disable-next-line no-sparse-arrays
  name: PropTypes.string,
  /** Icon size variants */
  size: PropTypes.oneOf([
    'tiny',
    'extraSmall',
    'small',
    'medium',
    'large',
    'extraLarge',
    'extraLargePlus',
    'huge',
  ]),
  /**
   * Path of SVG
   */
  path: PropTypes.string,
};

const defaultProps = {
  size: 'small',
  name: 'cloud',
};

const sizes = {
  tiny: 12,
  extraSmall: 16,
  small: 24,
  medium: 32,
  large: 48,
  extraLarge: 64,
  extraLargePlus: 96,
  huge: 128,
};
const styles = {
  svg: {
    verticalAlign: 'middle',
  },
  path: {
    fill: 'currentColor',
  },
};


const Icon = React.forwardRef(({ className, path, size, name, ...props }, ref) => {
  let pathOri = path;
  let nameOri = name;
  if (pathOri) {
    nameOri = false;
  } else if (nameOri) {
    pathOri = Plugins
      .getPlugins(PluginType.ASSET)
      .traverseCall('getAsset', 'icon', nameOri)
      .slice()
      .reverse()
      .find(asset => !!asset);
  }
  return (
    <svg
      ref={ref}
      {...props}
      style={{ ...styles.svg, ...props.style }}
      width={`${sizes[size]}px`}
      height={`${sizes[size]}px`}
      className={classNames(
        'u-inlineBlock',
        className && className
      )}
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
      focusable="false"
    >
      <path
        style={styles.path}
        d={pathOri}
      />
    </svg>
  );
});


Icon.displayName = 'Icon';
Icon.defaultProps = defaultProps;
Icon.propTypes = propTypes;
export default Icon;
