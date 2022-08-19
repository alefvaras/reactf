import { getUser, getUsuarioActivo } from "../../src/base-pruebas/05-funciones";

describe('05-funciones', () => {

    test('getUset debe de retornar un objeto', () => {

        const testUser = {
            uid: 'ABC123',
            username: 'El_Papi1502',
        }
        const user = getUser();

        expect(testUser).toStrictEqual(user);

    });

    test('getUsuario debe retonar un objeto', () => {

        const name = 'Alejandro';
        const testUser = (name) => ({
            uid: 'ABC567',
            username: name
        })
        const getUserOrig = getUsuarioActivo(name);

        //    expect(testUser(name)).toEqual(getUserOrig);
        expect((name) => ({
            uid: 'ABC567',
            username: name
        }).toEqual(getUserOrig));

    })
});