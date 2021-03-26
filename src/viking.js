// Soldier
class Soldier {
    constructor(health, strength) {
        this.health = health;
        this.strength = strength;
    }
    attack(){
        return this.strength;
    }
    receiveDamage(theDamage) {
        this.health -= theDamage;
    }

}

// Viking
class Viking extends Soldier {
    constructor(name, health, strength) {
        super (health, strength);
        this.name = name;
    }
    receiveDamage(theDamage){
        this.health -= theDamage;
        
        if(this.health > 0){
            return `${this.name} has received ${theDamage} points of damage`;
        } else {
            return  `${this.name} has died in act of combat`;
        }
    }
    battleCry(){
        return "Odin Owns You All!";
    }
}

// Saxon
class Saxon extends Soldier{
    constructor(health, strength) {
        super (health, strength);
    }
    receiveDamage(theDamage){
        this.health -= theDamage;
        
        if(this.health > 0){
            return `A Saxon has received ${theDamage} points of damage`;
        } else {
            return "A Saxon has died in combat";
        }
    }
}

// War
class War {
//    constructor(vikingArmy, saxonArmy){
//    this.vikingArmy = vikingArmy;
//    this.saxonArmy = saxonArmy;
//}
constructor() {
    this.vikingArmy = [];
    this.saxonArmy = [];
    }
    addViking(vikingObj){
        this.vikingArmy.push(vikingObj);
    }
    addSaxon(saxonObj) {
        this.saxonArmy.push(saxonObj);
    }
    vikingAttack() {
      const randomVikingIndex = Math.floor(Math.random() * this.vikingArmy.length);
      const randomViking = this.vikingArmy[randomVikingIndex];
      const randomSaxonIndex = Math.floor(Math.random() * this.saxonArmy.length);
      const randomSaxon = this.saxonArmy[randomSaxonIndex];

      const damage  = randomSaxon.receiveDamage(randomViking.attack());
      if (randomSaxon.health <= 0) {
        this.saxonArmy.splice(randomSaxonIndex, 1);
      }
      return damage;

    }
    saxonAttack() {
        const randomSaxonIndex = Math.floor(Math.random() * this.saxonArmy.length);
        const randomSaxon = this.saxonArmy[randomSaxonIndex];
        const randomVikingIndex = Math.floor(Math.random() * this.vikingArmy.length);
        const randomViking = this.vikingArmy[randomVikingIndex];

        const damage = randomViking.receiveDamage(randomSaxon.attack());
        
        if(randomViking.health <= 0) {
            this.vikingArmy.splice(randomSaxonIndex, 1);
        }
        return damage;

    }
     showStatus() {
      if(this.saxonArmy.length === 0){
            return "Vikings have won the war of the century!";

        } else if(this.vikingArmy.length === 0){
            return "Saxons have fought for their lives and survived another day...";

        } else {
            return "Vikings and Saxons are still in the thick of battle.";
        } 
    } 
}
