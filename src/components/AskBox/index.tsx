import React from 'react';
import classNames from 'classnames';
import createBlock from '../../utils/createBlock';
import { PrefixProps, PrefixRefForwardingComponent } from '../../utils/helpers';

const propTypes = {

};
const defaultProps = {

};

export interface AskBoxProps extends PrefixProps {};

export type AskBoxType = PrefixRefForwardingComponent<'div', AskBoxProps> & {
    Title?: typeof Title,
    Header?: typeof Header,
    Body?: typeof Body,
    Footer?: typeof Footer,
    Note?: typeof Note
}

const AskBox : AskBoxType = React.forwardRef(({ className, as: Component = 'div', ...props } : AskBoxProps, ref) => (
  <Component
    ref={ref}
    {...props}
    className={classNames(
      'AskBox',
      className && className
    )}
  />
));

const Title = createBlock('AskBox-title u-text400 lg:u-text500');
const Header = createBlock('AskBox-header u-paddingHorizontalSmall lg:u-paddingHorizontalLarge u-paddingTopSmall lg:u-paddingTopMedium u-paddingBottomSmall');
const Body = createBlock('AskBox-body u-paddingHorizontalSmall lg:u-paddingHorizontalLarge');
const Footer = createBlock('AskBox-footer u-paddingHorizontalSmall lg:u-paddingHorizontalLarge u-paddingBottomSmall lg:u-paddingBottomMedium');
const Note = createBlock('AskBox-note u-textCenter u-text200 u-textGray u-paddingTopSmall');

AskBox.Title = Title;
AskBox.Header = Header;
AskBox.Body = Body;
AskBox.Footer = Footer;
AskBox.Note = Note;
AskBox.displayName = 'AskBox';
AskBox.defaultProps = defaultProps;
AskBox.propTypes = propTypes;

export default AskBox;
