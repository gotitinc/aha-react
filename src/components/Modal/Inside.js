import React, { forwardRef } from 'react';
import classNames from 'classnames';

function ModalInside({ children, ...props }, ref) {
  return (
    <div className="ModalInside u-overflowHorizontalHidden u-overflowVerticalAuto u-positionRelative u-flex u-heightFull">
      <div
        ref={ref}
        {...props}
        className={classNames(
          'Modal-backDrop u-positionAbsolute u-positionFull u-backgroundBlack u-zIndex2'
        )}
      />
      {children}
    </div>
  );
}

ModalInside.defaultProps = {};
ModalInside.displayName = 'ModalInside';
ModalInside.propTypes = {};

export default forwardRef(ModalInside);
