import React from 'react';
import { cleanup, render } from '@testing-library/react-native';
import { Button } from '../components/Button';

afterEach(cleanup);

describe('App', () => {
  it('should find the button component via testId', () => {
    const testIdName = 'testButtonId';

    const { getByTestId } = render(<Button />);

    const foundButton = getByTestId(testIdName);

    expect(foundButton).toBeTruthy();
  });
});
