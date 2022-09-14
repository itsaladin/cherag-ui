import React from 'react';
import { render } from '@testing-library/react-native';
import App from '../App';

describe('App', () => {
  it('should show hello world', () => {
    const { debug } = render(<App />);

    // const foundHelloWorldText = getByText('Cherag-UI');

    // expect(foundHelloWorldText).toBeNull();
    debug();
  });
});
