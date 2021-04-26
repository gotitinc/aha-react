import React, { forwardRef, useContext } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import warning from 'warning';
import { FormContext } from 'utils/Context';

const propTypes = {
  /**
   * Uses sizeControl from `<Form.Group>` if not explicitly specified.
   * @default 'medium'
   * */
  sizeLabel: PropTypes.oneOf([
    'small',
    'medium',
    'large',
  ]),
  /**
   * Uses requiredId from `<Form.Group>` if not explicitly specified.
   * @default false
   * */
  required: PropTypes.bool,
  /** Uses controlId from `<Form.Group>` if not explicitly specified. */
  htmlFor: PropTypes.string,
};

const defaultProps = {
};

const labelSizes = {
  small: 'u-text200',
  medium: '',
  large: '',
};
function FormLabel({ className, sizeLabel, required, htmlFor, as: Component = 'label', ...props }, ref) {
  const { controlId, sizeControl, requiredControl } = useContext(FormContext);

  warning(
    controlId == null || !htmlFor,
    '`controlId` is ignored on `<Form.Label>` when `htmlFor` is specified.',
  );
  const htmlForSet = htmlFor || controlId;
  const requiredSet = required || requiredControl;
  const sizeLabelSet = sizeLabel || sizeControl;
  return (
    <Component
      ref={ref}
      required={requiredSet}
      className={
        classNames(
          'FormLabel',
          'u-block u-marginBottomTiny',
          className && className,
          sizeLabelSet && labelSizes[sizeLabelSet]
        )}
      htmlFor={htmlForSet}
      {...props}
    />
  );
}
FormLabel.displayName = 'FormLabel';
FormLabel.propTypes = propTypes;
FormLabel.defaultProps = defaultProps;

export default forwardRef(FormLabel);
