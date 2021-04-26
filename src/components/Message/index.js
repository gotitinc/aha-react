import React, { useState, useMemo, forwardRef } from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types';
import { useUncontrolled } from 'uncontrollable';
import useEventCallback from '@restart/hooks/useEventCallback';
import { elementType } from 'prop-types-extra';
import { MessageContext } from 'utils/Context';
import messagesVariants from 'constants/messages';
import createBlock from 'utils/createBlock';
import Fade from 'utils/Fade';
import Icon from 'components/Icon';
import MessageTitle from './Title';

const propTypes = {
  /** The Message visual type */
  type: PropTypes.oneOf([
    'form',
    'system',
  ]),
  /**
   * The Message visual variant
   */
  variant: PropTypes.oneOf([
    'information',
    'positive',
    'warning',
    'negative',
  ]),
  /**
   * Renders a properly aligned dismiss button, as well as adding extra horizontal padding to the Message.
   * @default false
   * */
  dismissible: PropTypes.bool,
  /**
   * Controls the visual state of the Message.
   * @default true
   * @controllable onClose
   * */
  show: PropTypes.bool,
  /**
   * Callback fired when message is closed.
  * @controllable show
   * */
  onClose: PropTypes.func,
  /** A `react-transition-group` Transition component used to animate the Message on dismissal. */
  transition: elementType,
};

const defaultProps = {
  show: true,
  transition: Fade,
  type: 'form',
  variant: 'information',
};

const controllables = {
  show: 'onClose',
};
function Message(uncontrolledProps, ref) {
  const {
    className,
    variant,
    type,
    children,
    dismissible,
    onClose,
    show,
    transition: Transition,
    ...props } = useUncontrolled(uncontrolledProps, controllables);
  const [dismissButtonHover, setDismissButtonHover] = useState(false);
  const variantOri = messagesVariants.find(item => item.type === type && item.id === variant);
  const context = useMemo(() => ({ variant, type }), [variant, type]);
  const handleClose = useEventCallback((e) => {
    onClose(false, e);
  });
  const alert = (
    <div
      ref={ref}
      role="alert"
      {...(Transition ? props : undefined)}
      {...props}
      className={classNames(
        'Message u-flex u-text200',
        (type !== 'system') && 'u-roundedMedium u-border',
        variantOri.className,
        variantOri.textClassName,
        className && className
      )}
    >
      {children}
      {dismissible && (
        <div
          className="Message-button u-marginRightSmall u-marginTopSmall"
        >
          <Icon
            name="close"
            size="tiny"
            onMouseEnter={() => setDismissButtonHover(dismissButtonHover => !dismissButtonHover)}
            onMouseLeave={() => setDismissButtonHover(dismissButtonHover => !dismissButtonHover)}
            onClick={handleClose}
            className={classNames(
              'u-cursorPointer',
              dismissButtonHover ? 'u-opacityReset' : 'u-opacityHalf',
              variantOri.textClassName
            )}
          />
        </div>
      )}
    </div>
  );
  if (!Transition) return show ? alert : null;

  return (
    <MessageContext.Provider value={context}>
      <Transition unmountOnExit ref={ref} {...props} in={show}>
        {alert}
      </Transition>
    </MessageContext.Provider>
  );
}
const MessageContent = createBlock('Message-content');
const MessageContainer = createBlock('Message-container u-paddingSmall u-flexGrow1');
Message.Title = MessageTitle;
Message.Content = MessageContent;
Message.Container = MessageContainer;
Message.displayName = 'Message';
Message.defaultProps = defaultProps;
Message.propTypes = propTypes;
export default forwardRef(Message);
