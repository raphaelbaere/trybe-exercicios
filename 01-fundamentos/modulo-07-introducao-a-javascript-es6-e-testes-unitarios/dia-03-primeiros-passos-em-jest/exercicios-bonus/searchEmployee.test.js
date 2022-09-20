const searchEmployee = require('./searchEmployee')

describe('searchEmployee function', () => {
    it('expect(searchEmployee) to be defined', () => {
        expect(searchEmployee).toBeDefined();
    });
    it('searchEmployee("5569-4", "firstName") expected to be "George"', () => {
        expect(searchEmployee("5569-4", "firstName")).toBe("George")
    });
    it('searchEmployee("5569-4", "lastName") expected to be "Jobs"', () => {
        expect(searchEmployee("5569-4", "lastName")).toBe("Jobs")
    });
    it('searchEmployee("5569-4", "specialities") expected to be "Frontend, Redux, React, CSS"', () => {
        expect(searchEmployee("5569-4", "specialities")).toEqual(["Frontend", "Redux", "React", "CSS"])
    });
    it('searchEmployee("034", "firstName") expected to throw an error message "ID não identificada"', () => {
        expect(() => searchEmployee("034", "firstName")).toThrowError(new Error('ID não identificada'))
    });
    it('searchEmployee("5569-4", "abc") expected to throw an error message "Informação indisponível"', () => {
        expect(() => searchEmployee("5569-4", "abc")).toThrowError(new Error('Informação indisponível'))
    });
    it('Testa se lança um erro quando a informação e o ID são inexistentes', () => {
        expect(() => { searchEmployee() }).toThrow();
    });
})