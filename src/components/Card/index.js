import React, { useMemo, useContext, forwardRef } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { CardContext } from 'utils/Context';

const propTypes = {
  /**
   * When this prop is set, it creates a Card with a Card.Body inside
   * passing the children directly to it
   */
  body: PropTypes.bool,
  /**
   * Card size variants
   * */
  size: PropTypes.oneOf(['small', 'medium', 'large']),
};

const defaultProps = {
  body: false,
  size: 'medium',
};

const sizesClassName = {
  small: {
    content: 'u-paddingExtraSmall',
    title: 'u-text300',
  },
  medium: {
    content: 'u-paddingSmall',
    title: 'u-text400',
  },
  large: {
    content: 'u-paddingMedium',
    title: 'u-text600',
  },
};

function Card ({ className, body, size, children, as: Component = 'div', ...props }, ref) {
  const context = useMemo(() => ({ size }), [size]);
  return (
    <CardContext.Provider value={context}>
      <Component
        ref={ref}
        {...props}
        className={classNames(
          'Card',
          'u-backgroundWhite u-border u-roundedMedium u-marginBottomSmall',
          className && className,
        )}
      >
        {body ? <CardBody>{children}</CardBody> : children}
      </Component>
    </CardContext.Provider>
  );
}

function CardBody ({ className, as: Component = 'div', ...props }, ref) {
  const { size } = useContext(CardContext);
  return (
    <Component
      ref={ref}
      {...props}
      className={classNames(
        'Card-body',
        size && sizesClassName[size].content,
        className && className
      )}
    />
  );
}
function CardHeader ({ className, as: Component = 'div', ...props }, ref) {
  const { size } = useContext(CardContext);
  return (
    <Component
      ref={ref}
      {...props}
      className={classNames(
        'Card-header u-borderBottom u-flex u-justifyContentBetween',
        size && sizesClassName[size].content,
        className && className
      )}
    />
  );
}

function CardTitle ({ className, as: Component = 'div', ...props }, ref) {
  const { size } = useContext(CardContext);
  return (
    <Component
      ref={ref}
      {...props}
      className={classNames(
        'Card-title u-fontMedium',
        size && sizesClassName[size].title,
        className && className
      )}
    />
  );
}


Card.displayName = 'Card';
Card.propTypes = propTypes;
Card.defaultProps = defaultProps;
Card.Header = forwardRef(CardHeader);
Card.Title = forwardRef(CardTitle);
Card.Body = forwardRef(CardBody);
export default forwardRef(Card);
