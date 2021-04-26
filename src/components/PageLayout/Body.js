import React, { forwardRef, useContext } from 'react';
import classNames from 'classnames';
import { PageLayoutContext } from 'utils/Context';


function PageLayoutBody ({ className, children, ...props }, ref) {
  const { bodyProps } = useContext(PageLayoutContext);
  const mergeProps = {
    ref,
    ...bodyProps,
    ...props,
  };
  return (
    <div
      {...mergeProps}
      className={classNames(
        'PageLayout-body',
        'u-flex u-flexGrow1',
        className && className,
        bodyProps.className && bodyProps.className
      )}
    >
      {children}
    </div>
  );
}

PageLayoutBody.displayName = 'PageLayoutBody';
PageLayoutBody.propTypes = {};
PageLayoutBody.defaultProps = {};
export default forwardRef(PageLayoutBody);
