import React, { forwardRef } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

const propTypes = {
  /** Specify whether the feedback is for valid or invalid fields */
  type: PropTypes.oneOf(['valid', 'invalid']),
  /**
   * Set Form.Feedback visible
   */
  visible: PropTypes.bool,
  /**
   * You can use a custom element type for this component.
   * @default div
   * */
  as: PropTypes.elementType,
};

const defaultProps = {
  type: 'valid',
  visible: false,
};

function FormFeedback({ className, type, visible, as: Component = 'div', ...props }, ref) {
  return (
    <Component
      {...props}
      ref={ref}
      className={classNames(
        'u-marginTopTiny u-widthFull u-text100',
        className && className,
        type && `${type}-feedback`,
        visible && 'is-visible'
      )}
    />
  );
}
FormFeedback.displayName = 'FormFeedback';
FormFeedback.propTypes = propTypes;
FormFeedback.defaultProps = defaultProps;

export default forwardRef(FormFeedback);
