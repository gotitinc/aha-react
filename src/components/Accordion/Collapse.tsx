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

export interface CollapseProps extends PrefixPropsWithChildren {
    eventKey?: string
}

export type CollapseType = PrefixRefForwardingComponent<'div',CollapseProps>;

const Collapse: CollapseType = React.forwardRef(
  ({ children, eventKey, ...props } : CollapseProps, ref) => {
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
Collapse.displayName = 'AccordionCollapse';
Collapse.defaultProps = {};
Collapse.propTypes = propTypes;
export default Collapse;
