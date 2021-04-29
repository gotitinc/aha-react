import React from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types';
import { useUncontrolled } from 'uncontrollable';
import { PrefixProps,SelectCallback,PrefixRefForwardingComponent } from '../../utils/helpers';
import AccordionContext, { SelectableContext } from './Context';
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

export interface AccordionProps extends PrefixProps {
    activeKey?: string,
    onSelect?: SelectCallback
}

export type AccordionType = PrefixRefForwardingComponent<'div',AccordionProps> & {
    Toggle?: typeof Toggle,
    Collapse?: typeof Collapse
}

const Accordion : AccordionType = React.forwardRef(({ className, as: Component = 'div', ...props } : AccordionProps, ref) => {
  const {
    activeKey,
    onSelect,
    ...controlledProps
  } = useUncontrolled(props, {
    activeKey: 'onSelect',
  });

  return (
    <AccordionContext.Provider value={activeKey|| null}>
      <SelectableContext.Provider value={onSelect || null}>
        <Component
          ref={ref}
          {...controlledProps}
          className={classNames(
            'Accordion',
            className && className
          )}
        />
      </SelectableContext.Provider>
    </AccordionContext.Provider>
  );
});

Accordion.displayName = 'Accordion';
Accordion.defaultProps = defaultProps;
Accordion.propTypes = propTypes;
Accordion.Toggle = Toggle;
Accordion.Collapse = Collapse;
export default Accordion;
