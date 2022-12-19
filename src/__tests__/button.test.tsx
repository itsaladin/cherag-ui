import React from 'react';
import { cleanup, render, fireEvent } from '@testing-library/react-native';
import { Button } from '../components/Button';

const testIdName = 'testButtonId';
afterEach(cleanup);

describe('Button component', () => {
  it('should find the button component via testId', () => {
    const { getByTestId } = render(<Button testID={testIdName} />);
    const foundButton = getByTestId(testIdName);
    expect(foundButton).toBeTruthy();
  });

  it('should call onPress function when pressed', () => {
    const onPress = jest.fn();
    const { getByTestId } = render(
      <Button onPress={onPress} testID={testIdName} />
    );
    fireEvent.press(getByTestId(testIdName));
    expect(onPress).toHaveBeenCalledTimes(1);
  });
});
