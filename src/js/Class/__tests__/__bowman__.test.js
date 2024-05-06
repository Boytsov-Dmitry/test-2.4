import Bowman from '../Bowman';

test('тест персонажа bowman', () => {
    const player = new Bowman('aaa', 'Bowman');
    const correctVersion = {
        name: 'aaa',
        type: 'Bowman',
        health: 100,
        level: 1,
        attack: 25,
        defence: 25,
    };

    expect(player).toEqual(correctVersion);
});
