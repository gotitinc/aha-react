// Type definitions for @ahaui/react v2.0.4
// Project: https://github.com/gotitinc/aha-react
// Definitions by: KyleTV <https://github.com/tinhvqbk>
// TypeScript Version: 3.3

import { TextareaAutosizeProps } from 'react-textarea-autosize';

declare module '@ahaui/react' {
  import React from 'react';
  import { any, ReactNodeLike } from 'prop-types';
  import { CalendarProps as ReactCalendarProps } from 'react-calendar';
  import { DatePickerProps as ReactDatePickerProps } from 'react-date-picker';
  import { Settings as SlickSettingsProps } from 'react-slick';
  import { PopperOptions, Placement as PopperPlacement } from 'popper.js';
  import { toast as toastBase } from 'react-toastify';
  import { TransitionActions } from 'react-transition-group/Transition';
  export interface BasicProps {
    className?: string;
    style?: React.CSSProperties;
    children?: React.ReactNode;
  }
  export interface BasicWithAsProps extends BasicProps {
    as?: React.ElementType;
  }
  export type TriggerType = 'click' | 'hover' | 'focus';
  export type InputSize = 'small' | 'medium' | 'large';
  export type IconType =
    | 'rotate'
    | 'gitBranch'
    | 'options'
    | 'apps'
    | 'fastForward'
    | 'mail'
    | 'trash'
    | 'helpCircle'
    | 'helpCircleOutline'
    | 'cloudUpload'
    | 'location'
    | 'send'
    | 'share'
    | 'unlock'
    | 'volumeHigh'
    | 'volumeOff'
    | 'zoomIn'
    | 'zoomOut'
    | 'expand'
    | 'minus'
    | 'plus'
    | 'column'
    | 'data'
    | 'table'
    | 'cart'
    | 'store'
    | 'workflow'
    | 'bill'
    | 'bag'
    | 'funnel'
    | 'playCircle'
    | 'pin'
    | 'card'
    | 'chatExtension'
    | 'chatBubbles'
    | 'bubbles'
    | 'code'
    | 'create'
    | 'earth'
    | 'flag'
    | 'journal'
    | 'levelBeginner'
    | 'levelImmediate'
    | 'levelAdvanced'
    | 'list'
    | 'lock'
    | 'moneyBag'
    | 'multipleSkills'
    | 'power'
    | 'refresh'
    | 'replace'
    | 'search'
    | 'setting'
    | 'speedometer'
    | 'starOutline'
    | 'starHalf'
    | 'star'
    | 'thumbsDown'
    | 'thumbsUp'
    | 'alert'
    | 'informationCircle'
    | 'informationCircleOutline'
    | 'notification'
    | 'warning'
    | 'attach'
    | 'attachSpreadsheet'
    | 'attachImage'
    | 'attachPpt'
    | 'attachTxt'
    | 'attachSql'
    | 'attachUndefined'
    | 'attachCode'
    | 'cloud'
    | 'cloudDownload'
    | 'copy'
    | 'document'
    | 'images'
    | 'videoCam'
    | 'arrowBack'
    | 'arrowDown'
    | 'arrowDropdownCircle'
    | 'arrowDropdown'
    | 'arrowDropleftCircle'
    | 'arrowDropleft'
    | 'arrowDroprightCircle'
    | 'arrowDropright'
    | 'arrowDropupCircle'
    | 'arrowDropup'
    | 'arrowForward'
    | 'arrowRoundBack'
    | 'arrowRoundDown'
    | 'arrowRoundForward'
    | 'arrowRoundUp'
    | 'arrowUp'
    | 'checkmark'
    | 'checkmarkCircle'
    | 'checkmarkCircleOutline'
    | 'close'
    | 'closeCircle'
    | 'closeCircleOutline'
    | 'menu'
    | 'more'
    | 'facebook'
    | 'google'
    | 'instagram'
    | 'linkedin'
    | 'twitter'
    | 'youtube'
    | 'hourglass'
    | 'time'
    | 'timer'
    | 'contact'
    | 'people'
    | 'mic'
    | 'calendar'
    | 'micOff'
    | 'videoCamOff'
    | 'camera'
    | 'airplane'
    | 'screen'
    | 'screenOff'
    | 'map'
    | 'raiseHand'
    | 'editOff'
    | 'edit'
    | 'cursor'
    | 'eraser'
    | 'font'
    | 'colorPalette'
    | 'save'
    | 'flash'
    | 'aim'
    | 'fileTrayFull'
    | 'fileImport'
    | 'fileExport'
    | 'objects'
    | 'reply'
    | 'bot'
    | 'shapes'
    | 'return'
    | 'umbrella'
    | 'game'
    | 'tagCloud'
    | 'one'
    | 'two'
    | 'three'
    | 'four'
    | 'five'
    | 'six'
    | 'seven'
    | 'eight'
    | 'nine'
    | 'ten';
  export type FuncType = (...args: any[]) => any;
  export type EventHandler = React.EventHandler<React.SyntheticEvent>;
  export interface OptionType {
    name: string;
    id: string | number;
  }

  export interface AccordionToggleProps extends BasicProps {
    eventKey: string;
    onClick: (event: React.MouseEvent<HTMLButtonElement>) => void;
    disabled?: boolean;
  }

  export interface AccordionCollapseProps extends BasicProps {
    eventKey: string;
  }

  export function useAccordionToggle(
    eventKey: string,
    onClick?: EventHandler,
  ): EventHandler;

  export interface AccordionProps extends BasicProps {
    activeKey: string;
  }
  export const Accordion: React.FC<AccordionProps> & {
    Toggle: React.FC<AccordionToggleProps>;
    Collapse: React.FC<AccordionCollapseProps>;
  };

  export interface AskBoxProps extends BasicProps {}
  export const AskBox: React.FC<AskBoxProps> & {
    Title: React.FC<BasicProps>;
    Header: React.FC<BasicProps>;
    Body: React.FC<BasicProps>;
    Footer: React.FC<BasicProps>;
    Note: React.FC<BasicProps>;
  };

  export interface AvatarProps extends BasicWithAsProps {
    name: string;
    size:
      | 'extraSmall'
      | 'small'
      | 'medium'
      | 'large'
      | 'extraLarge'
      | 'extraLargePlus'
      | 'huge';
    src?: string;
    text?: string;
    alt?: string;
    width?: number;
    height?: number;
  }

  export const Avatar: React.FC<AvatarProps>;

  export interface BadgeProps extends BasicWithAsProps {
    variant?:
      | 'default'
      | 'white'
      | 'black'
      | 'primary'
      | 'primary_subtle'
      | 'warning'
      | 'warning_subtle'
      | 'positive'
      | 'positive_subtle'
      | 'information'
      | 'information_subtle'
      | 'negative'
      | 'negative_subtle';
    textClassName?: string;
  }
  export const Badge: React.FC<BadgeProps>;
  export interface BreadcrumbItemProps extends BasicProps {
    href?: string;
    noHref?: boolean;
    title?: string;
    target?: string;
  }

  export interface BreadcrumbProps extends BasicProps {
    schema?: boolean;
  }
  export const Breadcrumb: React.FC<BreadcrumbProps> & {
    Item: React.FC<BreadcrumbItemProps>;
  };

  export interface BubbleChatImageProps extends BasicProps {}

  export interface BubbleChatProps extends BasicProps {
    isTyping?: boolean;
    text?: string | React.ReactNode;
    type?: 'inbound' | 'outbound' | 'system';
    variant?:
      | 'light'
      | 'primary'
      | 'primaryLight'
      | 'dark'
      | 'transparentDark'
      | 'transparentLight';
    avatar?: string | FuncType;
    time?: string | FuncType;
    options?: OptionType[];
    currentOption?: string | number;
    onSelectOption?: (_: string | number) => void;
    disabledOption?: boolean;
    onClickText?: () => void;
    textClassName?: string;
    actionBar?: React.ReactNode;
    actionBarClassName?: string;
  }
  export const BubbleChat: React.FC<BubbleChatProps> & {
    Image: React.FC<BubbleChatImageProps>;
  };

  export interface ButtonGroupProps extends BasicWithAsProps {
    sizeControl?: InputSize;
    disabledControl?: boolean;
  }
  export const ButtonGroup: React.FC<ButtonGroupProps>;
  export interface ButtonProps extends BasicWithAsProps {
    variant?:
      | 'primary'
      | 'primary_outline'
      | 'secondary'
      | 'accent'
      | 'accent_outline'
      | 'positive'
      | 'positive_outline'
      | 'negative'
      | 'negative_outline'
      | 'white'
      | 'white_outline'
      | 'link';
    size?: InputSize;
    width?: 'auto' | 'full' | 'min';
    disabled?: boolean;
    nonUppercase?: boolean;
    onlyIcon?: boolean;
    textClassName?: string;
  }
  export const Button: React.FC<ButtonProps> & {
    Icon: React.FC<BasicProps>;
    Label: React.FC<BasicProps>;
    Group: typeof ButtonGroup;
  };

  export interface CalendarProps extends ReactCalendarProps {
    className?: string;
  }
  export const Calendar: React.FC<CalendarProps>;

  export interface DatePickerProps extends ReactDatePickerProps {
    className?: string;
    noClearIcon?: boolean;
    size?: Pick<IconProps, 'size'>;
    version?: 1 | 2;
    calendarClassName?: string | string[];
  }
  export const DatePicker: React.FC<DatePickerProps>;

  export interface DateRangePickerProps {
    className?: string | string[];
    noClearIcon?: boolean;
    size?: Pick<IconProps, 'size'>;
    autoFocus?: boolean;
    calendarAriaLabel?: string;
    calendarClassName?: string | string[];
    clearAriaLabel?: string;
    closeCalendar?: boolean;
    dayAriaLabel?: string;
    dayPlaceholder?: string;
    disabled?: boolean;
    disableCalendar?: boolean;
    format?: string;
    isOpen?: boolean;
    locale?: string;
    maxDate?: Pick<CalendarProps, 'maxDate'>;
    minDate?: Pick<CalendarProps, 'minDate'>;
    maxDetail?: Pick<CalendarProps, 'maxDetail'>;
    minDetail?: Pick<CalendarProps, 'minDetail'>;
    monthAriaLabel?: string;
    monthPlaceholder?: string;
    name?: string;
    nativeInputAriaLabel?: string;
    onCalendarClose?: () => void;
    onCalendarOpen?: () => void;
    onChange?: Pick<CalendarProps, 'onChange'>;
    openCalendarOnFocus?: boolean;
    rangeDivider?: string;
    required?: boolean;
    showLeadingZeros?: boolean;
    value?: Pick<CalendarProps, 'value'>;
    yearAriaLabel?: string;
    yearPlaceholder?: string;
  }
  export const DateRangePicker: React.FC<DateRangePickerProps>;

  export interface TimePickerProps extends BasicProps {
    noClearIcon?: boolean;
    size?: InputSize;
  }
  export const TimePicker: React.FC<TimePickerProps>;

  export interface CardProps extends BasicWithAsProps {
    body?: boolean;
    size?: InputSize;
  }
  export const Card: React.FC<CardProps> & {
    Header: React.FC<BasicWithAsProps>;
    Title: React.FC<BasicWithAsProps>;
    Body: React.FC<BasicWithAsProps>;
  };

  export interface CarouselProps extends BasicProps {
    dotInside?: boolean;
    settings?: SlickSettingsProps;
  }
  export const Carousel: React.FC<CarouselProps> & {
    Item: React.FC<BasicWithAsProps>;
  };

  export interface ChatBoxListProps extends BasicProps {
    innerClassName?: string;
  }
  export interface ChatBoxProps extends BasicProps {}
  export const ChatBox: React.FC<ChatBoxProps> & {
    List: React.FC<ChatBoxListProps>;
    Attachment: React.FC<BasicProps>;
    Info: React.FC<BasicProps>;
    Context: React.FC<BasicProps>;
    Notice: React.FC<BasicProps>;
  };

  export interface CollapseProps extends BasicProps {
    eventKey?: string;
    timeout?: number;
    dimension?: 'height' | 'width' | FuncType;
    getDimensionValue?: (dimension: Pick<CollapseProps,'dimension'>, elem: React.ReactElement) => number;
  }
  export const Collapse: React.FC<CollapseProps>;

  export interface ComposerInputProps extends TextareaAutosizeProps {
    className?: string;
  }
  export interface ComposerProps extends BasicProps {
    inputProps?: ComposerInputProps;
    attachButtonProps?: object;
    sendButtonProps?: object;
    sendButtonActive?: boolean;
    disabledSendButton?: boolean;
    disabledAttachButton?: boolean;
    tooltipAttachButton?: string | FuncType;
    tooltipSendButton?: string | FuncType;
    sendButtonIcon?: IconType | FuncType;
  }
  export const Composer: React.FC<ComposerProps>;

  export interface CounterProps extends BasicProps {
    variant?:
      | 'primary'
      | 'secondary'
      | 'accent'
      | 'information'
      | 'warning'
      | 'positive'
      | 'negative'
      | 'white';

    label?: string | FuncType;
    number?: string | FuncType;
    iconLeft?: IconType | FuncType;
  }
  export const Counter: React.FC<CounterProps>;

  export interface DropdownButtonProps extends BasicWithAsProps {
    caret?: Pick<IconProps, 'size'>;
  }
  export interface DropdownContainerProps extends BasicWithAsProps {
    popperConfig?: PopperOptions;
    additionalStyles?: React.CSSProperties;
    flip?: boolean;
    shouldUsePopper?: boolean;
    rootCloseEvent?: string;
  }
  export interface DropdownToggleProps extends BasicProps {
    disabled?: boolean;
  }
  export interface DropdownProps extends BasicWithAsProps {
    drop?: 'up' | 'down' | 'left' | 'right';
    flip?: boolean;
    show?: boolean;
    alignRight?: boolean;
    onToggle?: () => void;
  }
  export const Dropdown: React.FC<DropdownProps> & {
    Item: React.FC<BasicProps>;
    Container: React.FC<DropdownContainerProps>;
    Button: React.FC<DropdownButtonProps>;
    Toggle: React.FC<DropdownToggleProps>;
  };
  export function useToggle(): [
    {
      ref: () => void;
      'aria-haspopup': boolean;
      'aria-expanded': boolean;
    },
    {
      show: boolean;
      toggle: () => void;
    },
  ];

  export interface EmptyStateProps extends BasicProps {
    name?: string;
    src?: string;
    alt?: string;
    width?: number;
    height?: number;
  }
  export const EmptyState: React.FC<EmptyStateProps> & {
    Heading: React.FC<BasicWithAsProps>;
    Description: React.FC<BasicWithAsProps>;
  };

  export interface FadeProps extends BasicProps {
    in?: boolean;
    mountOnEnter?: boolean;
    unmountOnExit?: boolean;
    appear?: boolean;
    timeout?: number;
    onEnter?: Pick<TransitionActions, 'onEnter'>;
    onEntering?: Pick<TransitionActions, 'onEntering'>;
    onEntered?: Pick<TransitionActions, 'onEntered'>;
    onExit?: Pick<TransitionActions, 'onExit'>;
    onExiting?: Pick<TransitionActions, 'onExiting'>;
    onExited?: Pick<TransitionActions, 'onExited'>;
  }
  export const Fade: React.FC<FadeProps>;

  export interface FileAttachmentProps extends BasicProps {
    fileType?:
      | 'undefined'
      | 'text'
      | 'image'
      | 'code'
      | 'spreadsheet'
      | 'query'
      | 'powerpoint';
    fileTypeLabel?: string | FuncType;
    show?: boolean;
    onClose?: () => void;
    closeButton?: boolean;
    actionLeft?: FuncType;
    actionRight?: FuncType;
    fileName?: string;
  }
  export const FileAttachment: React.FC<FileAttachmentProps>;

  export interface FormCheckProps extends BasicWithAsProps {
    type?: 'checkbox' | 'radio' | 'checkbox_button';
    id?: string;
    label?: string | FuncType;
    inline?: boolean;
    isValid?: boolean;
    isInvalid?: boolean;
    sizeInput: InputSize;
  }
  export interface FormFeedbackProps extends BasicWithAsProps {
    type: 'valid' | 'invalid';
    visible?: boolean;
  }
  export interface FormFileProps extends BasicWithAsProps {
    id?: string;
    sizeInput?: InputSize;
    fileName?: string;
    browseText?: string;
    isValid?: boolean;
    isInvalid?: boolean;
    isBorderNone?: boolean;
    isBackgroundReset?: boolean;
    placeholder?: string;
  }
  export interface FormGroupProps extends BasicWithAsProps {
    controlId?: string;
    sizeControl?: InputSize;
    requiredControl?: boolean;
  }
  export interface FormInputProps extends BasicWithAsProps {
    type?: string;
    value?: string | number;
    id?: string;
    disabled?: boolean;
    required?: boolean;
    readOnly?: boolean;
    sizeInput?: InputSize;
    isValid?: boolean;
    isInvalid?: boolean;
    isBorderNone?: boolean;
    isBackgroundReset?: boolean;
  }
  export interface FormLabelProps extends BasicProps {
    sizeLabel?: InputSize;
    required?: boolean;
    htmlFor?: string;
  }
  export interface FormSelectProps extends BasicProps {
    value?: string | number;
    id?: string;
    disabled?: boolean;
    required?: boolean;
    sizeInput?: InputSize;
    isValid?: boolean;
    isInvalid?: boolean;
    isBorderNone?: boolean;
    isBackgroundReset?: boolean;
  }
  export const Form: React.FC<BasicProps> & {
    Check: React.FC<FormCheckProps>;
    Feedback: React.FC<FormFeedbackProps>;
    File: React.FC<FormFileProps>;
    Group: React.FC<FormGroupProps>;
    Input: React.FC<FormInputProps>;
    Label: React.FC<FormLabelProps>;
    InputGroup: React.FC<BasicProps>;
    Select: React.FC<FormSelectProps>;
  };
  export interface HeaderProps extends BasicWithAsProps {
    show?: boolean;
    innerClassName?: string;
    fullWidth?: boolean;
  }

  export const Header: React.FC<HeaderProps> & {
    Left: React.FC<BasicWithAsProps>;
    AbsoluteCenter: React.FC<BasicWithAsProps>;
    Right: React.FC<BasicWithAsProps>;
    Main: React.FC<BasicWithAsProps>;
    Brand: React.FC<BasicWithAsProps>;
  };

  export interface HeaderMobileProps extends BasicProps {
    show?: boolean;
    showMenu?: boolean;
    hasDropContext?: boolean;
    onToggle?: () => void;
  }
  export const HeaderMobile: React.FC<HeaderMobileProps> & {
    Main: React.FC<BasicProps>;
    Brand: React.FC<BasicProps>;
    AfterContext: React.FC<BasicProps>;
    Context: React.FC<BasicProps>;
    DropContext: React.FC<BasicProps>;
  };

  export interface IconProps {
    name?: IconType;
    size?:
      | 'tiny'
      | 'extraSmall'
      | 'small'
      | 'medium'
      | 'large'
      | 'extraLarge'
      | 'extraLargePlus'
      | 'huge';

    path?: string;
    style?: React.CSSProperties;
  }
  export const Icon: React.FC<IconProps>;

  export interface LoaderProps extends BasicProps {
    size?: InputSize;
    duration?: number;
  }
  export const Loader: React.FC<LoaderProps>;

  export interface LogoProps extends BasicProps {
    name?: string;
    src?: string;
    alt?: string;
    width?: number;
    height?: number;
  }
  export const Logo: React.FC<LogoProps>;

  export interface MediaProps extends BasicWithAsProps {
    aspectRatio?: 'square' | 'classic' | 'wide' | 'cinema';
    src?: string;
    width?: number;
    height?: number;
  }
  export const Media: React.FC<MediaProps>;

  export interface MessageProps extends BasicProps {
    type?: 'form' | 'system';
    variant?: 'information' | 'positive' | 'warning' | 'negative';
    dismissible?: boolean;
    show?: boolean;
    onClose?: () => void;
  }
  export const Message: React.FC<MessageProps> & {
    Content: React.FC<BasicWithAsProps>;
    Container: React.FC<BasicWithAsProps>;
    Title: React.FC<BasicWithAsProps>;
  };

  export interface ModalHeaderProps extends BasicProps {
    onHide?: () => void;
    closeButton?: boolean;
  }
  export interface ModalProps extends BasicProps {
    size?: 'small' | 'medium' | 'large' | 'extraLarge';
    relative?: boolean;
    centered?: boolean;
    show?: boolean;
    onHide?: () => void;
  }
  export const Modal: React.FC<ModalProps> & {
    Title: React.FC<ModalHeaderProps>;
    Body: React.FC<BasicProps>;
    Footer: React.FC<BasicProps>;
    Header: React.FC<ModalHeaderProps>;
    Inside: React.FC<BasicProps>;
  };

  export interface MultiStepsItemProps extends BasicProps {
    isLast?: boolean;
    isCompleted?: boolean;
    isActive?: boolean;
    title?: string;
    disabled?: boolean;
  }
  export interface MultiStepsProps extends BasicProps {
    current?: number;
    currentLabel?: string;
    onChange?: (current: number) => void;
    direction?: 'horizontal' | 'vertical';
    variant?:
      | 'primary'
      | 'accent'
      | 'positive'
      | 'warning'
      | 'negative'
      | 'white';
  }
  export const MultiSteps: React.FC<MultiStepsProps> & {
    Item: React.FC<MultiStepsItemProps>;
  };

  interface OverlayBasicProps extends BasicProps {
    children: React.ReactNode;
    popperConfig?: PopperOptions;
    placement?: PopperPlacement;
    rootClose?: boolean;
    rootCloseEvent?: string;
    rootCloseDisabled?: boolean;
  }
  export interface OverlayTriggerProps extends OverlayBasicProps {
    trigger?: TriggerType | TriggerType[];
    delay?: number | { show: number; hide: number };
    hoverOverlay?: boolean;
    defaultShow?: boolean;
    overlay: FuncType | React.ReactNode;
  }

  export interface OverlayProps extends OverlayBasicProps {
    show?: boolean;
    target?: React.RefObject<HTMLElement>;
    container?: HTMLElement;
    flip?: boolean;
    containerPadding?: number;
    onHide?: () => void;
  }
  export const Overlay: React.FC<OverlayProps> & {
    Trigger: React.FC<OverlayTriggerProps>;
  };

  export interface PageLayoutProps extends BasicWithAsProps {
    headerProps?: object;
    footerProps?: object;
    bodyProps?: object;
  }
  export const PageLayout: React.FC<PageLayoutProps> & {
    Header: React.FC<BasicWithAsProps>;
    Footer: React.FC<BasicWithAsProps>;
    Body: React.FC<BasicWithAsProps>;
  };

  export interface PaginationItemProps extends BasicProps {
    active?: boolean;
    disabled?: boolean;
  }
  export interface PaginationProps extends BasicProps {
    sizeControl?: InputSize;
  }
  export const Pagination: React.FC<PaginationProps> & {
    Item: React.FC<PaginationItemProps>;
  };

  export interface ProblemInfoProps extends BasicProps {
    topicLabel?: string;
    topicName?: string;
    descriptionValue?: string | FuncType;
    additionalLabel?: string;
    additionalValue?: string | FuncType;
    src?: string;
    onClickImage?: () => void;
    action?: string | FuncType;
  }
  export const ProblemInfo: React.FC<ProblemInfoProps>;

  export interface ProgressProps extends BasicProps {
    variant?: 'primary' | 'accent' | 'positive' | 'warning' | 'negative';
    now?: number;
    height?: number;
    label?: ReactNodeLike;
    labelClassName?: string;
    border?: boolean;
    striped?: boolean;
    animated?: boolean;
  }
  export const Progress: React.FC<ProgressProps>;

  export interface RatingProps extends BasicProps {
    disabled?: boolean;
    emptyIcon?: IconType;
    readOnly?: boolean;
    onChange?: (value: number) => void;
    onChangeActive?: (value: number) => void;
    getLabelText?: (value: number | string) => string;
    value?: number | any;
    max?: number;
    precision?: number;
    name?: string;
    size?: 'tiny' | 'extraSmall' | 'small' | 'medium' | 'large';
  }
  export const Rating: React.FC<RatingProps>;

  export interface SafeAnchorProps extends BasicProps {
    href?: string;
    onClick?: (event: React.MouseEvent<HTMLAnchorElement>) => void;
    onKeyDown?: (event: React.KeyboardEvent<HTMLAnchorElement>) => void;
    disabled?: boolean;
    role?: string;
    tabIndex?: number | string;
  }
  export const SafeAnchor: React.FC<SafeAnchorProps>;

  export interface SearchProps extends BasicProps {
    onClickButton?: (event: React.MouseEvent<HTMLButtonElement>) => void;
    buttonIcon?: IconType;
    sizeControl?: InputSize;
    buttonText?: string;
  }
  export const Search: React.FC<SearchProps>;

  export interface SeparatorProps extends BasicProps {
    label?: string;
    variant?:
      | 'primary'
      | 'accent'
      | 'positive'
      | 'light'
      | 'negative'
      | 'lighter'
      | 'gray';

    lineType?: 'dashed' | 'solid';
  }
  export const Separator: React.FC<SeparatorProps>;

  export interface SessionTypeProps extends BasicProps {
    label?: string | FuncType;
    leftLabel?: string;
    variant?: 'default' | 'positive' | 'accent' | 'warning';
  }
  export const SessionType: React.FC<SessionTypeProps>;

  export interface SidebarMenuItemProps extends BasicProps {
    eventKey?: string;
    disabled?: boolean;
    icon?: IconType;
    badge?: string | FuncType;
    size?: 'small' | 'medium';
  }

  export interface SidebarMenuSubMenuProps extends SidebarMenuItemProps {
    title: string;
  }
  export interface SidebarMenuProps extends BasicProps {
    size?: 'small' | 'medium';
    current?: string;
    onSelect?: (eventKey: string) => void;
  }

  export const SidebarMenu: React.FC<SidebarMenuProps> & {
    Item: React.FC<SidebarMenuItemProps>;
    SubMenu: React.FC<SidebarMenuSubMenuProps>;
    Divider: React.FC<BasicProps>;
    Header: React.FC<BasicProps>;
  };

  export interface SkeletonProps extends BasicProps {
    variant?: 'circle' | 'text';
    width?: number;
    height?: number;
    duration?: number;
  }
  export const Skeleton: React.FC<SkeletonProps>;

  interface RCSliderBaseProps {
    className?: string;
    min?: number;
    max?: number;
    marks:
      | ReactNodeLike
      | {
          number: {
            style?: React.CSSProperties;
            label?: ReactNodeLike;
          };
        };
    step?: number;
    vertical?: boolean;
    handle?: ReactNodeLike;
    included?: boolean;
    reverse?: boolean;
    disabled?: boolean;
    dots?: boolean;
    onBeforeChange?: (value: number) => void;
    onChange?: (value: number) => void;
    onAfterChange?: (value: number) => void;
    minimumTrackStyle?: React.CSSProperties;
    maximumTrackStyle?: React.CSSProperties;
    handleStyle?: React.CSSProperties;
    trackStyle?: React.CSSProperties;
    railStyle?: React.CSSProperties;
    dotStyle?: React.CSSProperties;
    activeDotStyle?: React.CSSProperties;
  }
  export interface SliderHandleProps {
    vertical?: boolean;
    reverse?: boolean;
    offset?: number;
    style?: React.CSSProperties;
    disabled?: boolean;
    min?: number;
    max?: number;
    value?: number;
    tabIndex?: number;
    ariaLabel?: string;
    ariaLabelledBy?: string;
    ariaValueTextFormatter?: (value: number) => string;
  }
  export interface SliderProps extends RCSliderBaseProps {
    variant?: 'primary' | 'accent' | 'positive' | 'warning' | 'negative';
  }
  export function createSliderWithTooltip({
    tipFormatter,
    handleStyle,
    tipProps,
  }: {
    tipFormatter?: (value: number) => string;
    handleStyle?: React.CSSProperties;
    tipProps?: object;
  });
  export interface SliderProps extends RCSliderBaseProps {
    variant?: 'primary' | 'accent' | 'positive' | 'warning' | 'negative';
    vertical?: boolean;
  }
  export const Slider: React.FC<SliderProps> & {
    Handle: React.FC<SliderHandleProps>;
    Range: React.FC<SliderProps>;
    createSliderWithTooltip: {
      tipFormatter?: (value: number) => string;
      handleStyle?: React.CSSProperties;
      tipProps?: object;
    };
  };

  export interface TabItemProps extends BasicProps {
    eventKey?: string;
    disabled?: boolean;
  }
  export interface TabProps extends BasicProps {
    current?: string;
    onSelect?: (eventKey: string) => void;
    fullWidth?: boolean;
    direction?: 'horizontal' | 'vertical';
    visual?: 'default' | 'filled';
  }
  export const Tab: React.FC<TabProps> & {
    Item: React.FC<TabItemProps>;
  };

  export interface TagProps extends BasicProps {
    variant?:
      | 'black'
      | 'white'
      | 'primary'
      | 'primary_subtle'
      | 'accent'
      | 'accent_subtle'
      | 'warning'
      | 'warning_subtle'
      | 'positive'
      | 'positive_subtle'
      | 'information'
      | 'information_subtle'
      | 'negative'
      | 'negative_subtle';
    textClassName?: string;
  }
  export const Tag: React.FC<TagProps>;

  export interface TagInputProps extends BasicProps {
    variant?:
      | 'black'
      | 'white'
      | 'primary'
      | 'primary_subtle'
      | 'warning'
      | 'warning_subtle'
      | 'positive'
      | 'positive_subtle'
      | 'negative'
      | 'negative_subtle';
    size?: InputSize;
    value: string | string[];
    onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
    onChangeInput?: (event: React.ChangeEvent<HTMLInputElement>) => void;
    addKeys?: number[];
    currentValue?: string;
    inputValue?: string;
    onlyUnique?: boolean;
    validationRegex?: RegExp;
    onValidationReject?: (value: string) => void;
    disabled?: boolean;
    maxTags?: number;
    addOnBlur?: boolean;
    addOnPaste?: boolean;
    pasteSplit?: (value: string) => string[];
    removeKeys?: number[];
    focusedClassName?: string;
    tagProps?: {
      className?: string;
      classNameRemove?: string;
    };
    inputProps: {
      className?: string;
      placeholder?: string;
    };
    tagDisplayProp?: string | string[];
    renderTag?: (props: object) => React.ReactNode;
    renderInput?: (props: object) => React.ReactNode;
    renderLayout?: (
      tagComponents: ReactNodeLike,
      inputComponent: ReactNodeLike,
    ) => React.ReactNode;
    preventSubmit?: boolean;
    focus?: () => void;
    blur?: () => void;
    accept?: () => void;
    addTag?: (value: string) => void;
    clearInput?: () => void;
  }
  export const TagInput: React.FC<TagInputProps>;

  export interface ToastContainerProps extends BasicProps {
    position?:
      | 'top-right'
      | 'top-center'
      | 'top-left'
      | 'bottom-right'
      | 'bottom-center'
      | 'bottom-left';
    autoDismiss?: boolean | number;
    dismissible?: boolean;
    hideProgressBar?: boolean;
  }
  export const ToastContainer: React.FC<ToastContainerProps>;
  export const toast: typeof toastBase;

  export interface ToggleProps extends BasicProps {
    checked?: boolean;
    disabled?: boolean;
    nonLabel?: boolean;
    textLabelOn?: string;
    textLabelOff?: string;
    ariaLabel?: string;
  }
  export const Toggle: React.FC<ToggleProps>;

  export interface TooltipProps extends BasicProps {
    id: string | number;
    noArrow?: boolean;
    placement?: PopperPlacement;
    arrowProps?: {
      style?: React.CSSProperties;
      ref: React.Ref<HTMLDivElement>;
    };
    variant?: 'white' | 'black';
    styleTooltip?: React.CSSProperties;
  }
  export const Tooltip: React.FC<TooltipProps>;

  export interface TopBannerProps extends BasicProps {
    bgImage?: ReactNodeLike;
    dismissible?: boolean;
    show?: boolean;
    onClose?: () => void;
  }
  export const TopBanner: React.FC<TopBannerProps>;

  export interface TopMenuItemProps extends BasicProps {
    eventKey?: string;
    disabled?: boolean;
    badge?: string | FuncType;
  }
  export interface TopMenuSubMenuProps extends TopMenuItemProps {
    title: string;
  }
  export interface TopMenuProps extends BasicProps {
    current?: string;
    onSelect?: (eventKey: string) => void;
  }
  export const TopMenu: React.FC<TopMenuProps> & {
    Item: React.FC<TopMenuItemProps>;
    SubMenu: React.FC<TopMenuSubMenuProps>;
  };

  interface BlockBaseProps {
    displayName?: string;
    Component?: React.ElementType;
    defaultProps?: object;
  }
  export function createBlock(prefix: string, _?: BlockBaseProps);

  interface RootCloseProps {
    disabled?: boolean;
    clickTrigger?: string;
  }

  export function useRootClose(
    ref?: React.Ref<HTMLElement>,
    onRootClose?: () => void,
    _?: RootCloseProps,
  );

  declare class AssetPlugin extends Plugin {
    constructor(param: {
      prefix: 'avatar' | 'logo' | 'emptyState';
      assets: Record<string, any>;
    });
    type: 'asset';
    prefix: 'avatar' | 'logo' | 'emptyState';
    assets: Record<string, any>;
    validateAssets(assets: Record<string, any>);
    getAsset() : undefined;
    getAsset(assetName: string) : any;
    getAsset(prefix: string, assetName: string) : any;
  }

  declare class PluginArray<T = Plugin> extends Array<T> {
    traverseCall(methodName: string, ...args: any[]): any;
  }

  declare class PluginsType {
    plugins: PluginArray;
    validatePlugin(plugin: Plugin);
    loadPlugin(plugin: Plugin);
    getPlugins();
    getPlugins(type: string);
  }

  export const Plugins: PluginsType;
}
