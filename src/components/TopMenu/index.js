import React, { forwardRef } from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types';
import { TopMenuContext } from 'utils/Context';
import TopMenuItem from './Item';
import TopMenuSubMenu from './SubMenu';

const propTypes = {
  /**
   * Set current menu item
   * @controllable onSelect
   * */
  current: PropTypes.string,
  /** Callback fired when the menu item is clicked. */
  onSelect: PropTypes.func,
};

function TopMenu({ className, children, current, onSelect, ...props }, ref) {
  const modifiedChildren = React.Children.map(children, (child, index) => {
    if (!child) {
      return null;
    }
    const path = child.props.eventKey || index;
    return React.cloneElement(
      child, ({
        level: 1,
        index,
        path: path.toString(),
      })
    );
  });
  return (
    <TopMenuContext.Provider
      value={{
        current,
        onSelect,
      }}
    >
      <div
        className={classNames(
          'TopMenu',
          'u-backgroundWhite',
          className && className
        )}
      >
        <div
          ref={ref}
          {...props}
          className={classNames(
            'TopMenu-list'
          )}
        >
          {modifiedChildren}
        </div>
      </div>
    </TopMenuContext.Provider>
  );
}

TopMenu.Item = TopMenuItem;
TopMenu.SubMenu = TopMenuSubMenu;
TopMenu.defaultProps = {};
TopMenu.displayName = 'TopMenu';
TopMenu.propTypes = propTypes;
export default forwardRef(TopMenu);
