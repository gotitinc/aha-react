import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import AccordionContext from './Context';
import CollapseBase from '../Collapse';
import { PrefixPropsWithChildren, PrefixRefForwardingComponent } from '../../utils/helpers';

const propTypes = {
  /**
   * A key that corresponds to the toggler that triggers this collapse's expand or collapse.
   */
  eventKey: PropTypes.string.isRequired,
  /** Children prop should only contain a single child, and  is enforced as such */
  children: PropTypes.element.isRequired,
};

export interface AccordionCollapseProps extends PrefixPropsWithChildren {
  eventKey?: string
}

export type AccordionCollapseType = PrefixRefForwardingComponent<'div', AccordionCollapseProps>;

const AccordionCollapse: AccordionCollapseType = React.forwardRef(
  ({ children, eventKey, ...props }: AccordionCollapseProps, ref) => {
    const contextEventKey = useContext(AccordionContext);
    return (
      <CollapseBase
        ref={ref}
        className="Accordion-collapse"
        in={contextEventKey === eventKey}
        {...props}
      >
        <div>{React.Children.only(children)}</div>
      </CollapseBase>
    );
  },
);
AccordionCollapse.displayName = 'AccordionCollapse';
AccordionCollapse.defaultProps = {};
AccordionCollapse.propTypes = propTypes;
export default AccordionCollapse;
