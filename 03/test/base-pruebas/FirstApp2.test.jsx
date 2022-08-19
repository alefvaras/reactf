import { render, screen } from "@testing-library/react";
import { Name } from "../../src/FirstApp";

describe('App2', () => {
    const title = "titulo";
    const subtitulo="subtitulo";
    test('debe hacer match con el snapshot', () => {

        const { container } = render(<Name title={title} />)
        expect(container).toMatchSnapshot();
    });
    test('debe de mostrar el titulo', () => {
        render(<Name title={title} />)
        //ultima version actualizada despues de los cambios del DOM
        //  screen
        expect(screen.getByText(title)).toBeTruthy();
    });
    test('retornar el titulo h1', () => {
        render(<Name title={title} />)
        expect(screen.getByRole("heading", { level:1 }).innerHTML).toContain(title);
    });
    test('debe de mostrar subtitulo por props', () => { 
        render(<Name title={title} subtitulo="subtitulo" />)
        expect(screen.getAllByText(subtitulo).length).toBe(1);
     })
})