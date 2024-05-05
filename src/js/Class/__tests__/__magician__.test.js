import Magician from '../Magician;';

test('тест персонажа Magician', () => {
    const player = new Magician('aaa');
    const correctVersion = {
        name: 'aaa',
        type: 'Magician',
        health: 100,
        level: 1,
        attack: 10,
        defence: 40,
    };

    expect(player).toEqual(correctVersion);
});
