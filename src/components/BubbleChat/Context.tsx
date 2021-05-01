import React from 'react';

interface BubbleChatContextType {
  type?: string;
}
const BubbleChatContext = React.createContext<BubbleChatContextType | null>(null);
BubbleChatContext.displayName = 'BubbleChatContext';

export default BubbleChatContext;
