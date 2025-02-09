// Generated by CodiumAI

describe('limpiar_function', () => {

    // Tests that passing a null or undefined value to the limpiar function does not throw an error.
    it('test_passing_null_or_undefined', () => {
        expect(() => limpiar(null)).not.toThrow();
        expect(() => limpiar(undefined)).not.toThrow();
    });


    // Tests that passing a null or undefined value to the limpiar function does not throw an error.
    it('test_behaviour_null_or_undefined', () => {
        expect(() => limpiar(null)).not.toThrow();
        expect(() => limpiar(undefined)).not.toThrow();
    });


    // Tests that the limpiar function clears the content of a given HTML element
    it('test_behaviour_clear_content', () => {
        const campo = document.createElement('div');
        campo.innerHTML = 'Some content';

        limpiar(campo);

        expect(campo.innerHTML).toBe('');
    });


    // Tests that the limpiar function does not modify the content of a given HTML element if it is already empty
    it('test_behaviour_not_modify_if_empty', () => {
        const campo = document.createElement('div');
        campo.innerHTML = '';

        limpiar(campo);

        expect(campo.innerHTML).toBe('');
    });


});
