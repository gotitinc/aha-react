import React, { forwardRef, useMemo } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { FormContext } from 'utils/Context';

const propTypes = {
  /** Sets id on `<Form.Input>` and htmlFor on `<Form.Label>`. */
  controlId: PropTypes.string,
  /**
   * Sets sizeInput on `<Form.Input>` and sizeLabel on `<Form.Label>`.
   * @default 'medium'
   * @type {('small'|'medium'|'large')}
   * */
  sizeControl: PropTypes.string,
  /**
   * Sets required on `<Form.Input>`.
   * @default false
   * */
  requiredControl: PropTypes.bool,
  /**
   * You can use a custom element type for this component.
   * @default div
   * */
  as: PropTypes.elementType,
};

const defaultProps = {
};

function FormGroup({ className, controlId, sizeControl, disabledControl, requiredControl, as: Component = 'div', ...props }, ref) {
  const context = useMemo(() => ({ controlId, sizeControl, requiredControl, disabledControl }), [controlId, sizeControl, requiredControl, disabledControl]);
  return (
    <FormContext.Provider value={context}>
      <Component
        {...props}
        ref={ref}
        className={classNames(
          'FormGroup',
          'u-block u-marginBottomSmall',
          className && className,
        )}
      />
    </FormContext.Provider>
  );
}
FormGroup.displayName = 'FormGroup';
FormGroup.propTypes = propTypes;
FormGroup.defaultProps = defaultProps;
export default forwardRef(FormGroup);
