import { render, screen } from '@testing-library/react';
import Menu from './index';

test('should render a link to initial page', () => {
    render(<Menu />);
    const linkInitialPage = screen.getByText('Inicial');
    expect(linkInitialPage).toBeInTheDocument();
});

test('should render a list with 4 links', () => {
    render(<Menu />);
    const linkList = screen.getAllByRole('link');
    expect(linkList).toHaveLength(4);
});

test('should not render the link to Extract', () => {
    render(<Menu />);
    const extractLink = screen.queryByText('Extrato');
    expect(extractLink).not.toBeInTheDocument();
});

test('should render a list of links with class link', () => {
    render(<Menu />);
    const links = screen.getAllByRole('link');
    links.forEach(link => expect(link).toHaveClass('link'));
    expect(links).toMatchSnapshot();
});