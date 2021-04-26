import React, { forwardRef, useContext } from 'react';
import classNames from 'classnames';
import { PageLayoutContext } from 'utils/Context';


function PageLayoutFooter ({ className, children, ...props }, ref) {
  const { footerProps } = useContext(PageLayoutContext);
  const mergeProps = {
    ref,
    ...footerProps,
    ...props,
  };
  return (
    <div
      {...mergeProps}
      className={classNames(
        'PageLayout-footer',
        className && className,
        footerProps.className && footerProps.className
      )}
    >

      {children}
    </div>
  );
}

PageLayoutFooter.displayName = 'PageLayoutFooter';
PageLayoutFooter.propTypes = {};
PageLayoutFooter.defaultProps = {};
export default forwardRef(PageLayoutFooter);
