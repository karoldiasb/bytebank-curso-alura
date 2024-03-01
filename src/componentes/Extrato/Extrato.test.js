import { render, screen } from '@testing-library/react';
import Extrato from './index'

it('must render transaction list', () => {
    const transactions = [
        {
            transacao: 'Depósito',
            valor: 100
        }
    ];

    render(<Extrato transacoes={transactions} />)

    const list = screen.getByRole('listitem');
    expect(list).toBeInTheDocument();
});