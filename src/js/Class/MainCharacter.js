export default class Character {
    constructor (name, type) {
        const typesOfPlayers = ['Bowman', 'Daemon', 'Magician', 'Swordsman', 'Undead', 'Zombie']
        if((name.length < 2) || (name.length > 10)) {
            throw new Error('Не верно')
        };

        if(!typesOfPlayers.includes(type)) {
            throw new Error('Не верно')
        };

        this.name = name,
        this.type = type,
        this.health = 0,
        this.level = 1,
        this.attack = '',
        this.defence = ''

    };
};