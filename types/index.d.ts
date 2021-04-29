/// <reference types="react" />
declare module "utils/helpers" {
    import React from 'react';
    export type Omit<T, U> = Pick<T, Exclude<keyof T, keyof U>>;
    export type ReplaceProps<Inner extends React.ElementType, P> = Omit<React.ComponentPropsWithRef<Inner>, P> & P;
    export interface PrefixProps<As extends React.ElementType = React.ElementType> {
        className?: string;
        as?: As;
    }
    export type PrefixPropsWithChildren<As extends React.ElementType = React.ElementType> = React.PropsWithChildren<PrefixProps<As>>;
    export interface PrefixRefForwardingComponent<TInitial extends React.ElementType, P = unknown> {
        <As extends React.ElementType = TInitial>(props: React.PropsWithChildren<ReplaceProps<As, PrefixProps<As> & P>>): React.ReactElement | null;
        propTypes?: any;
        defaultProps?: Partial<P>;
        displayName?: string;
    }
    export type SelectCallback = (eventKey: string | null, e: React.SyntheticEvent<unknown>) => void;
}
declare module "components/Accordion/Context" {
    import React from 'react';
    type SelectableContextType = (key: string | null, event: any) => void;
    export const SelectableContext: React.Context<SelectableContextType | null>;
    const AccordionContext: React.Context<string | null>;
    export default AccordionContext;
}
declare module "components/Accordion/Toggle" {
    import React from 'react';
    import { PrefixPropsWithChildren, PrefixRefForwardingComponent } from "utils/helpers";
    type EventHandler = React.EventHandler<React.SyntheticEvent>;
    export interface AccordionToggleProps extends PrefixPropsWithChildren {
        eventKey: string;
        disabled?: Boolean;
        onClick: EventHandler;
        children?: any;
    }
    export type AccordionToggleType = PrefixRefForwardingComponent<'div', AccordionToggleProps>;
    export function useAccordionToggle(eventKey: string, onClick: EventHandler): EventHandler;
    const AccordionToggle: AccordionToggleType;
    export default AccordionToggle;
}
declare module "components/Accordion/Collapse" {
    import { PrefixPropsWithChildren, PrefixRefForwardingComponent } from "utils/helpers";
    export interface CollapseProps extends PrefixPropsWithChildren {
        eventKey?: string;
    }
    export type CollapseType = PrefixRefForwardingComponent<'div', CollapseProps>;
    const Collapse: CollapseType;
    export default Collapse;
}
declare module "components/Accordion/index" {
    import { PrefixProps, SelectCallback, PrefixRefForwardingComponent } from "utils/helpers";
    import Toggle from "components/Accordion/Toggle";
    import Collapse from "components/Accordion/Collapse";
    export interface AccordionProps extends PrefixProps {
        activeKey?: string;
        onSelect?: SelectCallback;
    }
    export type AccordionType = PrefixRefForwardingComponent<'div', AccordionProps> & {
        Toggle?: typeof Toggle;
        Collapse?: typeof Collapse;
    };
    const Accordion: AccordionType;
    export default Accordion;
}
declare module "index" {
    export { default as Accordion } from "components/Accordion/index";
    export { useAccordionToggle } from "components/Accordion/Toggle";
    export { default as AskBox } from './components/AskBox';
    export { default as Avatar } from './components/Avatar';
    export { default as Badge } from './components/Badge';
    export { default as Breadcrumb } from './components/Breadcrumb';
    export { default as BubbleChat } from './components/BubbleChat';
    export { default as Button } from './components/Button';
    export { default as Carousel } from './components/Carousel';
    export { default as ChatBox } from './components/ChatBox';
    export { default as Collapse } from './components/Collapse';
    export { default as Composer } from './components/Composer';
    export { default as Counter } from './components/Counter';
    export { default as Card } from './components/Card';
    export { Calendar, DatePicker, DateRangePicker, TimePicker } from './components/Calender';
    export { default as Dropdown } from './components/Dropdown';
    export { useToggle } from './components/Dropdown/Toggle';
    export { default as EmptyState } from './components/EmptyState';
    export { default as FileAttachment } from './components/FileAttachment';
    export { default as Form } from './components/Form';
    export { Header, HeaderMobile } from './components/Header';
    export { default as Icon } from './components/Icon';
    export { default as PageLayout } from './components/PageLayout';
    export { default as Loader } from './components/Loader';
    export { default as Logo } from './components/Logo';
    export { default as Media } from './components/Media';
    export { default as Message } from './components/Message';
    export { default as Modal } from './components/Modal';
    export { default as MultiSteps } from './components/MultiSteps';
    export { default as Overlay } from './components/Overlay';
    export { default as Pagination } from './components/Pagination';
    export { default as ProblemInfo } from './components/ProblemInfo';
    export { default as Progress } from './components/Progress';
    export { default as Rating } from './components/Rating';
    export { default as SearchBox } from './components/SearchBox';
    export { default as Separator } from './components/Separator';
    export { default as SessionType } from './components/SessionType';
    export { default as SidebarMenu } from './components/SidebarMenu';
    export { default as Skeleton } from './components/Skeleton';
    export { default as Slider } from './components/Slider';
    export { default as Tab } from './components/Tab';
    export { default as Tag } from './components/Tag';
    export { default as TagInput } from './components/TagInput';
    export { toast, default as ToastContainer } from './components/Toast';
    export { default as Toggle } from './components/Toggle';
    export { default as Tooltip } from './components/Tooltip';
    export { default as TopBanner } from './components/TopBanner';
    export { default as TopMenu } from './components/TopMenu';
    export { default as SafeAnchor } from './utils/SafeAnchor';
    export { default as Fade } from './utils/Fade';
    export { default as createBlock } from './utils/createBlock';
    export { default as useRootClose } from './utils/useRootClose';
    export { default as Plugins } from './plugins';
    export { default as AssetPlugin } from './plugins/AssetPlugin';
}
