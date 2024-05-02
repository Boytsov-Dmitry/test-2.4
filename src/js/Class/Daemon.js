import Character from './MainCharacter';

export default class Daemon extends Character {
    constructor(name, type) {
        super(name, type);
        this.type = 'Daemon';
        this.attack = 10;
        this.defence = 40;
    };
};
