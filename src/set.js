export class Team {
  constructor() {
    this.members = new Set();
  }

  add(hero) {
    if(this.members.has(hero)){
      throw new Error('Этот персонаж уже есть в команде');
    }else{
      this.members.add(hero);
    }
  }

  addAll(...arrayHero) {
    for (const hero of arrayHero)
      { this.members.add(hero); }
  }

  toArray() {
    return Array.from(this.members);
  }
}

export class Character {
  constructor(name) {
    this.name = name;
  }
}
