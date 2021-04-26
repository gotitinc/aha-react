import React, { forwardRef, useMemo } from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types';
import { useUncontrolled } from 'uncontrollable';
import { AccordionContext } from 'utils/Context';
import Toggle from './Toggle';
import Collapse from './Collapse';

const propTypes = {
  /**
   * The current active key that corresponds to the currently expanded card
   *
   * @controllable onSelect
  */
  activeKey: PropTypes.string,

};

const defaultProps = {

};

function Accordion({ className, as: Component = 'div', ...props }, ref) {
  const {
    activeKey,
    onSelect,
    ...controlledProps
  } = useUncontrolled(props, {
    activeKey: 'onSelect',
  });
  const context = useMemo(() => ({ onSelect, eventKeyControl: activeKey }), [onSelect, activeKey]);
  return (
    <AccordionContext.Provider value={context}>
      <Component
        ref={ref}
        {...controlledProps}
        className={classNames(
          'Accordion',
          className && className
        )}
      />
    </AccordionContext.Provider>
  );
}

Accordion.displayName = 'Accordion';
Accordion.defaultProps = defaultProps;
Accordion.propTypes = propTypes;
Accordion.Toggle = Toggle;
Accordion.Collapse = Collapse;
export default forwardRef(Accordion);
