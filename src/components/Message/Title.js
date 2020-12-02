import React, { useContext } from 'react';
import classNames from 'classnames';
import Context from './Context';
import { messagesVariants } from '../../constants';

const propTypes = {
};

const defaultProps = {
};

export const Title = React.forwardRef(({ className, children, ...props }, ref) => {
  const { variant, type } = useContext(Context);
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
});

Title.displayName = 'MessagesTitle';
Title.propTypes = propTypes;
Title.defaultProps = defaultProps;
export default Title;
