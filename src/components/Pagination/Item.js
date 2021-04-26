import React, { forwardRef } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import SafeAnchor from 'utils/SafeAnchor';
import Button from 'components/Button';
import Icon from 'components/Icon';

const propTypes = {
  /** Styles PageItem as active, and renders a `<span>` instead of an `<a>`. */
  active: PropTypes.bool,
  /** Disables the PageItem */
  disabled: PropTypes.bool,
};

const defaultProps = {
  active: false,
  disabled: false,
};


function PaginationItem({ className, active, safeItem, disabled, children, displayName, ...props }, ref) {
  let variant = active ? 'primary' : 'secondary';
  if (safeItem) {
    variant = 'default';
  }
  const Component = active || disabled || safeItem ? 'span' : SafeAnchor;
  return (
    <li
      className={classNames(
        'Pagination-item',
        active && 'is-active',
        'u-inlineBlock u-marginHorizontalTiny u-marginBottomExtraSmall',
        className && className
      )}
    >
      <Component ref={ref} {...props} className="u-block hover:u-textDecorationNone">
        <Button
          as="div"
          className="u-fontMedium"
          disabled={disabled}
          variant={variant}
          onlyIcon={safeItem || displayName}
        >
          {children}
        </Button>
      </Component>
    </li>
  );
}

function createButton(name, defaultValue, safeItem, className) {
  return class extends React.Component {
    static displayName = name;

    render() {
      const { children, ...props } = this.props;
      delete props.active;
      return (
        <PaginationItem {...props} safeItem={safeItem} displayName className={className}>
          {children || defaultValue}
        </PaginationItem>
      );
    }
  };
}
export const PaginationPrev = createButton('Prev', <Button.Icon><Icon className="u-textLight" name="arrowBack" size="extraSmall" /></Button.Icon>, false, 'Pagination-prev');
export const PaginationEllipsis = createButton('Ellipsis', <Button.Icon><Icon name="more" className="u-textLight" size="extraSmall" /></Button.Icon>, true);
export const PaginationNext = createButton('Next', <Button.Icon><Icon name="arrowForward" className="u-textLight" size="extraSmall" /></Button.Icon>, false, 'Pagination-next');


PaginationItem.displayName = 'PaginationItem';
PaginationItem.propTypes = propTypes;
PaginationItem.defaultProps = defaultProps;

export default forwardRef(PaginationItem);
