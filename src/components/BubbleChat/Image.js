import React, { forwardRef, useContext } from 'react';
import classNames from 'classnames';
import { BubbleChatContext } from 'utils/Context';

function BubbleChatImage ({ className, ...props }, ref) {
  const { type } = useContext(BubbleChatContext);
  return (
    <div
      ref={ref}
      className={classNames(
        'BubbleChat-image',
        'u-marginBottomTiny',
        (type === 'inbound') && 'u-textRight',
        className && className
      )}
    >
      <img {...props} className="u-roundedMedium u-border u-maxWidthFull" alt="" />
    </div>
  );
}

BubbleChatImage.displayName = 'BubbleChat.Image';
BubbleChatImage.defaultProps = {};
BubbleChatImage.propTypes = {};
export default forwardRef(BubbleChatImage);
