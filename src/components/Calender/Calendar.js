import React, { forwardRef } from 'react';
import classNames from 'classnames';
import CalendarBase from 'react-calendar/dist/entry.nostyle';

function Calendar ({ className, ...props }, ref) {
  return (
    <CalendarBase
      ref={ref}
      {...props}
      className={classNames(
        'Calendar',
        className && className
      )}
    />
  );
}

Calendar.displayName = 'Calendar';
Calendar.defaultProps = {};
Calendar.propTypes = {};

export default forwardRef(Calendar);
