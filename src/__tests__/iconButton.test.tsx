import React from 'react';
import { cleanup, render, fireEvent } from '@testing-library/react-native';
import { IconButton } from '../components/IconButton';

const onPress = jest.fn();
const icon = 'rocket';
const iconButtonTestId = 'IconButtonTestId';
afterEach(cleanup);

describe('IconButton component', () => {
  it('IconButton component should render', () => {
    const { container } = render(<IconButton icon={icon} onPress={onPress} />);
    expect(container).toBeTruthy();
  });

  it('IconButton component should call the onPress callback when pressed', () => {
    const { getByTestId } = render(
      <IconButton icon={icon} onPress={onPress} />
    );
    const button = getByTestId(iconButtonTestId);

    fireEvent.press(button);
    expect(onPress).toHaveBeenCalled();
  });
});
