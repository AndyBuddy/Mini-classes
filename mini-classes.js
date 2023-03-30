class Character {
    constructor(name) {
        this.name = name;
    }
}

class Good extends Character {
    constructor(name, age, skill) {
        super(name);
        this.age = age;
        this.skill = skill;
    }
}

class Bad extends Character {
    constructor(name, age, skill) {
        super(name);
        this.age = age;
        this.skill = skill;
    }
}

