import React, { forwardRef } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

const propTypes = {
  /** Set the visual state of the Toggle to active */
  checked: PropTypes.bool,
  /** Disables the disabled, preventing mouse events, even if the underlying component is an `<a>` element */
  disabled: PropTypes.bool,
  /** Disable the label */
  nonLabel: PropTypes.bool,
  /** Custom label for the on-state */
  textLabelOn: PropTypes.string,
  /** Custom label for the off-state */
  textLabelOff: PropTypes.string,
};

const defaultProps = {
  checked: false,
  disabled: false,
  nonLabel: false,
  textLabelOn: 'On',
  textLabelOff: 'Off',
};

function Toggle({ className, checked, disabled, nonLabel, textLabelOn, textLabelOff, as: Component = 'button', ...props }, ref) {
  return (
    <div
      className={classNames(
        'u-flexInline u-alignItemsCenter',
        className && className
      )}
      {...props}
      ref={ref}
    >
      <Component
        className={classNames(
          'Toggle',
          'u-positionRelative u-backgroundSemiLight u-textDark u-paddingNone u-borderNone u-cursorPointer',
          checked && 'checked u-backgroundPrimary',
          disabled && 'is-disabled u-cursorNotAllow u-pointerEventsNone',
        )}
        disabled={(Component === 'button') ? disabled : undefined}
      >
        <div className={classNames(
          'Toggle-handle',
          'u-positionAbsolute u-backgroundWhite'
        )}
        />
      </Component>
      {!nonLabel && (
      <div className={classNames(
        'u-marginLeftExtraSmall',
        disabled && 'u-textLight'
      )}
      >
        {checked ? textLabelOn : textLabelOff}
      </div>
      )}
    </div>
  );
}
Toggle.displayName = 'Toggle';
Toggle.defaultProps = defaultProps;
Toggle.propTypes = propTypes;
export default forwardRef(Toggle);
