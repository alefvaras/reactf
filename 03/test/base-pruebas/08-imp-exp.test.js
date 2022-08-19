import { getHeroeById, getHeroesByOwner } from "../../src/base-pruebas/08-imp-exp";
import heroes2 from "../../src/data/Heroes";


describe('Pruebas en 08-imp-exp', () => {
    test('retonar heroe por id', () => {
        

        const id=1;
        const hero = getHeroeById(id);
     expect(hero).toEqual({ id: 1, name: 'Batman', owner: 'DC' }  );

    });

    test('retonar undefined', () => {
        

        const id=11;
        const hero = getHeroeById(id);
        expect(hero).toBeFalsy();

    });

    test('tarea', () => {
        

        const hero= getHeroesByOwner('DC')
        const heroTest= [
            {
                id: 1,
                name: 'Batman',
                owner: 'DC'
            },
         
            {
                id: 3,
                name: 'Superman',
                owner: 'DC'
            },
            {
                id: 4,
                name: 'Flash',
                owner: 'DC'
            },
        ]

        expect(heroTest.length).toBe(3);
        expect(heroTest).toEqual(hero);
        expect(hero).toEqual( heroes2.filter( (heroe) => heroe.owner === 'DC' ))

        const heroM= getHeroesByOwner('Marvel');

        expect(heroM.length).toBe(2);

    });
});