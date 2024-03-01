import { calculaNovoSaldo } from ".";

describe('when i make a transaction', () => {

    it('which is a deposit, the balance must increase', () => {
        const transaction = {
            transacao: 'Depósito',
            valor: 50
        }

        const newBalance = calculaNovoSaldo(transaction, 100);
        expect(newBalance).toBe(150);
    });

    it('which is a transaction, the balance should decrease', () => {
        const transaction = {
            transacao: 'Transferência',
            valor: 50
        }

        const newBalance = calculaNovoSaldo(transaction, 100);
        expect(newBalance).toBe(50);
    });
});