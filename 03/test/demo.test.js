//agrupador

describe('Pruebas en Demo', () => {
    

test('Esta prueba demo no debe fallar',()=>{
 
    //1 inicializacion

    const message1='hola mundo';

    //2 estimulo

    const message2=message1.trim();


    //3 observar el comportamiento... esperado

    expect(message1).toBe(message2);

   // instalacion para el autocomplete
   // yarn add -D @types/jest
   
    }
)

});