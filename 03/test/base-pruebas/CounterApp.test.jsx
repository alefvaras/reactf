import { fireEvent, render, screen } from "@testing-library/react";
import { CounterApp } from "../../src/CounterApp";

describe('CounterApp', () => {

    const value = 100;
    test('debe hacer match con el snpshot ', () => {
        const { container } = render(<CounterApp value={value} />)

        expect(container).toMatchSnapshot();
    });

    test('debe mostrar el valor inicial de 100 ', () => {
        render(<CounterApp value={value} />)

        expect(screen.getAllByText(value)).toBeTruthy();
        expect(screen.getByRole("heading",{level:2}).innerHTML).toContain(`${value}`)
    });

    test('debe de incrementar con el botom +1', () => {
        render(<CounterApp value={value} />)
        fireEvent.click(screen.getByText('+1'));
        expect(screen.getByText('101')).toBeTruthy();
    });

    test('debe de decrementar con el botom -91', () => {
        render(<CounterApp value={value} />)
        fireEvent.click(screen.getByText('-1'));
        screen.debug()
        expect(screen.getByText('99')).toBeTruthy();
    });

    test('reset boton', () => {
        render(<CounterApp value={value} />)
        fireEvent.click( screen.getByRole('button',{name:'btn-reset'}));
        screen.debug()
        expect(screen.getByText(value)).toBeTruthy();
    });

})