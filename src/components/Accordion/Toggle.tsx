import React, { useContext, cloneElement } from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types';
import AccordionContext, { SelectableContext } from './Context';
import { PrefixPropsWithChildren,PrefixRefForwardingComponent } from '../../utils/helpers';

const propTypes = {
  /**
    * A key that corresponds to the collapse component that gets triggered
    * when this has been clicked.
    */
  eventKey: PropTypes.string.isRequired,

  /** A callback function for when this component is clicked */
  onClick: PropTypes.func,

};

type EventHandler = React.EventHandler<React.SyntheticEvent>;

export interface AccordionToggleProps extends PrefixPropsWithChildren {
    eventKey: string;
    disabled?: Boolean;
    onClick: EventHandler;
    children?: any;
  }

export type AccordionToggleType = PrefixRefForwardingComponent<'div',AccordionToggleProps>;

export function useAccordionToggle(eventKey: string, onClick: EventHandler) : EventHandler {
  const contextEventKey = useContext(AccordionContext);
  const onSelect = useContext(SelectableContext);
  return (e) => {
    const eventKeyPassed = eventKey === contextEventKey ? null : eventKey;
    if (onSelect) onSelect(eventKeyPassed, e);
    if (onClick) onClick(e);
  };
}

const AccordionToggle : AccordionToggleType = React.forwardRef(({ className, eventKey, onClick, children, disabled, ...props } : AccordionToggleProps, ref) => {
  const onAccordionClick = useAccordionToggle(eventKey, onClick);
  return cloneElement(children, {
    className: classNames(
      'Accordion-toggle',
      disabled ? ' u-pointerEventsNone u-cursorNotAllow' : 'u-cursorPointer',
      className && className
    ),
    onClick: !disabled ? onAccordionClick : null,
    ...props,
    ref,
    children,
  });
});
AccordionToggle.propTypes = propTypes;
AccordionToggle.defaultProps = {};
AccordionToggle.displayName = 'AccordionToggle';
export default AccordionToggle;
