import React, { FC } from 'react';
import { ChatMessageWrapper } from './ChatMessage.styled';

interface ChatMessageProps {}

const ChatMessage: FC<ChatMessageProps> = () => (
 <ChatMessageWrapper data-testid="ChatMessage">
    ChatMessage Component
 </ChatMessageWrapper>
);

export default ChatMessage;
