import MainCharacter from '../MainCharacter';

test('на наличие ошибки в имени', () => {
    expect(() => new Character('o', 'Daemon')).toThrow(new Error('Не верно'));
});

test('на наличие ошибки в типе', () => {
    expect(() => new Character('Zubaref', 'fff')).toThrow(new Error('Не верно'));
});