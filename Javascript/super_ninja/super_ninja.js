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

class Sensei extends Ninja{
    constructor(name){
        super(name, 200);
        this.health = 200;
        this.speed = 10;
        this.strength = 10;
        this.wisdom = 10;
    }
    senseiName(){
        const message = super.sayName();
        console.log(message);
        return this;
    }
    senseiStats(){
        const message = super.showStats();
        console.log(message);
        return this;
    }
    speakWisdom(){
        super.drinkSake();
        console.log('Talk is cheap. Show me the code.')
        return this;
    }
    drinkSake(){
        super.drinkSake();
        return this;
    }
}

const sensei1 = new Sensei('Elon');
sensei1.senseiName().senseiStats().speakWisdom().senseiStats().drinkSake().senseiStats();
