import Character from '../MainCharacter';
import MainCharacter from '../MainCharacter';

test('на наличие ошибки в имени', () => {
    expect(() => new Character('g', 'Daemon')).toThrow(new Error('Не верно'));
});

test('на наличие ошибки в типе', () => {
    expect(() => new Character('Zubaref', 'fff')).toThrow(new Error('Не верно'));
});

const player = new Character('Zubaref', 'Swordsmen');

player.health = 100;
player.attack = 40;
player.defence = 10;

// level += 1;
// attack = attack * 1.2;
// defence = defence * 1.2;
// health = 100;

test('проверка метода levelUp', () => {
    player.levelUp();
    expect(player.level).toBe(2);
});

test('проверка метода levelUp атака', () => {
    player.levelUp();
    expect(player.attack).toBe(48);
});

test('проверка метода levelUp защита', () => {
    player.levelUp();
    expect(player.defence).toBe(12);
});

// health = 100;
// attack = 40;
// defence = 10;
// health -= points * (1 - defence / 100)

test('проверка здоровья (жив)', () => {
    player.damage(50);
    expect(player.health).toBe(55);
});

test('проверка здоровья (погиб)', () => {
    player.damage(120);
    expect(player.health).toBe(-8);
});

const deadPlayer = new Character('Bobaref', 'Swordsmen');

player.health = 0;
player.attack = 40;
player.defence = 10;

test('проверка метода levelUp (персонаж погиб)', () => {
    expect(() => player.levelUp()).toThrow(new Error('Персонаж погиб'));
})





