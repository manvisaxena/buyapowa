
import {cleanup, render } from '@testing-library/react';
import App from '../../App';
import React from 'react';
afterEach(cleanup)

it('No friends box initially', () => {
    const { getByTestId , getByText} = render(<App />);
    const todoList = getByTestId('friendspage');
    expect(todoList).toHaveStyle("display: block");

});


