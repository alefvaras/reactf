import { getSaludo } from "../../src/base-pruebas/02-template-string";

describe('pruebas 02-template-string', () => {
    
    test('getSaludo debe retornar Alejandro ', () => {
        const name='Alejandro';
        const message= getSaludo(name);
        expect(message).toBe(`Hola ${name}`);
    });
});