
import React from 'react';
import { render, screen } from '@testing-library/react';
import Home from '../src/components/Home';
import ModalCard from '../src/components/ModalCard';
import Navbar from '../src/components/Navbar';
import Search from '../src/components/Search';
import { fireEvent } from '@testing-library/react';




// Home.test.js

test('renders Home component', () => {
    render(<Home />);
    
});

// ModalCard.test.js

test('renders ModalCard component with button', () => {
    render(<ModalCard />);
    const buttonElement = screen.getByRole('button', { name: /Read More/i });
    expect(buttonElement).toBeInTheDocument();
});

test('opens modal when Read More button is clicked', () => {
    render(<ModalCard />);
    const buttonElement = screen.getByRole('button', { name: /Read More/i });
    fireEvent.click(buttonElement);

    const modalElement = screen.getByText(/ModalCard/i);
    expect(modalElement).toBeInTheDocument();
});

// Navbar.test.js

test('renders Navbar component', () => {
    render(<Navbar />);
   
});

// Search.test.js

test('renders Search component with input and filters', () => {
    render(<Search />);
    const inputElement = screen.getByPlaceholderText(/Search Here/i);
    expect(inputElement).toBeInTheDocument();

    const typeFilterElement = screen.getByPlaceholderText(/Type/i);
    expect(typeFilterElement).toBeInTheDocument();

    const countryFilterElement = screen.getByPlaceholderText(/Country/i);
    expect(countryFilterElement).toBeInTheDocument();

    const activeFilterElement = screen.getByText(/Active/i);
    expect(activeFilterElement).toBeInTheDocument();
});

test('fetches rockets data from API', async () => {
    const response = await fetch('https://api.spacexdata.com/v3/rockets');
    const data = await response.json();

    expect(response.status).toBe(200);
    expect(data.length).toBeGreaterThan(0);
});

test('renders Search component with input and filters', () => {
    render(<Search />);
    const inputElement = screen.getByPlaceholderText(/Search Here/i);
    expect(inputElement).toBeInTheDocument();

    const typeFilterElement = screen.getByPlaceholderText(/Type/i);
    expect(typeFilterElement).toBeInTheDocument();

    const countryFilterElement = screen.getByPlaceholderText(/Country/i);
    expect(countryFilterElement).toBeInTheDocument();

    const activeFilterElement = screen.getByText(/Active/i);
    expect(activeFilterElement).toBeInTheDocument();
});

test('updates search value when input is changed', () => {
    render(<Search />);
    const inputElement = screen.getByPlaceholderText(/Search Here/i);
    fireEvent.change(inputElement, { target: { value: '....' } });

    expect(inputElement.value).toBe('....'); // Updated assertion
});

