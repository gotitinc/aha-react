import React from 'react';

type SelectableContextType = (key: string | null, event: any) => void;

export const SelectableContext = React.createContext<SelectableContextType | null>(null);
SelectableContext.displayName = 'SelectableContext';

const AccordionContext = React.createContext<string | null>(null);
AccordionContext.displayName = 'AccordionContext';

export default AccordionContext;
