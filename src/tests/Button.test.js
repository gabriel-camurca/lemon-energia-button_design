import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import Button from '../components/Button.js';

it('should have button text showing', () => {
    render(<Button>Text</Button>);
    const buttonElement = screen.queryByText("Text");
    expect(buttonElement).toBeInTheDocument()
})

it('should pass colorscheme "primary" as prop', () => {
    render(<Button color="primary"></Button>);
    const button = screen.queryByRole('button');
    expect(button).toBeInTheDocument()
    expect(button).toHaveClass("primary")
})

it('should pass colorscheme "secondary" as prop', () => {
    render(<Button color="secondary"></Button>);
    const button = screen.queryByRole('button');
    expect(button).toBeInTheDocument()
    expect(button).toHaveClass("secondary")
})
it('should render icon "arrow-right"', () => {
    render(<Button icon="arrow-right"></Button>);
    const icon = screen.queryByRole('img');
    expect(icon).toBeInTheDocument();
    expect(icon).toHaveAttribute('src', 'arrow-right.svg');
})
it('should render icon "check"', () => {
    render(<Button icon="check"></Button>);
    const icon = screen.queryByRole('img');
    expect(icon).toBeInTheDocument();
    expect(icon).toHaveAttribute('src', 'check.svg');
})
it('should render icon "refresh"', () => {
    render(<Button icon="refresh"></Button>);
    const icon = screen.queryByRole('img');
    expect(icon).toBeInTheDocument();
    expect(icon).toHaveAttribute('src', 'refresh.svg');
})
it('should execute function passed on click', () => {
    const clicked = jest.fn();
    render(<Button onClick={clicked}></Button>);
    const button = screen.queryByRole('button');
    userEvent.click(button)
    expect(clicked).toHaveBeenCalled()
})
it('should disable button', () => {
    const clicked = jest.fn();
    render(<Button onClick={clicked} disabled></Button>);
    const button = screen.queryByRole('button');
    expect(button).toHaveAttribute('disabled');
    userEvent.click(button)
    expect(clicked).not.toHaveBeenCalled()

})
it('should not disable button', () => {
    render(<Button disabled={false}></Button>);
    const button = screen.queryByRole('button');
    expect(button).not.toHaveAttribute('disabled')
})
it('should render children', () => {
    render(<Button loading={false}>Text</Button>);
    const children = screen.queryByTestId('children')
    expect(children).toBeInTheDocument();
})
it('should display loading animation', () => {
    render(<Button isLoading={true}>Text</Button>);
    const loading = screen.queryByTestId('loading')
    expect(loading).toBeInTheDocument();
})
it('should not display loading animation', () => {
    render(<Button isLoading={false}>Text</Button>);
    const loading = screen.queryByTestId('loading')
    expect(loading).not.toBeInTheDocument();
})