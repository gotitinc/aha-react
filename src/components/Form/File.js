import React, { forwardRef, useContext } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import warning from 'warning';
import { FormContext } from 'utils/Context';

const propTypes = {
  /**
   * The underlying HTML element to use when rendering the Form.File.
   * @default div
   * */
  as: PropTypes.elementType,
  /** Uses controlId from `<Form.Group>` if not explicitly specified. */
  id: PropTypes.string,
  /**
   * Uses sizeControl from `<Form.Group>` if not explicitly specified.
   * @default 'medium'
   * */
  sizeInput: PropTypes.oneOf([
    'small',
    'medium',
    'large',
  ]),
  /** File name */
  fileName: PropTypes.string,
  /** Custom browse button text  */
  browseText: PropTypes.string,
  /**
   * Add "invalid" validation styles to the control and accompanying label
   * @default false
   * */
  isValid: PropTypes.bool,
  /**
   * Add "valid" validation styles to the control
   * @default false
   * */
  isInvalid: PropTypes.bool,
  /** Remove border all state */
  isBorderNone: PropTypes.bool,
  /** Reset background to transparent*/
  isBackgroundReset: PropTypes.bool,
  /** The underlying HTML element to use when rendering the Form.Input. */
  placeholder: PropTypes.string,
};

const defaultProps = {
  browseText: 'Browse',
  placeholder: '',
};

function FormFile ({ className, sizeInput, id, fileName, placeholder, browseText, isValid, isInvalid, isBorderNone, isBackgroundReset, disabled, as: Component = 'div', ...props }, ref) {
  const { sizeControl, controlId, disabledControl } = useContext(FormContext);
  const sizeInputSet = sizeInput || sizeControl;
  const idSet = id || controlId;
  const disabledOri = disabled || disabledControl;

  warning(
    controlId == null || !id,
    '`controlId` is ignored on `<Form.File>` when `id` is specified.',
  );
  return (
    <Component
      className={classNames(
        'FormInput FormInput--file',
        'u-positionRelative u-flex u-alignItemsCenter u-overflowHidden',
        sizeInputSet && `FormInput--${sizeInputSet}`,
        sizeInputSet === 'small' && 'u-text200',
        disabledOri ? 'u-cursorNotAllow u-textLight u-pointerEventsNone' : 'u-cursorPointer',
        fileName && 'is-selected',
        isValid && 'is-valid',
        isInvalid && 'is-invalid',
        isBorderNone && 'is-borderNone',
        isBackgroundReset && 'is-backgroundReset',
        className && className
      )}
    >
      <input
        className="FormInput-file u-positionAbsolute u-widthFull u-opacityNone u-marginNone u-heightFull u-paddingNone u-positionLeft"
        type="file"
        ref={ref}
        {...props}
        id={id || controlId}
      />
      <label
        className={classNames(
          'FormInput-label u-marginBottomNone u-heightFull u-widthFull',
          disabledOri ? 'u-cursorNotAllow' : 'u-cursorPointer',
        )}
        data-browse={browseText}
        htmlFor={idSet}
      >
        {(placeholder && !fileName) && (
        <span className="u-textLight">{placeholder}</span>
        )}
        {fileName}
      </label>

    </Component>
  );
}

FormFile.displayName = 'FormFile';
FormFile.defaultProps = defaultProps;
FormFile.propTypes = propTypes;
export default forwardRef(FormFile);
