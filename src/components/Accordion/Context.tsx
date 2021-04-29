import React from 'react';

type SelectableContextType = (key: string | null, event: any) => void;

export const SelectableContext = React.createContext<SelectableContextType | null>(null);
const AccordionContext = React.createContext<string | null>(null);

export default AccordionContext;
