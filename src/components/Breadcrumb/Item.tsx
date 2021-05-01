import React from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types';
import SafeAnchor from '../../utils/SafeAnchor';
import { PrefixPropsWithChildren, PrefixRefForwardingComponent } from '../../utils/helpers';

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

export interface BreadcrumbItemProps extends PrefixPropsWithChildren {
  noHref?: string;
  schema?: Boolean;
  position?: string;
  isLast?: Boolean;
}

export type BreadcrumbItemType = PrefixRefForwardingComponent<React.ElementType, BreadcrumbItemProps>;

const BreadcrumbItem : BreadcrumbItemType = React.forwardRef(({ className, children, noHref, position, schema, isLast, as: Component = 'li', ...props }: BreadcrumbItemProps, ref) => {
  const LinkComponent = isLast || noHref ? 'span' : SafeAnchor;
  return (
    <Component
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
        <LinkComponent
          {...props}
          className={classNames(
            !isLast && 'u-textGray',
            (!isLast && !noHref) && 'hover:u-textLink'
          )}
        >
          {children}
        </LinkComponent>
      )}
    </Component>
  );
});

BreadcrumbItem.displayName = 'BreadcrumbItem';
BreadcrumbItem.defaultProps = defaultProps;
BreadcrumbItem.propTypes = propTypes;
export default BreadcrumbItem;
