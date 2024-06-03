 export  class Team {
    constructor() {
        this.members = new Set();
   };

    add(hero) {
        this.members.add(hero)
    };

    addAll(...arrayHero) {
        for(const hero of arrayHero)
        this.members.add(hero)
    };

    toArray() {
        return Array.from(this.members);
    };
};

export class Character{
    constructor(name) {
        this.name = name;
    };
      
}


