import React, { lazy, Suspense } from 'react';

const LazyChatMessage = lazy(() => import('./ChatMessage'));

const ChatMessage = (props: JSX.IntrinsicAttributes & { children?: React.ReactNode; }) => (
  <Suspense fallback={null}>
    <LazyChatMessage {...props} />
  </Suspense>
);

export default ChatMessage;
