import {getImange}  from "../../src/base-pruebas/11-async-await";

describe('Prueba 11-async-await', () => {


    test('retornar url de la imagen', async() => {
        
        const url= await getImange();
        expect(typeof url).toBe('string');
       // expect( url).toBe('No se encontro la imagen');
    });

    
    
});