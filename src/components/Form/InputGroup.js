import React, { forwardRef, useContext } from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types';
import { FormContext } from 'utils/Context';
import createBlock from 'utils/createBlock';

const propTypes = {
  /**
   * You can use a custom element type for this component.
   * @default div
   * */
  as: PropTypes.elementType,
};

const defaultProps = {
};

function FormInputGroup({ className, as: Component = 'div', ...props }, ref) {
  const { sizeControl } = useContext(FormContext);
  return (
    <Component
      ref={ref}
      {...props}
      className={classNames(
        'FormInputGroup',
        'u-flex u-positionRelative u-flexWrap u-alignItemsStretch',
        sizeControl && `FormInputGroup--${sizeControl}`,
        className && className
      )}
    />
  );
}

const Append = createBlock('FormInputGroup-append u-flex');
const Prepend = createBlock('FormInputGroup-prepend u-flex ');
const Text = createBlock('FormInputGroup-text u-flex u-alignItemsCenter u-textGray u-textCenter u-backgroundLightest u-textNoWrap');

FormInputGroup.Text = Text;
FormInputGroup.Append = Append;
FormInputGroup.Prepend = Prepend;
FormInputGroup.displayName = 'FormInputGroup';
FormInputGroup.defaultProps = defaultProps;
FormInputGroup.propTypes = propTypes;
export default forwardRef(FormInputGroup);
