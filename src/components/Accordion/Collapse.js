import React, { forwardRef, useContext } from 'react';
import PropTypes from 'prop-types';
import { AccordionContext } from 'utils/Context';
import CollapseBase from '../Collapse';

const propTypes = {
  /**
   * A key that corresponds to the toggler that triggers this collapse's expand or collapse.
   */
  eventKey: PropTypes.string.isRequired,
  /** Children prop should only contain a single child, and  is enforced as such */
  children: PropTypes.element.isRequired,
};

function AccordionCollapse({ children, eventKey, ...props }, ref) {
  const { eventKeyControl } = useContext(AccordionContext);
  return (
    <CollapseBase
      ref={ref}
      className="Accordion-collapse"
      in={eventKeyControl === eventKey}
      {...props}
    >
      <div>{React.Children.only(children)}</div>
    </CollapseBase>
  );
}
AccordionCollapse.displayName = 'AccordionCollapse';
AccordionCollapse.defaultProps = {};
AccordionCollapse.propTypes = propTypes;
export default forwardRef(AccordionCollapse);
