import React, { useContext } from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types';
import { elementType } from 'prop-types-extra';
import usePopper from 'hooks/usePopper';
import useRootClose from 'hooks/useRootClose';
import DropdownContext from './Context';


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

const Container = React.forwardRef(({ additionalStyles, ...props }, ref) => {
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

  const show = context.show == null ? props.show : context.show;
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
});
Container.displayName = 'DropdownContainer';
Container.defaultProps = defaultProps;
Container.propTypes = propTypes;
export default Container;
