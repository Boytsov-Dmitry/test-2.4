import Undead from '../Undead';

test('тест персонажа Undead', () => {
    const player = new Undead('aaa');
    const correctVersion = {
        name: 'aaa',
        type: 'Undead',
        health: 100,
        level: 1,
        attack: 25,
        defence: 25,
    };

    expect(player).toEqual(correctVersion);
});
