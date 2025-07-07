import React, { FC } from 'react';
import './ChatMessage.css'

interface ChatMessageProps {}

const ChatMessage: FC<ChatMessageProps> = () => (
  <div className="chat-message">ChatMessage Component</div>
);

export default ChatMessage;
