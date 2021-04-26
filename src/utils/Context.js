import React from 'react';

export const AccordionContext = React.createContext({
  onSelect() {},
  eventKeyControl: null,
});
export const BubbleChatContext = React.createContext(null);
export const CardContext = React.createContext(null);
export const DropdownContext = React.createContext({
  containerRef() {},
  toggleRef() {},
  onToggle() {},
  show: null,
  drop: null,
  alignRight: null,
});

export const FormContext = React.createContext({
  controlId: undefined,
  sizeControl: undefined,
  requiredControl: undefined,
  disabledControl: undefined,
});

export const MessageContext = React.createContext({
  variant: undefined,
  type: undefined,
});

export const ModalContext = React.createContext({
  onHide() {},
});

export const PageLayoutContext = React.createContext();

export const SidebarMenuContext = React.createContext();

export const TabContext = React.createContext();

export const TopMenuContext = React.createContext({
  current: null,
});

export const HeaderMobileContext = React.createContext({
  onToggle() {},
  showMenu: null,
});
