import React, { forwardRef } from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types';
import SafeAnchor from 'utils/SafeAnchor';

const propTypes = {

  /**
   * `href` attribute for the inner `a` element
   * @default #
   */
  href: PropTypes.string,
  /**
   * Non-render the SafeAnchor
   */
  noHref: PropTypes.bool,
  /**
   * `title` attribute for the inner `a` element
   */
  title: PropTypes.node,
  /**
   * `target` attribute for the inner `a` element
   */
  target: PropTypes.string,

};
const defaultProps = {

};

function BreadcrumbItem ({ className, children, noHref, position, schema, isLast, ...props }, ref) {
  const Component = isLast || noHref ? 'span' : SafeAnchor;
  return (
    <li
      ref={ref}
      className={classNames(
        'Breadcrumb-item',
        'u-inlineBlock'
      )}
    >
      {schema ? (
        <React.Fragment>
          <SafeAnchor
            {...props}
            className={classNames(
              !isLast && 'u-textGray',
              (!isLast && !noHref) && 'hover:u-textLink'
            )}
            itemProp="item"
          >
            <span itemProp="name">{children}</span>
          </SafeAnchor>
          <meta itemProp="position" content={position} />
        </React.Fragment>
      ) : (
        <Component
          {...props}
          className={classNames(
            !isLast && 'u-textGray',
            (!isLast && !noHref) && 'hover:u-textLink'
          )}
        >
          {children}
        </Component>
      )}
    </li>
  );
}

BreadcrumbItem.displayName = 'BreadcrumbItem';
BreadcrumbItem.defaultProps = defaultProps;
BreadcrumbItem.propTypes = propTypes;
export default forwardRef(BreadcrumbItem);
