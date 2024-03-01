import { render, screen } from '@testing-library/react';
import Formulario from './index';
import userEvent from '@testing-library/user-event'

describe('should render an input field', () => {
    test(' in the document', () => {
        render(<Formulario />);
        const textField = screen.getByPlaceholderText('Digite um valor');
        expect(textField).toBeInTheDocument();
    });

    test(' with type number', () => {
        render(<Formulario />);
        const textField = screen.getByPlaceholderText('Digite um valor');
        expect(textField).toHaveAttribute('type', 'number');
    });

    test(' that can be filled', () => {
        render(<Formulario />);
        const textField = screen.getByPlaceholderText('Digite um valor');
        userEvent.type(textField, '50')
        expect(textField).toHaveValue(50);
    });
})