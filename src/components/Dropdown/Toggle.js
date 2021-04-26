import { useContext, cloneElement, forwardRef } from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types';
import { DropdownContext } from 'utils/Context';

const propTypes = {
  /** Set a custom element for this component */
  as: PropTypes.elementType,

  /** Children prop should only contain a single child, and  is enforced as such */
  children: PropTypes.element.isRequired,
};
export function useToggle() {
  const { show, toggle, setToggle } = useContext(DropdownContext);
  return [
    {
      ref: setToggle,
      'aria-haspopup': true,
      'aria-expanded': !!show,
    },
    { show, toggle },
  ];
}

function DropdownToggle ({ className, children, disabled, ...props }, ref) {
  const [toggleProps, { toggle }] = useToggle();

  return cloneElement(children, {
    className: classNames(
      'Dropdown-toggle',
      disabled ? ' u-pointerEventsNone u-cursorNotAllow' : 'u-cursorPointer',
      className && className
    ),
    onClick: !disabled ? toggle : null,
    ref,
    ...props,
    ...toggleProps,
    children,
  });
}

DropdownToggle.displayName = 'DropdownToggle';
DropdownToggle.defaultProps = {};
DropdownToggle.propTypes = propTypes;
export default forwardRef(DropdownToggle);
