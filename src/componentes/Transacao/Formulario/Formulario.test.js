import { render, screen } from '@testing-library/react';
import Formulario from './index';

test('should render an input field', () => {
    render(<Formulario />);
    const textField = screen.getByPlaceholderText('Digite um valor');
    expect(textField).toBeInTheDocument();
});

test('should render an input field with type number', () => {
    render(<Formulario />);
    const textField = screen.getByPlaceholderText('Digite um valor');
    expect(textField).toHaveAttribute('type', 'number');
});