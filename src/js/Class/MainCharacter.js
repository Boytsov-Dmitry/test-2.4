export default class Character {
    constructor (name, type) {
        const typesOfPlayers = ['Bowman', 'Daemon', 'Magician', 'Swordsman', 'Undead', 'Zombie'];
        if((name.length < 2) || (name.length > 10)) {
            throw new Error('Не верно');
        }

        if(!typesOfPlayers.includes(type)) {
            throw new Error('Не верно');
        }

        this.name = name;
        this.type = type;
        this.health = 100;
        this.level = 1;
        this.attack = undefined;
        this.defence = undefined;
    };
    
    levelUp() {
        if(this.health !== 0) {
            this.level += 1;
            this.attack = this.attack * 1.2;
            this.defence = this.defence * 1.2;
            this.health = 100;
        } else {
            throw new Error('Нельзя повысить левел умершего');
        }
    };

    damage(points) {
        if(this.health >= 0) {
            this.health -= points * (1 - this.defence / 100)
        } else {
            throw new Error('Персонаж погиб');
        }
    };
};
