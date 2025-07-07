import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import ChatMessage from './ChatMessage';

describe('<ChatMessage />', () => {
  test('it should mount', () => {
    render(<ChatMessage />);

    const chatMessage = screen.getByTestId('ChatMessage');

    expect(chatMessage).toBeInTheDocument();
  });
});