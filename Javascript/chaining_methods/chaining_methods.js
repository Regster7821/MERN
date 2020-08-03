class User{
    constructor(name, email){
        this.name = name;
        this.email = email;
        this.accountBalance = 0;
    }
    makeDeposit(amount){
        this.accountBalance += amount;
        return this;
    }
    makeWithdrawal(amount){
        this.accountBalance -= amount;
        return this;
    }
    displayBalance(){
        console.log('User:', this.name, '- Balance:', this.accountBalance);
    }
    makeTransfer(amount, name){
        this.accountBalance -= amount;
        name.accountBalance += amount;
        return this;
    }
}

const reagan = new User('Reagan Crosby', 'johnreagancrosby@gmail.com');
const elon = new User('Elon Musk', 'elonmusk@gmail.com');
const jeff = new User('Jeff Bezos', 'jeffbezos@gmail.com');

// console.log(reagan.name);
// console.log(elon.name);
// console.log(jeff.name);

reagan.makeDeposit(100).makeDeposit(100).makeDeposit(100).makeWithdrawal(200).displayBalance();

elon.makeDeposit(1000).makeDeposit(1000).makeWithdrawal(500).makeWithdrawal(200).displayBalance();

jeff.makeDeposit(10000).makeWithdrawal(500).makeWithdrawal(500).makeWithdrawal(500).displayBalance();

console.log('After money transfer from Reagan to Jeff...')

reagan.makeTransfer(1, jeff).displayBalance();
jeff.displayBalance();