import React from 'react';
import { render, fireEvent } from '@testing-library/react-native';
import Question from '../Question';
import { Question as QuestionAtom } from '../../atoms/questionsAtom';

// Define a sample question
const sampleQuestion: QuestionAtom = {
  question: 'Is this a sample question?',
  correct_answer: 'True',
};

describe('QuestionComponent', () => {
  it('renders correctly and displays the question', () => {
    const mockOnAnswer = jest.fn();

    const { getByText } = render(
      <Question question={sampleQuestion} onAnswer={mockOnAnswer} />
    );

    expect(getByText('Is this a sample question?')).toBeTruthy();
  });

  it('handles button presses correctly', () => {
    const mockOnAnswer = jest.fn();

    const { getByText } = render(
      <Question question={sampleQuestion} onAnswer={mockOnAnswer} />
    );

    const trueButton = getByText('True');
    const falseButton = getByText('False');

    fireEvent.press(trueButton);
    expect(mockOnAnswer).toHaveBeenCalledWith('True');
    expect(mockOnAnswer).toHaveBeenCalledTimes(1);

    fireEvent.press(falseButton);
    expect(mockOnAnswer).toHaveBeenCalledWith('False');
    expect(mockOnAnswer).toHaveBeenCalledTimes(2);
  });
});
