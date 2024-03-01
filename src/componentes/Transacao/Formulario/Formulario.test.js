import { render, screen } from '@testing-library/react';
import Formulario from './index';
import userEvent from '@testing-library/user-event'

describe('should render an input field', () => {
    it(' in the document', () => {
        render(<Formulario />);
        const textField = screen.getByPlaceholderText('Digite um valor');
        expect(textField).toBeInTheDocument();
    });

    it(' with type number', () => {
        render(<Formulario />);
        const textField = screen.getByPlaceholderText('Digite um valor');
        expect(textField).toHaveAttribute('type', 'number');
    });

    it(' that can be filled', () => {
        render(<Formulario />);
        const textField = screen.getByPlaceholderText('Digite um valor');
        userEvent.type(textField, '50')
        expect(textField).toHaveValue(50);
    });
})

it('must call an onSubmit event when clicking on make transaction', () => {
    const makeTransaction = jest.fn();

    render(<Formulario realizarTransacao={makeTransaction} />);
    const button = screen.getByRole('button');

    userEvent.click(button);

    expect(makeTransaction).toHaveBeenCalledTimes(1);
});