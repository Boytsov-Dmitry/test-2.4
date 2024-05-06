import Zombie from '../Zombie';

test('тест персонажа Zombie', () => {
    const player = new Zombie('aaa', 'Zombie');
    const correctVersion = {
        name: 'aaa',
        type: 'Zombie',
        health: 100,
        level: 1,
        attack: 40,
        defence: 10,
    };

    expect(player).toEqual(correctVersion);
});
