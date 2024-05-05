import Swordsman from '../Swordsman;';

test('тест персонажа Swordsman', () => {
    const player = new Swordsman('aaa');
    const correctVersion = {
        name: 'aaa',
        type: 'Swordsman',
        health: 100,
        level: 1,
        attack: 40,
        defence: 10,
    };

    expect(player).toEqual(correctVersion);
});
