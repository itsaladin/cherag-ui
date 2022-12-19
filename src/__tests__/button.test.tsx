import React from 'react';
import { cleanup, render, fireEvent } from '@testing-library/react-native';
import { Button } from '../components/Button';

afterEach(cleanup);

describe('Button component', () => {
  it('should find the button component via testId', () => {
    const testIdName = 'testButtonId';
    const { getByTestId } = render(<Button />);
    const foundButton = getByTestId(testIdName);
    expect(foundButton).toBeTruthy();
  });

  it('should call onPress function when pressed', () => {
    const testIdName = 'testButtonId';
    const onPress = jest.fn();
    const { getByTestId } = render(<Button onPress={onPress} />);
    fireEvent.press(getByTestId(testIdName));
    expect(onPress).toHaveBeenCalledTimes(1);
  });
});
