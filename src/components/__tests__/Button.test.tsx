import React from 'react';
import { render, fireEvent } from '@testing-library/react-native';
import Button from '../Button';

describe('Button', () => {
  it('renders correctly and responds to press events', () => {
    const mockOnPress = jest.fn();

    const { getByText } = render(
      <Button text="Click Me" onPress={mockOnPress} />
    );

    const button = getByText('Click Me');
    fireEvent.press(button);

    expect(mockOnPress).toHaveBeenCalledTimes(1);
  });
});
