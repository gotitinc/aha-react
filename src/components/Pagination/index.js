import React, { forwardRef, useMemo } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { FormContext } from 'utils/Context';
import PaginationItem, { PaginationNext, PaginationPrev, PaginationEllipsis } from './Item';

const propTypes = {
  /** PageItem size variants */
  sizeControl: PropTypes.oneOf(['small', 'medium', 'large']),
};


const defaultProps = {
  sizeControl: 'small',
};

function Pagination({ className, sizeControl, as: Component = 'ul', ...props }, ref) {
  const context = useMemo(() => ({ sizeControl }), [sizeControl]);
  return (
    <FormContext.Provider value={context}>
      <Component
        {...props}
        ref={ref}
        className={classNames(
          'Pagination',
          'u-marginNone u-paddingNone',
          className && className,
        )}
      />
    </FormContext.Provider>
  );
}


Pagination.Prev = PaginationPrev;
Pagination.Next = PaginationNext;
Pagination.Ellipsis = PaginationEllipsis;
Pagination.Item = PaginationItem;
Pagination.displayName = 'Pagination';
Pagination.propTypes = propTypes;
Pagination.defaultProps = defaultProps;
export default forwardRef(Pagination);
