import React, { useContext } from 'react';
import classNames from 'classnames';
import BubbleChatContext from './Context';

import { PrefixProps, PrefixRefForwardingComponent } from '../../utils/helpers';

export interface BubbleChatImageProps extends PrefixProps {};

export type BubbleChatImageType = PrefixRefForwardingComponent<'div', BubbleChatImageProps> ;

const BubbleChatImage : BubbleChatImageType = React.forwardRef(({ className, as: Component = 'div', ...props }: BubbleChatImageProps, ref) => {
  const context = useContext(BubbleChatContext);
  return (
    <Component
      ref={ref}
      className={classNames(
        'BubbleChat-image',
        'u-marginBottomTiny',
        (context?.type === 'inbound') && 'u-textRight',
        className && className
      )}
    >
      <img {...props} className="u-roundedMedium u-border u-maxWidthFull" alt="" />
    </Component>
  );
});

BubbleChatImage.displayName = 'BubbleChatImage';
BubbleChatImage.defaultProps = {};
BubbleChatImage.propTypes = {};
export default BubbleChatImage;
