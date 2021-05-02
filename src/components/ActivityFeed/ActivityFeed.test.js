import { render, cleanup } from '@testing-library/react';
import App from '../../App';
import React from 'react';
afterEach(cleanup)

it('it displays 3 Activity feed', () => {
    const { getByTestId } = render(<App />);
    const todoList = getByTestId('feedlist');
    expect(todoList.children.length).toBe(3);  
});