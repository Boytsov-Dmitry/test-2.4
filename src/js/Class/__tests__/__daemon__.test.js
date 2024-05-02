import MainCharacter from '../Daemon';

test('тест персонажа Daemon', () => {
    const player = new Daemon('aaa');
    const correctVersion = {
        name: 'aaa',
        type: 'Daemon',
        health: 100,
        level: 1,
        attack: 10,
        defence: 40,
    };

    expect(player).toEqual(correctVersion);
});