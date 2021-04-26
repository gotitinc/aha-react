import React, { forwardRef, useContext } from 'react';
import classNames from 'classnames';
import { MessageContext } from 'utils/Context';
import messagesVariants from 'constants/messages';

const propTypes = {
};

const defaultProps = {
};

function MessagesTitle ({ className, children, ...props }, ref) {
  const { variant, type } = useContext(MessageContext);
  const variantOri = messagesVariants.find(item => item.type === type && item.id === variant);
  return (
    <div
      ref={ref}
      {...props}
      className={classNames(
        'Message-title',
        'u-fontMedium u-marginBottomExtraSmall',
        className && className,
        variantOri.textHeadingClassName ? variantOri.textHeadingClassName : variantOri.textClassName
      )}
    >
      {children}
    </div>
  );
}

MessagesTitle.displayName = 'MessagesTitle';
MessagesTitle.propTypes = propTypes;
MessagesTitle.defaultProps = defaultProps;
export default forwardRef(MessagesTitle);
