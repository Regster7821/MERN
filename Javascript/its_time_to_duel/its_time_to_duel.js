class Card{
    constructor(name, cost){
        this.name = name;
        this.cost = cost;
    }
}

class Unit extends Card{
    constructor(name, cost, power, res){
        super(name, cost);
        this.name = name;
        this.cost = cost;
        this.power = power;
        this.res = res;
    }
    attack(target){
        if( target instanceof Unit ) {
            target.res -= this.power;
            console.log(`${this.name} attacks the ${target.name} for ${this.power} damage!`);
        } else {
            throw new Error( "Target must be a unit!" );
        } 
    }
}

class Effect extends Card{
    constructor(name, cost, text, stat, magnitude){
        super(name,cost)
        this.name = name;
        this.cost = cost;
        this.text = text;
        this.stat = stat;
        this.magnitude = magnitude;
    }
    play(target){
        if( target instanceof Unit ) {
            target[this.stat] += this.magnitude;
            console.log(`The ${this.name} was played on ${target.name}`);
            console.log(this.text);
        } else {
            throw new Error( "Target must be a unit!" );
        } 
    }
}

class Player{
    constructor(name){
        this.name = name;
        this.hand = [hardAlgorithm, unhandledPromiseRejection, pairProgramming];
    }
    summon(card){
        this.hand.push(card);
        console.log(`${this.name} summons ${card.name}`)
    }

}

const redBeltNinja = new Unit('Red Belt Ninja', 3, 3, 4);
const blackBeltNinja = new Unit('Black Belt Ninja', 4, 5, 4);

const hardAlgorithm = new Effect('Hard Algorithm', 2, `Increase target's resilience by 3`, 'res', 3);
const unhandledPromiseRejection = new Effect('Unhandled Promise Rejection', 1, `Reduce target's resilience by 2`, 'res', 2);
const pairProgramming = new Effect('Pair Programming', 3, `Increase target's power by 2`, 'power', 2);

const player1 = new Player('Player 1');
const player2 = new Player('Player 2');

player1.summon(redBeltNinja);
hardAlgorithm.play(redBeltNinja);
player2.summon(blackBeltNinja);
unhandledPromiseRejection.play(redBeltNinja);
pairProgramming.play(redBeltNinja);
redBeltNinja.attack(blackBeltNinja);