import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

const propTypes = {
  /** The Badge visual variant */
  variant: PropTypes.oneOf([
    'default',
    'white',
    'black',
    'primary',
    'primary_subtle',
    'warning',
    'warning_subtle',
    'positive',
    'positive_subtle',
    'information',
    'information_subtle',
    'negative',
    'negative_subtle',
  ]),
  /**
   * You can use a custom element type for this component.
   * @default span
   */
  as: PropTypes.elementType,
};
const defaultProps = {
  variant: 'default',
};

const variantsClassName = {
  default: 'u-textGray hover:u-textGray u-backgroundUltraLight',
  white: 'u-texDark hover:u-texDark u-backgroundWhite',
  black: 'u-textWhite hover:u-textWhite u-backgroundBlack',
  primary: 'u-textWhite hover:u-textWhite u-backgroundPrimary',
  primary_subtle: 'u-textPrimary hover:u-textPrimary u-backgroundPrimaryLighter',
  information: 'u-textWhite hover:u-textWhite u-backgroundInformation',
  information_subtle: 'u-textInformation hover:u-textInformation u-backgroundInformationLighter',
  warning: 'u-textDark hover:u-textDark u-backgroundWarning',
  warning_subtle: 'u-textDark hover:u-textDark u-backgroundWarningLighter',
  positive: 'u-textWhite hover:u-textWhite u-backgroundPositive',
  positive_subtle: 'u-textPositive hover:u-textPositive u-backgroundPositiveLighter',
  negative: 'u-textWhite hover:u-textWhite u-backgroundNegative',
  negative_subtle: 'u-textNegative hover:u-textNegative u-backgroundNegativeLighter',
};

const Badge = React.forwardRef(({ className, variant, as: Component = 'span', ...props }, ref) => (
  <Component
    {...props}
    ref={ref}
    className={classNames(
      'Badge',
      'u-inlineBlock u-textCenter u-text200 u-fontMedium u-textNoWrap u-roundedInfinity hover:u-textDecorationNone',
      variant && variantsClassName[variant],
      className && className
    )}
  />
));

Badge.displayName = 'Badge';
Badge.defaultProps = defaultProps;
Badge.propTypes = propTypes;
export default Badge;
