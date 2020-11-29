import React from 'react';
import ReactDOM from 'react-dom';
import { render } from '@testing-library/react';
import "@testing-library/jest-dom/extend-expect"; 
import Contact from './Component/Contact';

it('renders without crashing', () => {
    const div = document.createElement("div");
    ReactDOM.render(<Contact />, div)
});

it('renders button correctly', () => {
    const { getByTestId } = render(<Contact></Contact>);
    expect(getByTestId('contactus-button')).toHaveTextContent("Contact Us"); 
});

it('renders input correctly', () => {
    const { getbyTestId } = render(<Contact />);
    expect(getByTestId('contactus-email')).toHaveTextContent("someone@email.com");
});

it('render input correctly', () => {
    const { getbyTestId } = render(<Contact />);
    expect(getByTestId('contactus-message')).toHaveTextContent("Must have at least 10 characters");
});