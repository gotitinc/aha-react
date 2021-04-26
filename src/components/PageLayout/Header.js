import React, { forwardRef, useContext } from 'react';
import classNames from 'classnames';
import { PageLayoutContext } from 'utils/Context';


function PageLayoutHeader ({ className, children, ...props }, ref) {
  const { headerProps } = useContext(PageLayoutContext);
  const mergeProps = {
    ref,
    ...headerProps,
    ...props,
  };
  return (
    <div
      {...mergeProps}
      className={classNames(
        'PageLayout-header',
        className && className,
        headerProps.className && headerProps.className
      )}
    >
      {children}
    </div>
  );
}

PageLayoutHeader.displayName = 'PageLayout.Header';
PageLayoutHeader.propTypes = {};
PageLayoutHeader.defaultProps = {};
export default forwardRef(PageLayoutHeader);
