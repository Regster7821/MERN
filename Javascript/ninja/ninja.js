class Ninja{
    constructor(name, health){
        this.name = name;
        this.health = health;
        this.speed = 3;
        this.strength = 3;
    }
    sayName(){
        console.log(`My name is ${this.name}!`);
        return this;
    }
    showStats(){
        console.log(`Ninja: ${this.name} - Health: ${this.health} - Speed: ${this.speed} - Strength: ${this.strength}`)
        return this;
    }
    drinkSake(){
        this.health += 10;
        return this;
    }
}

const ninja1 = new Ninja('Reagan', 10);

ninja1.showStats();
console.log('After Reagan drinks sake...')
ninja1.drinkSake().showStats();