import React, { forwardRef } from 'react';
import classNames from 'classnames';
import createBlock from 'utils/createBlock';

const propTypes = {

};
const defaultProps = {

};

function ChatBox ({ className, ...props }, ref) {
  return (
    <div
      ref={ref}
      {...props}
      className={classNames(
        'ChatBox',
        'u-flex u-flexColumn u-positionRelative u-flexGrow1',
        className && className
      )}
    />
  );
}

function ChatBoxList ({ className, children, innerClassName, ...props }, ref) {
  return (
    <div
      ref={ref}
      {...props}
      className={classNames(
        'ChatBox-list u-positionRelative u-flexGrow1 u-flexShrink1',
        className && className
      )}
    >
      <div
        className={classNames(
          'ChatBox-listInner u-overflowVerticalAuto u-paddingExtraSmall u-positionAbsolute u-positionFull u-webkitScrollbar',
          innerClassName && innerClassName
        )}
      >
        {children}
      </div>
    </div>
  );
}

const ChatBoxContext = createBlock('ChatBox-context u-positionRelative');

function ChatBoxNotice ({ className, children, ...props }, ref) {
  return (
    <div
      ref={ref}
      {...props}
      className={classNames(
        'ChatBox-notice u-positionAbsolute u-widthFull u-positionBottom-100 u-marginBottomSmall',
        className && className
      )}
    >
      <div className="u-flex u-justifyContentCenter">
        {children}
      </div>
    </div>
  );
}

const ChatBoxInfo = createBlock('ChatBox-info');
const ChatBoxAttachment = createBlock('ChatBox-attachment u-paddingExtraSmall u-borderTop');
ChatBox.List = forwardRef(ChatBoxList);
ChatBox.Attachment = ChatBoxAttachment;
ChatBox.Info = ChatBoxInfo;
ChatBox.Context = ChatBoxContext;
ChatBox.Notice = forwardRef(ChatBoxNotice);
ChatBox.displayName = 'ChatBox';
ChatBox.defaultProps = defaultProps;
ChatBox.propTypes = propTypes;

export default forwardRef(ChatBox);
