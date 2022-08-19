import { render } from "@testing-library/react";
import { Name } from "../../src/FirstApp";

describe('Pruebas en FirstApp.', () => {
    // test('debe hacer match con el snapshot', () => { 

    //     const title="titulo";
    //    const{container}= render(<Name title={title}/>)
    //    expect(container).toMatchSnapshot();


    //  });

    test('retornar el titulo h1', () => {

        const title = "titulo";
        const { container, getByText, getByTestId } = render(<Name title={title} />)
        expect(getByText(title)).toBeTruthy();
        // const h1=container.querySelector('h1');
        expect(getByTestId('test-title').innerHTML).toBe(title)
        // expect(h1.innerHTML).toContain(title);

    });
    test('debe de mostrar subtitulo por props', () => {

        const title = "titulo";
        const subtitulo = 'subtitulo';
        const { getByText, getAllByText } = render(<Name title={title} subtitulo="subtitulo" />)
        expect(getByText(subtitulo)).toBeTruthy();
        expect(getAllByText(subtitulo).length).toBe(1);



    });
});