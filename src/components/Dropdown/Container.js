import React, { forwardRef, useContext } from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types';
import { elementType } from 'prop-types-extra';
import usePopper from 'utils/usePopper';
import useRootClose from 'utils/useRootClose';
import { DropdownContext } from 'utils/Context';


const propTypes = {
  /**
   * You can use a custom element type for this component.
   * @default div
   * */
  as: PropTypes.elementType,
  /**
   * A set of popper options and props passed directly to react-popper's Popper component.
   */
  popperConfig: PropTypes.object,
  /** A `react-transition-group` Transition component used to animate the Message on dismissal. */
  transition: elementType,
  /** Custom style  */
  additionalStyles: PropTypes.object,
};

const defaultProps = {
};

function DropdownContainer ({ additionalStyles, ...props }, ref) {
  const {
    className,
    flip,
    rootCloseEvent,
    children,
    popperConfig = {},
    as: Component = 'div',
    shouldUsePopper = true,
    transition: Transition,
  } = props;
  const context = useContext(DropdownContext);

  // eslint-disable-next-line react/destructuring-assignment
  const show = context.show == null ? props.show : context.show;
  // eslint-disable-next-line react/destructuring-assignment
  const alignRight = context.alignRight == null ? props.alignRight : context.alignRight;
  const handleClose = (e) => {
    if (!context.toggle) return;
    context.toggle(false, e);
  };
  const { drop, setContainer, containerElement, toggleElement } = context;

  let placement = alignRight ? 'bottom-end' : 'bottom-start';
  if (drop === 'up') placement = alignRight ? 'top-end' : 'top-start';
  else if (drop === 'right') placement = alignRight ? 'right-end' : 'right-start';
  else if (drop === 'left') placement = alignRight ? 'left-end' : 'left-start';
  const popper = usePopper(toggleElement, containerElement, {
    placement,
    enabled: !!(shouldUsePopper && show),
    eventsEnabled: !!show,
    modifiers: {
      flip: { enabled: !!flip },
      ...popperConfig.modifiers,
    },
  });
  const containerProps = {
    ref: setContainer,
    style: { ...popper.styles, ...additionalStyles },
    'aria-labelledby': toggleElement && toggleElement.id,
    ...props,
  };
  // eslint-disable-next-line react/destructuring-assignment
  useRootClose(context.containerElement, handleClose, {
    clickTrigger: rootCloseEvent,
    disabled: !(show),
  });
  const container = (
    <Component
      ref={ref}
      {...containerProps}
      className={classNames(
        'Dropdown-container',
        'u-zIndexDropdownContainer u-backgroundWhite u-roundedMedium u-border u-positionAbsolute u-textLeft u-positionLeft u-marginVerticalTiny',
        className && className
      )}
    >
      {children}
    </Component>
  );
  if (!Transition) return show ? container : null;
  return (
    <Transition unmountOnExit ref={ref} {...props} in={show}>
      {container}
    </Transition>
  );
}
DropdownContainer.displayName = 'DropdownContainer';
DropdownContainer.defaultProps = defaultProps;
DropdownContainer.propTypes = propTypes;
export default forwardRef(DropdownContainer);
