import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import BreadcrumbItem from './Item';
import { PrefixPropsWithChildren, PrefixRefForwardingComponent } from '../../utils/helpers';

const propTypes = {
  /** Enable Structured Data `https://schema.org/BreadcrumbList` */
  schema: PropTypes.bool,
};

const defaultProps = {
  schema: false,
};

export interface BreadcrumbProps extends PrefixPropsWithChildren {
    schema?: Boolean;
}

export type BreadcrumbType = PrefixRefForwardingComponent<'ul', BreadcrumbProps> & {
    Item?: typeof BreadcrumbItem
}
const Breadcrumb : BreadcrumbType = React.forwardRef(({ className, schema, children, as: Component = 'ul', ...props }: BreadcrumbProps, ref) => {
  let schemasList;
  let schemasItem;
  if (schema) {
    schemasList = {
      itemScope: true,
      itemType: 'http://schema.org/BreadcrumbList',
    };
    schemasItem = {
      itemScope: true,
      itemProp: 'itemListElement',
      itemType: 'http://schema.org/ListItem',
    };
  }
  const numChildren = React.Children.count(children);
  const modifiedChildren = React.Children.map(children, (child: any, index) => {
    if (!child) {
      return null;
    }
    return React.cloneElement(
      child, ({
        ...schemasItem,
        schema,
        isLast: index === numChildren - 1,
        position: index + 1,
      })
    );
  });
  return (
    <Component
      ref={ref}
      {...props}
      {...schemasList}
      className={classNames(
        'Breadcrumb',
        'u-marginNone u-paddingNone u-text200'
      )}
    >
      {modifiedChildren}
    </Component>
  );
});

Breadcrumb.displayName = 'Breadcrumb';
Breadcrumb.defaultProps = defaultProps;
Breadcrumb.propTypes = propTypes;
Breadcrumb.Item = BreadcrumbItem;
export default Breadcrumb;
