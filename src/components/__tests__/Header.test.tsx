import React from 'react';
import { render, fireEvent } from '@testing-library/react-native';
import Header from '../Header';
import { useNavigation } from '@react-navigation/native';

// Mock the useNavigation hook
jest.mock('@react-navigation/native', () => ({
  useNavigation: jest.fn(),
}));

describe('Header Component', () => {
  it('renders the title correctly', () => {
    const { getByText } = render(<Header title="Test Title" />);
    const titleElement = getByText('Test Title');
    expect(titleElement).toBeTruthy();
  });

  it('renders the back button when showBackButton is true', () => {
    const mockGoBack = jest.fn();
    (useNavigation as jest.Mock).mockReturnValue({ goBack: mockGoBack });

    const { getByTestId } = render(
      <Header title="Test Title" showBackButton={true} />
    );
    const backButton = getByTestId('back-button');
    expect(backButton).toBeTruthy();

    // Simulate pressing the back button
    fireEvent.press(backButton);
    expect(mockGoBack).toHaveBeenCalled();
  });

  it('does not render the back button when showBackButton is false', () => {
    const { queryByTestId } = render(
      <Header title="Test Title" showBackButton={false} />
    );
    const backButton = queryByTestId('back-button');
    expect(backButton).toBeNull();
  });
});
